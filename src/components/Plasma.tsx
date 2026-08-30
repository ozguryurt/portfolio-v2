import { useEffect, useRef, useState } from "react"
import { Mesh, Program, Renderer, Triangle } from "ogl"

interface PlasmaProps {
  color?: string
  speed?: number
  direction?: "forward" | "reverse" | "pingpong"
  scale?: number
  opacity?: number
  mouseInteractive?: boolean
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 0.5, 0.2]
  return [
    Number.parseInt(result[1], 16) / 255,
    Number.parseInt(result[2], 16) / 255,
    Number.parseInt(result[3], 16) / 255,
  ]
}

function shouldUseStaticEffect() {
  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean }
  }
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    nav.connection?.saveData === true ||
    (nav.deviceMemory !== undefined && nav.deviceMemory <= 2)
  )
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);

  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;
  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y));
    p.z -= 4.;
    S = p;
    d = p.y-T;
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05);
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T));
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4;
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`

export default function Plasma({
  color = "#ffffff",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}: PlasmaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [useStaticEffect, setUseStaticEffect] = useState(shouldUseStaticEffect)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setUseStaticEffect(shouldUseStaticEffect())
    mediaQuery.addEventListener("change", updatePreference)
    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || useStaticEffect) return

    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8
    const qualityScale = window.innerWidth < 768 || deviceMemory <= 4 ? 0.45 : 0.75
    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5) * qualityScale,
    })
    const gl = renderer.gl
    const canvas = gl.canvas as HTMLCanvasElement
    canvas.style.display = "block"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    container.appendChild(canvas)

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(hexToRgb(color)) },
        uUseCustomColor: { value: color ? 1 : 0 },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: direction === "reverse" ? -1 : 1 },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1 : 0 },
      },
    })
    const geometry = new Triangle(gl)
    const mesh = new Mesh(gl, { geometry, program })

    const setSize = () => {
      const rect = container.getBoundingClientRect()
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height))
      const resolution = program.uniforms.iResolution.value as Float32Array
      resolution[0] = gl.drawingBufferWidth
      resolution[1] = gl.drawingBufferHeight
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mouse = program.uniforms.uMouse.value as Float32Array
      mouse[0] = (event.clientX - rect.left) * renderer.dpr
      mouse[1] = (rect.height - (event.clientY - rect.top)) * renderer.dpr
    }

    let frame = 0
    let isIntersecting = true
    let lastFrameTime = 0
    const startTime = performance.now()
    const frameInterval = 1000 / 30

    const canAnimate = () => isIntersecting && !document.hidden
    const loop = (time: number) => {
      frame = 0
      if (!canAnimate()) return

      if (time - lastFrameTime >= frameInterval) {
        const elapsed = (time - startTime) * 0.001
        if (direction === "pingpong") {
          const duration = 10
          const segment = elapsed % duration
          const forward = Math.floor(elapsed / duration) % 2 === 0
          const progress = segment / duration
          const smooth = progress * progress * (3 - 2 * progress)
          program.uniforms.uDirection.value = 1
          program.uniforms.iTime.value = forward ? smooth * duration : (1 - smooth) * duration
        } else {
          program.uniforms.iTime.value = elapsed
        }
        renderer.render({ scene: mesh })
        lastFrameTime = time
      }
      frame = requestAnimationFrame(loop)
    }

    const syncAnimation = () => {
      if (canAnimate() && frame === 0) frame = requestAnimationFrame(loop)
      if (!canAnimate() && frame !== 0) {
        cancelAnimationFrame(frame)
        frame = 0
      }
    }

    const resizeObserver = new ResizeObserver(setSize)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry?.isIntersecting ?? false
      syncAnimation()
    })

    resizeObserver.observe(container)
    intersectionObserver.observe(container)
    document.addEventListener("visibilitychange", syncAnimation)
    if (mouseInteractive) container.addEventListener("mousemove", handleMouseMove, { passive: true })
    setSize()
    syncAnimation()

    return () => {
      if (frame !== 0) cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener("visibilitychange", syncAnimation)
      if (mouseInteractive) container.removeEventListener("mousemove", handleMouseMove)
      if (canvas.parentNode === container) container.removeChild(canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [color, direction, mouseInteractive, opacity, scale, speed, useStaticEffect])

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${useStaticEffect ? "plasma-fallback" : ""}`}
    />
  )
}
