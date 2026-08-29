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
      <div className="flex w-full items-center justify-start gap-2 rounded-2xl bg-zinc-200 p-2 px-5 dark:bg-zinc-800">
        <Icon aria-hidden="true" className="text-6xl text-zinc-800 dark:text-white" />
        <div className="flex flex-col items-start justify-center">
          <div className="text-lg font-bold text-zinc-800 dark:text-white">{baslik}</div>
          <div className="text-sm text-zinc-800 dark:text-white">{deger}</div>
        </div>
      </div>
    </a>
  )
}
