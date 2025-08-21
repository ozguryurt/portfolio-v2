import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import sheetStore from "../stores/sheetStore"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router"

const Sheet = () => {

    const { isOpen, setIsOpen, title, body, url } = sheetStore()

    useEffect(() => {
        if (!isOpen) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false)
        }
        document.addEventListener("keydown", onKeyDown)

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = originalOverflow
        }
    }, [isOpen, setIsOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[60]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        className="absolute left-0 right-0 bottom-0"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 320, damping: 32 }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 120 || info.velocity.y > 800) {
                                setIsOpen(false)
                            }
                        }}
                    >
                        <div
                            className="mx-2 sm:mx-4 md:mx-6 lg:mx-10 w-auto dark:bg-zinc-900 bg-white rounded-t-2xl shadow-2xl border-t border-zinc-200 dark:border-zinc-800 md:h-[80vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative px-6 pt-4 pb-3 flex-none">
                                <div className="mx-auto h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <button
                                    aria-label="Kapat"
                                    onClick={() => setIsOpen(false)}
                                    className="absolute right-4 top-4 inline-flex items-center justify-center h-8 w-8 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/40 cursor-pointer"
                                >
                                    <IoClose size={20} className="dark:text-white text-zinc-800" />
                                </button>
                            </div>

                            <div className="px-6 pb-6 flex-1 overflow-y-auto">
                                <div className="flex justify-start items-center gap-3">
                                    <p className="text-lg font-semibold dark:text-white text-zinc-800">
                                        {title}
                                    </p>
                                    {
                                        url !== "" && (
                                            <Link to={url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">
                                                {url.replace("https://", "").replace("http://", "")}
                                            </Link>
                                        )
                                    }
                                </div>
                                {body}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Sheet