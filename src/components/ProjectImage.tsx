import { useState } from "react"

export default function ProjectImage({
  src,
  alt,
  type = "cover",
  priority = false,
}: {
  src: string
  alt: string
  type?: "cover" | "contain"
  priority?: boolean
}) {
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {!failed && (
        <img
          src={src}
          alt={alt}
          width={640}
          height={360}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={`aspect-video w-full rounded-lg ${type === "cover" ? "object-cover" : "object-contain"} ${loading ? "invisible absolute" : "block"}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false)
            setFailed(true)
          }}
        />
      )}
      {loading && <div className="aspect-video w-full animate-pulse rounded-lg bg-slate-700" />}
      {failed && (
        <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-zinc-300 px-2 text-center text-xs text-zinc-600 sm:text-sm dark:bg-zinc-700 dark:text-zinc-300">
          Görsel yüklenemedi
        </div>
      )}
    </div>
  )
}
