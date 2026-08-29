import type { IconType } from "react-icons"
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFlutter,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

type SkillIconDefinition = {
  Icon: IconType
  color?: string
}

const iconMap: Record<string, SkillIconDefinition> = {
  "skill-icons:html": { Icon: SiHtml5, color: "#e34f26" },
  "skill-icons:css": { Icon: SiCss3, color: "#1572b6" },
  "skill-icons:javascript": { Icon: SiJavascript, color: "#f7df1e" },
  "skill-icons:typescript": { Icon: SiTypescript, color: "#3178c6" },
  "devicon:flutter": { Icon: SiFlutter, color: "#02569b" },
  "skill-icons:bootstrap": { Icon: SiBootstrap, color: "#7952b3" },
  "skill-icons:tailwindcss-dark": { Icon: SiTailwindcss, color: "#06b6d4" },
  "devicon:react": { Icon: SiReact, color: "#61dafb" },
  "devicon:nextjs": { Icon: SiNextdotjs },
  "skill-icons:php-dark": { Icon: SiPhp, color: "#777bb4" },
  "skill-icons:nodejs-dark": { Icon: SiNodedotjs, color: "#339933" },
  "skill-icons:expressjs-dark": { Icon: SiExpress },
  "skill-icons:mysql-dark": { Icon: SiMysql, color: "#4479a1" },
  "skill-icons:postgresql-dark": { Icon: SiPostgresql, color: "#4169e1" },
  "skill-icons:graphql-dark": { Icon: SiGraphql, color: "#e10098" },
  "skill-icons:python-dark": { Icon: SiPython, color: "#3776ab" },
}

export default function SkillIcon({ name, label }: { name: string; label: string }) {
  const definition = iconMap[name]

  if (!definition) {
    return <span aria-label={label} className="font-bold text-[#512bd4]">{label.slice(0, 2)}</span>
  }

  const { Icon, color } = definition
  return (
    <Icon
      aria-label={label}
      title={label}
      style={color ? { color } : undefined}
      className={color ? undefined : "text-zinc-900 dark:text-white"}
    />
  )
}
