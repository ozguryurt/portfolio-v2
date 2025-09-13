import sheetStore from "../stores/sheetStore"
import ProjectImage from "./ProjectImage"

const ProjectCard = ({ ad, resimler, url }: { ad: string, resimler: string[], url: string }) => {

    const { showSheet } = sheetStore()

    const handleProjectClick = () => {
        showSheet({
            url: url,
            title: ad,
            body: (
                <>
                    <div className="grid h-full lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                        {
                            resimler.map((resim, index) => (
                                <ProjectImage key={index} src={resim} type="contain"></ProjectImage>
                            ))
                        }
                    </div>
                </>
            )
        })
    }
    return (
        <>
            <div onClick={handleProjectClick} className="dark:bg-zinc-800 bg-zinc-200 w-full h-full p-2 rounded flex flex-col justify-center items-center gap-2 cursor-pointer">
                <ProjectImage src={resimler[0]} type="cover"></ProjectImage>
                <span className="dark:text-white text-zinc-800 text-sm font-bold">
                    {ad}
                </span>
            </div>
        </>
    )
}

export default ProjectCard