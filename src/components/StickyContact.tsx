import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { contactDetails } from "../data/content";
import { buildWhatsAppLink } from "../utils/whatsapp";
import "./StickyContact.css";

export default function StickyContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="sticky-contact">
      <button
        type="button"
        className={`sticky-btn sticky-top ${showTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={20} strokeWidth={2.2} />
      </button>
      <a
        href={buildWhatsAppLink("Hi, I'd like to know more about Reyansha Library.")}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn sticky-whatsapp"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} strokeWidth={2} />
      </a>
      <a
        href={`tel:+${contactDetails.phoneDigits}`}
        className="sticky-btn sticky-call"
        aria-label="Call the library"
        title="Call us"
      >
        <Phone size={21} strokeWidth={2} />
      </a>
    </div>
  );
}
