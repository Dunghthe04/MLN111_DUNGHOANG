import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ExhibitImage from "./ExhibitImage";

export interface GalleryItem {
  src: string;
  alt?: string;
  caption?: string;
}

interface HallGalleryProps {
  items: GalleryItem[];
  title?: string;
  className?: string;
}

export default function HallGallery({
  items,
  title = "Bộ sưu tập ảnh",
  className = "",
}: HallGalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (!items.length) return null;

  const selected = lightboxIdx !== null ? items[lightboxIdx] : null;

  return (
    <>
      <div className={className}>
        <div className="flex items-center gap-2 mb-4">
          <ZoomIn className="w-4 h-4 text-red-600" />
          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest">
            {title}
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, idx) => (
            <GalleryThumb
              key={idx}
              item={item}
              idx={idx}
              onClick={() => setLightboxIdx(idx)}
            />
          ))}
        </div>
      </div>

      {selected && lightboxIdx !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.alt ?? ""}
              className="max-h-[75vh] w-full object-contain rounded-xl mx-auto"
            />
            {selected.caption && (
              <p className="text-center text-white/80 text-sm mt-3 px-4">
                {selected.caption}
              </p>
            )}

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + items.length) % items.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                  aria-label="Ảnh trước"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx((lightboxIdx + 1) % items.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                  aria-label="Ảnh tiếp"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function GalleryThumb({
  item,
  idx,
  onClick,
}: {
  item: GalleryItem;
  idx: number;
  onClick: () => void;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-red-200/60 bg-gradient-to-br from-[#FDF6E3] to-red-50/50 flex flex-col items-center justify-center p-3">
        <span className="text-[10px] text-stone-400 text-center leading-snug">
          {item.alt ?? `Ảnh ${idx + 1}`}
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl border border-red-800/15 bg-stone-100/90 shadow-md hover:shadow-xl hover:border-red-500/40 transition-all duration-300 aspect-[4/3] flex items-center justify-center"
    >
      <img
        src={item.src}
        alt={item.alt ?? `Ảnh ${idx + 1}`}
        loading="lazy"
        decoding="async"
        className="max-w-full max-h-full object-contain"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <span className="text-white text-[10px] font-semibold line-clamp-2">
          {item.caption ?? item.alt}
        </span>
      </div>
    </button>
  );
}
