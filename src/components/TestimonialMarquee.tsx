import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import "./TestimonialMarquee.css";

export default function TestimonialMarquee({ items }: { items: Testimonial[] }) {
  // Render the list twice back-to-back so the track can loop seamlessly:
  // translating the whole track by -50% brings the duplicate set into the
  // exact position the original started in.
  const loop = [...items, ...items];

  return (
    <div className="testimonial-marquee">
      <div className="testimonial-track">
        {loop.map((t, i) => (
          <TestimonialCard t={t} key={`${t.name}-${i}`} className="testimonial-marquee-card" />
        ))}
      </div>
    </div>
  );
}
