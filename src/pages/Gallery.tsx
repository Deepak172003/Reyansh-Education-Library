import { useState } from "react";
import { Expand } from "lucide-react";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import { galleryImages } from "../data/content";
import "./Gallery.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Gallery() {
  useDocumentTitle("Photo Gallery");
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <>
      <div className="shell page-intro fade-up-in">
        <span className="eyebrow">A look inside</span>
        <h1>Our Gallery</h1>
        <p>Real photos from Reyansha Library — the reading rooms, the reception, and the study spaces before you visit. Tap any photo to view it larger.</p>
      </div>

      <section className="section">
        <div className="shell">
          <Reveal className="gallery-grid stagger">
            {images.map((img, i) => (
              <button
                type="button"
                className="gallery-item"
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                aria-label={`View larger: ${img.caption}`}
              >
                <img src={img.src} alt={img.caption} loading="lazy" />
                <span className="gallery-item-expand"><Expand size={16} /></span>
                <span className="gallery-item-caption">{img.caption}</span>
              </button>
            ))}
          </Reveal>
          {!showAll && (
            <div className="gallery-more">
              <button className="btn btn-outline" onClick={() => setShowAll(true)}>
                View Full Gallery →
              </button>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(next) => setLightboxIndex(next)}
        />
      )}
    </>
  );
}
