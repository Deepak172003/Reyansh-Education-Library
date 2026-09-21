import { Compass, Eye, UsersRound, ShieldCheck, Clock, Gift } from "lucide-react";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { aboutDescription, facilities } from "../data/content";
import "./About.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

const highlights = [
  { icon: UsersRound, title: "1,400+ members", copy: "Students and long-hour aspirants hold an active seat today." },
  { icon: Clock, title: "Open 7 days a week", copy: "7:00 AM to 10:00 PM, every day, with three shift options." },
  { icon: ShieldCheck, title: "CCTV monitored", copy: "The reading rooms are watched for everyone's safety and peace of mind." },
  { icon: Gift, title: "Referral rewards", copy: "Bring a friend and both of you get a discount on your next renewal." },
];

const whyPoints = [
  { title: "Built for quiet, focused study.", copy: "Separate study cabins are arranged for long sessions, not quick browsing." },
  { title: "Open every single day.", copy: "Come at 7 AM or at 9 PM — a member's cabin is always available within hours." },
  { title: "Local and responsive.", copy: "Raise a request at the desk — most are sorted the same week." },
];

export default function About() {
  useDocumentTitle("About Us");
  return (
    <>
      <div className="shell about-hero">
        <div className="fade-up-in">
          <span className="page-intro eyebrow" style={{ padding: 0, border: 0 }}>Since 2014</span>
          <h1>About Our Library</h1>
          <p>{aboutDescription.intro}</p>
        </div>
        <div className="fade-up-in about-hero-img-wrap" style={{ animationDelay: "150ms" }}>
          <img src="/gallery/exterior-signboard.webp" alt="Reyansha Library entrance signboard" className="about-hero-img" />
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <Reveal className="about-lead">
            <p>{aboutDescription.lead}</p>
            <div className="about-chip-row">
              {facilities.slice(0, 6).map((f) => (
                <span className="about-chip" key={f.name}>
                  <Icon name={f.icon} size={16} /> {f.name}
                </span>
              ))}
            </div>
            <p>{aboutDescription.closing}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="mv-grid stagger">
            <div className="card mv-card">
              <span className="icon-badge"><Compass size={20} strokeWidth={1.75} /></span>
              <h3>Mission</h3>
              <p>
                To keep a quiet, disciplined cabin open to anyone who wants to study, and to
                keep the reading rooms matched to what students here are actually preparing for.
              </p>
            </div>
            <div className="card mv-card">
              <span className="icon-badge"><Eye size={20} strokeWidth={1.75} /></span>
              <h3>Vision</h3>
              <p>
                To be the first place a student in Bokaro Steel City thinks of when they need a
                reliable seat, consistent hours, and a library that runs like clockwork.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="section-kicker">In numbers</span>
                <h2>Our Highlights</h2>
              </div>
            </div>
          </Reveal>
          <Reveal className="highlights-grid stagger">
            {highlights.map((h) => (
              <div className="highlight-row" key={h.title}>
                <span className="icon-badge"><h.icon size={17} strokeWidth={1.75} /></span>
                <div>
                  <strong>{h.title}</strong>
                  <p>{h.copy}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="why-band">
            <img src="/gallery/reception-desk.webp" alt="Reception desk at Reyansha Library" className="why-band-img" />
            <div>
              <span className="section-kicker">Why Choose Us?</span>
              <h2>Three things members mention most</h2>
              <ul className="why-list">
                {whyPoints.map((w) => (
                  <li key={w.title}>
                    <span>
                      <strong>{w.title}</strong> {w.copy}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
