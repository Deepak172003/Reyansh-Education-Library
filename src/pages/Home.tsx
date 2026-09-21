import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  RefreshCcw,
  MessageCircleQuestion,
  Armchair,
  ArrowRight,
  Star,
  Expand,
  Clock,
  MapPin,
  Navigation,
} from "lucide-react";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import Lightbox from "../components/Lightbox";
import TestimonialMarquee from "../components/TestimonialMarquee";
import { facilities, galleryImages, testimonials, stats, contactDetails } from "../data/content";
import "./Home.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

const quickActions = [
  { icon: Armchair, label: "Book a Cabin", copy: "Reserve a numbered study cabin before you arrive." },
  { icon: CalendarCheck, label: "Take a Tour", copy: "Visit the reading room and pick your shift in person." },
  { icon: RefreshCcw, label: "Renew Membership", copy: "Extend your plan at the desk or by phone." },
  { icon: MessageCircleQuestion, label: "Ask Us Anything", copy: "Message us on WhatsApp — we reply fast." },
];

const averageRating = (
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
).toFixed(1);

export default function Home() {
  useDocumentTitle("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="hero hero-photo">
        <div className="hero-overlay" />
        <div className="shell hero-content fade-up-in">
          <span className="hero-eyebrow">Reyansha Library</span>
          <h1>Read. Learn. Grow.</h1>
          <p>
            A quiet, disciplined reading room with numbered study cabins in Chas, Bokaro Steel
            City — built for competitive-exam aspirants and anyone who needs a focused place to work.
          </p>
          <div className="hero-actions">
            <Link to="/membership" className="btn btn-brass">Become a Member</Link>
            <a
              href={contactDetails.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              Get Directions
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>{stats.hours}</strong>
              <span>{stats.hoursLabel}</span>
            </div>
            <div className="hero-stat">
              <strong><CountUp end={stats.seats} />+</strong>
              <span>{stats.seatsLabel}</span>
            </div>
            <div className="hero-stat">
              <strong><CountUp end={stats.shifts} /></strong>
              <span>{stats.shiftsLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="quick-actions stagger">
            {quickActions.map((a) => (
              <div className="quick-action" key={a.label}>
                <span className="icon-badge">
                  <a.icon size={20} strokeWidth={1.75} />
                </span>
                <strong>{a.label}</strong>
                <p>{a.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="stats-band">
        <div className="shell stats-grid">
          <div className="stat-block">
            <strong><CountUp end={stats.members} />+</strong>
            <span>{stats.membersLabel}</span>
          </div>
          <div className="stat-block">
            <strong><CountUp end={stats.seats} />+</strong>
            <span>{stats.seatsLabel}</span>
          </div>
          <div className="stat-block">
            <strong><CountUp end={stats.daysOpen} /></strong>
            <span>{stats.daysOpenLabel}</span>
          </div>
          <div className="stat-block">
            <strong><CountUp end={stats.hoursDaily} /></strong>
            <span>{stats.hoursDailyLabel}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="section-kicker">What's included</span>
                <h2>Facilities</h2>
              </div>
              <Link to="/facilities" className="btn btn-outline">
                All facilities <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal className="category-grid-preview stagger">
            {facilities.slice(0, 6).map((f) => (
              <div className="card category-chip" key={f.name}>
                <span className="icon-badge">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <strong>{f.name}</strong>
                  <span>{f.description}</span>
                </div>
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
                <span className="section-kicker">A look inside</span>
                <h2>Inside the Library</h2>
              </div>
              <Link to="/gallery" className="btn btn-outline">
                Full gallery <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal className="home-gallery-strip stagger">
            {galleryImages.slice(0, 3).map((img, i) => (
              <button
                type="button"
                className="home-gallery-item"
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                aria-label={`View larger: ${img.caption}`}
              >
                <img src={img.src} alt={img.caption} loading="lazy" />
                <span className="home-gallery-expand"><Expand size={16} /></span>
                <span className="home-gallery-caption">{img.caption}</span>
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-head" style={{ justifyContent: "center", textAlign: "center" }}>
              <div>
                <span className="section-kicker">In their words</span>
                <h2>What Members Say</h2>
                <div className="rating-badge">
                  <Star size={16} className="star-filled" />
                  <strong>{averageRating}</strong> average from {testimonials.length}+ member reviews
                </div>
              </div>
            </div>
          </Reveal>
          <TestimonialMarquee items={testimonials} />
          <div className="testimonials-more">
            <Link to="/testimonials" className="btn btn-outline">
              Read all testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="hours">
        <div className="shell">
          <Reveal className="visit-band">
            <div className="visit-info">
              <span className="section-kicker">Hours &amp; location</span>
              <h2>Visit Us</h2>
              <div className="visit-hours">
                <Clock size={18} />
                <div>
                  <strong>{contactDetails.hours}</strong>
                  <span>Every day, no weekly off</span>
                </div>
              </div>
              <div className="visit-address">
                <MapPin size={18} />
                <span>{contactDetails.address}</span>
              </div>
              <a
                href={contactDetails.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
            <div className="visit-map">
              <iframe
                title="Reyansha Library location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contactDetails.mapsEmbedQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="cta-band">
            <div>
              <h2>Your study cabin is waiting.</h2>
              <p>Join today and take your seat the same afternoon — plans start at ₹500 a month.</p>
            </div>
            <Link to="/membership" className="btn btn-brass">See membership plans</Link>
          </Reveal>
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
