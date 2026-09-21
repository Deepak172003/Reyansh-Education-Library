import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { facilities } from "../data/content";
import "./Facilities.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Facilities() {
  useDocumentTitle("Facilities");
  return (
    <>
      <div className="shell page-intro fade-up-in">
        <span className="eyebrow">On site</span>
        <h1>Our Facilities</h1>
        <p>Everything the reading room offers, from seating to connectivity, at no extra cost to members.</p>
      </div>

      <section className="section">
        <Reveal className="shell facilities-grid stagger">
          {facilities.map((f) => (
            <div className="card facility-card" key={f.name}>
              <span className="icon-badge"><Icon name={f.icon} size={20} /></span>
              <strong>{f.name}</strong>
              <p>{f.description}</p>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
