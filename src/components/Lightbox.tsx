import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Lightbox.css";

type Item = { src: string; caption: string };

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: Item[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const item = items[index];
  const goNext = () => onNavigate((index + 1) % items.length);
  const goPrev = () => onNavigate((index - 1 + items.length) % items.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!item) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.caption}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous photo"
      >
        <ChevronLeft size={26} />
      </button>

      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption} />
        <figcaption>
          {item.caption} <span>· {index + 1} / {items.length}</span>
        </figcaption>
      </figure>

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next photo"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
}
