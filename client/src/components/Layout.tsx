import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: "Our school", href: "/about" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Parent guide", href: "/parent-guide" },
  { label: "Campus", href: "/campus" },
];

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Automatically scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container flex items-center justify-between gap-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <span>A.Y. 2026–2027 · Students' Orientation</span>
          <span className="hidden items-center gap-2 sm:flex">
            <Sparkles size={13} /> A place to grow fully
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="container flex items-center justify-between py-5">
          <Link href="/" className="brand-lockup" aria-label="Go to homepage">
            <span className="brand-seal">VSOP</span>
            <span className="brand-name">
              <strong>Village School Of Parkwoods</strong>
              <small>of Parkwoods</small>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${location === href ? " active" : ""}`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta">
              Plan a visit <ArrowUpRight size={16} />
            </Link>
          </nav>

          <button
            className="icon-button lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="container pb-5 lg:hidden">
            <div className="mobile-menu">
              <Link href="/" onClick={closeMenu}>
                Home <ArrowRight size={16} />
              </Link>
              {navLinks.map(({ label, href }) => (
                <Link key={href} href={href} onClick={closeMenu}>
                  {label} <ArrowRight size={16} />
                </Link>
              ))}
              <Link
                href="/contact"
                className="mobile-menu-cta"
                onClick={closeMenu}
              >
                Plan a visit <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
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
