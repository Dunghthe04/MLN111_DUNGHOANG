import { useState, useRef, useCallback } from "react";
import { ImageIcon } from "lucide-react";

interface ExhibitImageProps {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  placeholderLabel?: string;
  aspectRatio?: "video" | "square" | "wide" | "auto";
  /** auto = contain nếu ảnh nhỏ, cover nếu đủ lớn */
  fit?: "auto" | "cover" | "contain";
}

export default function ExhibitImage({
  src,
  alt = "Minh họa triển lãm",
  caption,
  className = "",
  placeholderLabel,
  aspectRatio = "video",
  fit = "auto",
}: ExhibitImageProps) {
  const [failed, setFailed] = useState(false);
  const [fitMode, setFitMode] = useState<"cover" | "contain">(
    fit === "cover" ? "cover" : "contain"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectClass =
    aspectRatio === "auto"
      ? ""
      : aspectRatio === "square"
        ? "aspect-square"
        : aspectRatio === "wide"
          ? "aspect-[16/9]"
          : "aspect-[4/3]";

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (fit !== "auto") {
        setFitMode(fit);
        return;
      }
      const img = e.currentTarget;
      const box = containerRef.current;
      if (!box) return;

      const cw = box.clientWidth;
      const ch = box.clientHeight;
      if (cw === 0 || ch === 0) return;

      const canCover =
        img.naturalWidth >= cw * 0.98 && img.naturalHeight >= ch * 0.98;
      setFitMode(canCover ? "cover" : "contain");
    },
    [fit]
  );

  if (failed) {
    return (
      <figure className={className}>
        <div
          className={`${aspectClass || "min-h-[120px]"} w-full rounded-xl border-2 border-dashed border-red-300/50 bg-gradient-to-br from-[#FDF6E3] to-red-50 flex flex-col items-center justify-center gap-2 p-4`}
        >
          <ImageIcon className="w-8 h-8 text-red-400/60" />
          <span className="text-[11px] text-stone-400 text-center leading-snug max-w-[180px]">
            {placeholderLabel ?? alt}
          </span>
        </div>
        {caption && (
          <figcaption className="mt-2 text-xs text-stone-400 italic text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div
        ref={containerRef}
        className={`${aspectClass} w-full overflow-hidden rounded-xl border border-red-800/10 shadow-sm bg-stone-100/90 flex items-center justify-center`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={
            fitMode === "cover"
              ? "w-full h-full object-cover"
              : "max-w-full max-h-full w-auto h-auto object-contain"
          }
          onLoad={handleLoad}
          onError={() => setFailed(true)}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-stone-400 italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
