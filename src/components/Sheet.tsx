import { useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import sheetStore from "../stores/sheetStore"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router"

const Sheet = () => {

    const isOpen = sheetStore((state) => state.isOpen)
    const setIsOpen = sheetStore((state) => state.setIsOpen)
    const title = sheetStore((state) => state.title)
    const body = sheetStore((state) => state.body)
    const url = sheetStore((state) => state.url)

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
                        className="absolute inset-0 bg-black/50 sm:bg-black/40 sm:backdrop-blur-sm"
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
                            className="mx-0 flex h-[92svh] w-auto flex-col rounded-t-3xl border-t border-zinc-200 bg-white shadow-2xl sm:mx-4 sm:h-[80vh] sm:rounded-t-2xl md:mx-6 lg:mx-10 dark:border-zinc-800 dark:bg-zinc-900"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-none px-4 pb-3 pt-3 sm:px-6 sm:pt-4">
                                <div className="mx-auto h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <button
                                    aria-label="Kapat"
                                    onClick={() => setIsOpen(false)}
                                    className="absolute right-3 top-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500/40 sm:right-4 sm:top-4 sm:h-8 sm:w-8 dark:hover:bg-zinc-800"
                                >
                                    <IoClose size={20} className="dark:text-white text-zinc-800" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6">
                                <div className="mb-3 flex min-w-0 flex-col items-start justify-center gap-1 pr-10 sm:flex-row sm:justify-start sm:gap-3 sm:pr-0">
                                    <p className="text-base font-semibold text-zinc-800 sm:text-lg dark:text-white">
                                        {title}
                                    </p>
                                    {
                                        url !== "" && (
                                            <Link to={url} target="_blank" rel="noopener noreferrer" className="max-w-full truncate text-xs text-blue-500 sm:text-sm">
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
