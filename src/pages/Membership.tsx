import { Check, Clock } from "lucide-react";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { membershipBenefits, membershipPlans, howToJoin } from "../data/content";
import { openWhatsApp } from "../utils/whatsapp";
import "./Membership.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Membership() {
  useDocumentTitle("Membership Plans");
  return (
    <>
      <div className="shell membership-hero">
        <div className="fade-up-in">
          <span className="section-kicker">Join the library</span>
          <h1>Become a Member</h1>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: "1.02rem" }}>
            Pick a shift that fits your routine and get a reserved study cabin. Message us on
            WhatsApp or sign up at the desk — open every day, 7:00 AM to 10:00 PM.
          </p>
          <div className="benefit-list">
            {membershipBenefits.map((b) => (
              <div className="benefit-item" key={b.label}>
                <span className="icon-badge"><Icon name={b.icon} size={16} /></span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="fade-up-in" style={{ animationDelay: "150ms" }}>
          <img src="/gallery/entrance-door.webp" alt="Entrance to Reyansha Library" className="membership-hero-img" />
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="section-kicker">Pricing</span>
                <h2>Choose Your Shift</h2>
              </div>
            </div>
          </Reveal>
          <Reveal className="plans-grid stagger">
            {membershipPlans.map((p) => (
              <div className={`card plan-card ${p.popular ? "featured" : ""}`} key={p.name}>
                {p.popular && <span className="plan-badge">Most popular</span>}
                <span className="plan-name">{p.name}</span>
                <span className="plan-time">
                  <Clock size={14} /> {p.time} <span className="plan-hours">· {p.hours}</span>
                </span>
                <div className="plan-price">
                  {p.price} <span>{p.period}</span>
                </div>
                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={15} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn btn-primary plan-cta"
                  onClick={() =>
                    openWhatsApp(
                      `Hi, I'd like to join Reyansha Library on the ${p.name} plan (${p.time}, ${p.price} ${p.period}). Please share the next steps.`
                    )
                  }
                >
                  Select Plan &amp; Book
                </button>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="section-kicker">Getting started</span>
                <h2>How to Join</h2>
              </div>
            </div>
          </Reveal>
          <Reveal className="join-steps stagger">
            {howToJoin.map((s) => (
              <div className="join-step" key={s.step}>
                <span className="join-step-number">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
