import { Star, Quote } from "lucide-react";
import "./TestimonialCard.css";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export default function TestimonialCard({ t, className = "" }: { t: Testimonial; className?: string }) {
  return (
    <div className={`card testimonial-card ${className}`}>
      <Quote size={26} className="testimonial-quote-mark" />
      <div className="testimonial-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} strokeWidth={1.5} className={i < t.rating ? "star-filled" : "star-empty"} />
        ))}
      </div>
      <p className="testimonial-quote">{t.quote}</p>
      <div className="testimonial-author">
        <span className="testimonial-avatar">{t.name.charAt(0)}</span>
        <div>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  );
}
