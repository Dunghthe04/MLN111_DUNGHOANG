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
  const heightClass =
    size === "sm" ? "max-h-36" : size === "lg" ? "max-h-72" : "max-h-52";

  return (
    <figure className="mb-6 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-50">
      <img
        src={src}
        alt={alt}
        className={`w-full ${heightClass} object-cover`}
        onError={(e) => {
          (e.target as HTMLImageElement).parentElement!.style.display = "none";
        }}
      />
      {caption && (
        <figcaption className="px-4 py-2 text-xs text-stone-500 italic bg-white border-t border-stone-100">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
