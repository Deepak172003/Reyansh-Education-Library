import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation } from "lucide-react";
import Reveal from "../components/Reveal";
import { contactDetails } from "../data/content";
import { openWhatsApp, buildWhatsAppLink } from "../utils/whatsapp";
import "./Contact.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contact Us");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const whatsappMessage = [
      "New message from the Reyansha Library website:",
      `Name: ${name}`,
      `Email: ${email}`,
      `Message: ${message}`,
    ].join("\n");

    openWhatsApp(whatsappMessage);
    setSubmitted(true);
    e.currentTarget.reset();
  }

  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactDetails.mapsEmbedQuery
  )}&output=embed`;

  return (
    <>
      <div className="shell page-intro fade-up-in">
        <span className="eyebrow">We'd like to hear from you</span>
        <h1>Get In Touch</h1>
        <p>Questions about membership, seat availability, or opening hours — reach us any of these ways.</p>
        <div className="quick-contact-buttons">
          <a href={`tel:+${contactDetails.phoneDigits}`} className="btn btn-primary quick-contact-btn">
            <Phone size={18} /> Call Now
          </a>
          <a
            href={buildWhatsAppLink("Hi, I'd like to know more about Reyansha Library.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn quick-contact-btn quick-contact-whatsapp"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>

      <section className="section">
        <div className="shell contact-grid">
          <Reveal>
            <div className="contact-info">
              <div className="contact-row">
                <span className="icon-badge"><MapPin size={18} strokeWidth={1.75} /></span>
                <div>
                  <strong>Address</strong>
                  <span>{contactDetails.address}</span>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon-badge"><Phone size={18} strokeWidth={1.75} /></span>
                <div>
                  <strong>Phone</strong>
                  <span>{contactDetails.phone} · {contactDetails.phoneSecondary}</span>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon-badge"><Mail size={18} strokeWidth={1.75} /></span>
                <div>
                  <strong>Email</strong>
                  <span>{contactDetails.email}</span>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon-badge"><MessageCircle size={18} strokeWidth={1.75} /></span>
                <div>
                  <strong>WhatsApp</strong>
                  <span>{contactDetails.whatsapp}</span>
                </div>
              </div>
            </div>

            <div className="map-panel">
              <iframe
                title="Reyansha Library location"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={contactDetails.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary map-directions-btn"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>

            <div className="card hours-card" style={{ marginTop: 20 }}>
              <span className="icon-badge"><Clock size={18} strokeWidth={1.75} /></span>
              <div>
                <strong style={{ display: "block", color: "var(--green-900)" }}>Opening Hours</strong>
                <span style={{ color: "var(--ink-soft)", fontSize: "0.9rem" }}>{contactDetails.hours}</span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form className="card contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <p className="form-success">
                  We've opened WhatsApp with your message filled in — hit send there to reach us.
                </p>
              )}
              <p className="form-hint">
                <MessageCircle size={15} /> Sent straight to our WhatsApp — no account or sign-up needed.
              </p>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                <MessageCircle size={17} /> Send via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
