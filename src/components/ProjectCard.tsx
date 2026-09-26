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
        <div className="grid h-full grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
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
      className="flex w-full cursor-pointer flex-col items-center gap-1.5 rounded-2xl bg-zinc-200 p-2 shadow-sm transition-transform active:scale-[0.98] sm:gap-2 sm:p-3 dark:bg-zinc-800"
    >
      <div className="w-full shrink-0">
        <ProjectImage src={resimler[0]} alt={`${ad} proje kapağı`} priority={priority} size="thumbnail" />
      </div>
      <span className="w-full shrink-0 px-1 text-center text-xs font-bold leading-4 text-zinc-800 sm:min-h-0 sm:text-sm dark:text-white">{ad}</span>
    </button>
  )
}
