import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Navigation, ShieldCheck } from "lucide-react";
import { contactDetails } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-top">
            <span className="footer-logo-badge">
              <img src="/brand/logo-icon.webp" alt="Reyansha Library logo" width={30} height={28} />
            </span>
            <div>
              <p className="footer-name">Reyansha Library</p>
              <p className="footer-tag">Read. Learn. Grow.</p>
            </div>
          </div>
          <p className="footer-description">
            A disciplined, quiet, and fully equipped self-study reading hall for NEET, JEE, SSC,
            Banking, UPSC, CUET, and State exam aspirants.
          </p>
          <p className="footer-badge">
            <ShieldCheck size={14} /> Official Registered Study Hall &amp; Printing Facility
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Explore</p>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Visit</p>
          <ul className="footer-contact">
            <li><MapPin size={15} /><span>{contactDetails.address}</span></li>
            <li><Phone size={15} /><span>{contactDetails.phone} · {contactDetails.phoneSecondary}</span></li>
            <li><Mail size={15} /><span>{contactDetails.email}</span></li>
          </ul>
          <a
            href={contactDetails.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-directions"
          >
            <Navigation size={14} /> Get Directions
          </a>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Hours</p>
          <p className="footer-hours">{contactDetails.hours}</p>
          <Link to="/contact" className="btn btn-outline footer-cta">Get in touch</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Reyansha Library. All rights reserved.</p>
        <p>
          Designed &amp; Developed by{" "}
          <a href="https://www.orbitodigitalmedia.com/" target="_blank" rel="noopener noreferrer">
            Orbito Digital Media
          </a>
        </p>
      </div>
    </footer>
  );
}
