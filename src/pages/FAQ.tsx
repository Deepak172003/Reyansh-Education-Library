import AccordionItem from "../components/AccordionItem";
import Reveal from "../components/Reveal";
import { faqs } from "../data/content";
import "./FAQ.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function FAQ() {
  useDocumentTitle("FAQ");
  return (
    <>
      <div className="shell page-intro fade-up-in">
        <span className="eyebrow">Questions, answered</span>
        <h1>Frequently Asked Questions</h1>
        <p>Everything members usually ask before joining — timings, fees, documents and rules.</p>
      </div>

      <section className="section">
        <div className="shell faq-wrap">
          <Reveal className="faq-list stagger">
            {faqs.map((f, i) => (
              <AccordionItem key={f.question} question={f.question} answer={f.answer} defaultOpen={i === 0} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
