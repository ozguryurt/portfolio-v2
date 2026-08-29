import sheetStore from "../stores/sheetStore"
import ProjectImage from "./ProjectImage"

export default function ProjectCard({
  ad,
  resimler,
  url,
  priority = false,
}: {
  ad: string
  resimler: string[]
  url: string
  priority?: boolean
}) {
  const showSheet = sheetStore((state) => state.showSheet)

  const handleProjectClick = () => {
    showSheet({
      url,
      title: ad,
      body: (
        <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2">
          {resimler.map((resim, index) => (
            <ProjectImage key={resim} src={resim} alt={`${ad} ekran görüntüsü ${index + 1}`} type="contain" />
          ))}
        </div>
      ),
    })
  }

  return (
    <button
      type="button"
      onClick={handleProjectClick}
      className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded bg-zinc-200 p-2 dark:bg-zinc-800"
    >
      <ProjectImage src={resimler[0]} alt={`${ad} proje kapağı`} priority={priority} />
      <span className="text-sm font-bold text-zinc-800 dark:text-white">{ad}</span>
    </button>
  )
}
