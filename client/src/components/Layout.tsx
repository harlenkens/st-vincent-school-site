import { useEffect, useId, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation } from "wouter";
import { contactInquiryHref } from "@/lib/inquiry";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: "Home", href: "/", hint: "Start here" },
  { label: "Our school", href: "/about", hint: "Story & 4H" },
  { label: "Curriculum", href: "/curriculum", hint: "MATATAG & SHS" },
  { label: "Parent guide", href: "/parent-guide", hint: "Family roadmap" },
  { label: "Campus", href: "/campus", hint: "Spaces & tour" },
  { label: "Contact", href: "/contact", hint: "Visit & inquire" },
];

const DESKTOP_NAV_MIN = 900;

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [location] = useLocation();
  const menuId = useId();

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    closeMenu();
  }, [location]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_NAV_MIN) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const desktopLinks = navLinks.filter(
    (link) => link.href !== "/" && link.href !== "/contact",
  );

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span>A.Y. 2026–2027 · Students' Orientation</span>
          <span className="announcement-aside">
            <Sparkles size={13} /> A place to grow fully
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-bar">
          <Link href="/" className="brand-lockup" aria-label="Go to homepage">
            <span className="brand-seal">VSOP</span>
            <span className="brand-name">
              <strong>Village School</strong>
              <small>of Parkwoods</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {desktopLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${location === href ? " active" : ""}`}
              >
                {label}
              </Link>
            ))}
            <Link
              href={contactInquiryHref({ topic: "visit" })}
              className="nav-cta"
            >
              Plan a visit <ArrowUpRight size={16} />
            </Link>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-overlay"
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              type="button"
              className="nav-overlay-backdrop"
              aria-label="Close menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="nav-overlay-panel"
              initial={{ x: "105%" }}
              animate={{ x: 0 }}
              exit={{ x: "105%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="nav-overlay-glow" aria-hidden="true" />

              <div className="nav-overlay-top">
                <Link
                  href="/"
                  className="brand-lockup"
                  aria-label="Go to homepage"
                  onClick={closeMenu}
                >
                  <span className="brand-seal">VSOP</span>
                  <span className="brand-name">
                    <strong>Village School</strong>
                    <small>of Parkwoods</small>
                  </span>
                </Link>
                <button
                  type="button"
                  className="menu-toggle menu-toggle--close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <p className="nav-overlay-kicker">Explore VSOP</p>

              <nav className="nav-overlay-links" aria-label="Mobile navigation">
                {navLinks.map(({ label, href, hint }, index) => {
                  const active = location === href;
                  const isHot = hovered === href || active;
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 36 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 + index * 0.045,
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                      onMouseEnter={() => setHovered(href)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(href)}
                      onBlur={() => setHovered(null)}
                    >
                      <Link
                        href={href}
                        className={`nav-overlay-link${active ? " active" : ""}${isHot ? " hot" : ""}`}
                        onClick={closeMenu}
                      >
                        <span className="nav-overlay-index">0{index + 1}</span>
                        <span className="nav-overlay-copy">
                          <span className="nav-overlay-label">{label}</span>
                          <span className="nav-overlay-hint">{hint}</span>
                        </span>
                        <motion.span
                          className="nav-overlay-arrow"
                          animate={{ x: isHot ? 4 : 0, opacity: isHot ? 1 : 0.45 }}
                          transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        >
                          <ArrowUpRight size={18} />
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="nav-overlay-footer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
              >
                <div>
                  <p className="nav-overlay-footer-title">Visit the campus</p>
                  <p className="nav-overlay-footer-text">
                    Mon–Fri · 7:00 AM – 5:00 PM · Parkwood Hills
                  </p>
                </div>
                <Link
                  href={contactInquiryHref({ topic: "visit" })}
                  className="nav-cta nav-overlay-cta"
                  onClick={closeMenu}
                >
                  Plan a visit <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer-section">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="brand-seal footer-seal">VSOP</span>
            <div>
              <strong>Village School of Parkwoods</strong>
              <span>Quality education. Whole-person growth.</span>
            </div>
          </div>
          <div className="footer-note">
            © 2026 VSOP · Designed for families, faculty, and the next
            generation.
          </div>
        </div>
      </footer>
    </div>
  );
}
