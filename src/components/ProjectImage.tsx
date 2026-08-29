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
          className={`aspect-video min-h-32 w-full rounded ${type === "cover" ? "object-cover" : "object-contain"} ${loading ? "invisible absolute" : "block"}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false)
            setFailed(true)
          }}
        />
      )}
      {loading && <div className="aspect-video min-h-32 w-full animate-pulse rounded bg-slate-700" />}
      {failed && (
        <div className="flex aspect-video min-h-32 w-full items-center justify-center rounded bg-zinc-300 text-sm text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
          Görsel yüklenemedi
        </div>
      )}
    </div>
  )
}
