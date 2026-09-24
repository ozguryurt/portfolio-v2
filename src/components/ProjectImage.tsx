import { useState } from "react"

export default function ProjectImage({
  src,
  alt,
  type = "cover",
  priority = false,
  size = "full",
}: {
  src: string
  alt: string
  type?: "cover" | "contain"
  priority?: boolean
  size?: "thumbnail" | "full"
}) {
  const optimizedSrc = src.replace(
    /\.(png|jpe?g)(?=([?#]|$))/i,
    size === "thumbnail" ? ".thumb.webp" : ".webp",
  )
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const imageSrc = failedSrc === optimizedSrc ? src : optimizedSrc
  const failed = failedSrc === imageSrc
  const loading = !failed && loadedSrc !== imageSrc

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {!failed && (
        <img
          src={imageSrc}
          alt={alt}
          width={size === "thumbnail" ? 640 : 1600}
          height={size === "thumbnail" ? 360 : 900}
          sizes={size === "thumbnail" ? "(max-width: 640px) 45vw, 320px" : "(max-width: 768px) 90vw, 720px"}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={`aspect-video w-full rounded-lg ${type === "cover" ? "object-cover" : "object-contain"} ${loading ? "invisible absolute" : "block"}`}
          onLoad={() => setLoadedSrc(imageSrc)}
          onError={() => {
            if (imageSrc !== src) {
              setFailedSrc(optimizedSrc)
            } else {
              setFailedSrc(imageSrc)
            }
          }}
        />
      )}
      {loading && <div className="aspect-video w-full animate-pulse rounded-lg bg-slate-700" />}
      {failed && (
        <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-zinc-300 px-2 text-center text-xs text-zinc-600 sm:text-sm dark:bg-zinc-700 dark:text-zinc-300">
          Görsel yüklenemedi
        </div>
      )}
    </div>
  )
}
