import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface QuestionImageProps {
  src: string;
  alt?: string;
  caption?: string;
  size?: "sm" | "md" | "lg";
}

export default function QuestionImage({
  src,
  alt = "Minh họa câu hỏi",
  caption,
  size = "md",
}: QuestionImageProps) {
  const [failed, setFailed] = useState(false);
  const maxHeightPx = size === "sm" ? 140 : size === "lg" ? 260 : 200;

  if (failed) {
    return (
      <figure className="mb-6 flex flex-col items-center">
        <div
          className="rounded-xl border-2 border-dashed border-red-200 bg-stone-50 flex items-center justify-center p-6 w-full max-w-md"
          style={{ minHeight: 100 }}
        >
          <ImageIcon className="w-8 h-8 text-red-300" />
        </div>
      </figure>
    );
  }

  return (
    <figure className="mb-6 flex flex-col items-center w-full">
      <div className="inline-flex max-w-full rounded-xl border border-stone-200 bg-stone-50 p-2 shadow-sm">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="block w-auto max-w-full object-contain rounded-lg"
          style={{ maxHeight: maxHeightPx }}
          onError={() => setFailed(true)}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-stone-400 italic text-center max-w-md px-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
