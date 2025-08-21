import { useState } from 'react'

const ProjectImage = ({ src }: { src: string }) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className='flex justify-center items-center w-full h-full'>
            <img src={src} className={`w-full min-h-[8rem] rounded object-cover aspect-video ${loading ? "hidden" : "block"}`} onLoad={() => { setLoading(false) }}></img>
            <div className={`w-full min-h-[8rem] bg-slate-700 animate-loading rounded aspect-video ${loading ? "block" : "hidden"}`}></div>
        </div>
    )
}

export default ProjectImage