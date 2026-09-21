import TestimonialCard from "../components/TestimonialCard";
import Reveal from "../components/Reveal";
import { testimonials } from "../data/content";
import "./Testimonials.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Testimonials() {
  useDocumentTitle("Testimonials");
  return (
    <>
      <div className="shell page-intro fade-up-in">
        <span className="eyebrow">In their words</span>
        <h1>Student Testimonials</h1>
        <p>What members preparing for NEET, JEE, SSC, Banking, UPSC and other exams say about studying here.</p>
      </div>

      <section className="section">
        <div className="shell">
          <Reveal className="testimonials-grid stagger">
            {testimonials.map((t) => (
              <TestimonialCard t={t} key={t.name} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
