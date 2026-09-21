import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";
import { asset } from "../utils/asset";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-row">
        <div className="shell header-inner">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={asset("/brand/logo-icon.webp")} alt="" className="brand-mark" width={36} height={34} />
            <span className="brand-text">
              <strong>Reyansha</strong>
              <em>Library · 7 AM – 10 PM</em>
            </span>
          </NavLink>

          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`nav ${open ? "nav-open" : ""}`}>
            <ul>
              {nav.map((item) => (
                <li className="nav-item" key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/" || item.to.startsWith("/#")}
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            {open && (
              <NavLink to="/membership" className="btn btn-brass nav-cta-mobile" onClick={() => setOpen(false)}>
                Become a Member
              </NavLink>
            )}
          </nav>
        </div>

        <NavLink to="/membership" className="header-cta">
          Become a Member
        </NavLink>
      </div>
    </header>
  );
}
