import { MdMail } from "react-icons/md"
import { SiGithub, SiLinkedin } from "react-icons/si"

const iconMap = {
  "mdi:github": SiGithub,
  "mdi:linkedin": SiLinkedin,
  "mdi:mail": MdMail,
}

type ContactIcon = keyof typeof iconMap

export default function ContactCard({
  url,
  baslik,
  deger,
  icon,
}: {
  url: string
  baslik: string
  deger: string
  icon: string
}) {
  const Icon = iconMap[icon as ContactIcon] ?? MdMail

  return (
    <a href={url} target={url.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
      <div className="flex min-h-20 w-full items-center justify-start gap-3 rounded-2xl bg-zinc-200 px-4 py-3 shadow-sm transition-transform active:scale-[0.99] sm:px-5 dark:bg-zinc-800">
        <Icon aria-hidden="true" className="shrink-0 text-4xl text-zinc-800 sm:text-5xl lg:text-6xl dark:text-white" />
        <div className="min-w-0 flex flex-col items-start justify-center">
          <div className="text-base font-bold text-zinc-800 sm:text-lg dark:text-white">{baslik}</div>
          <div className="max-w-full truncate text-sm text-zinc-700 dark:text-zinc-200">{deger}</div>
        </div>
      </div>
    </a>
  )
}
