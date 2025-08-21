import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router"

const ContactCard = ({url, baslik, deger, icon}: {url: string, baslik: string, deger: string, icon: string}) => {
    return (
        <>
            <Link to={url} target="_blank">
                <div className="flex justify-start items-center dark:bg-zinc-800 bg-zinc-200 rounded-2xl p-2 px-5 gap-2 w-full">
                    <div className='text-6xl text-zinc-800 dark:text-white'>
                        <Icon icon={icon} />
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='text-lg text-zinc-800 dark:text-white font-bold'>
                            {baslik}
                        </div>
                        <div className='text-sm text-zinc-800 dark:text-white'>
                            {deger}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ContactCard