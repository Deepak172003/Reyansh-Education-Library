import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyContact from "./StickyContact";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // Let the route render first, then scroll — the target section
        // may not exist in the DOM yet on the very first paint.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="site">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}
