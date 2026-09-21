import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import "./Accordion.css";

export default function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`accordion-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{question}</span>
        <ChevronDown size={18} className="accordion-chevron" />
      </button>
      <div
        className="accordion-panel"
        style={{ maxHeight: open ? panelRef.current?.scrollHeight ?? 400 : 0 }}
      >
        <div className="accordion-panel-inner" ref={panelRef}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
