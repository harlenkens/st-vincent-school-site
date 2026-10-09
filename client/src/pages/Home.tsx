import { Link } from "wouter";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  MapPin,
  Route,
  Users,
} from "lucide-react";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import BlurText from "@/components/react-bits/BlurText";
import FadeContent from "@/components/react-bits/FadeContent";

const terms = [
  {
    label: "Term 01",
    title: "Settle in",
    text: "Orientation, routines, and foundations for a confident start.",
  },
  {
    label: "Term 02",
    title: "Deepen",
    text: "Build skills, friendships, and a stronger sense of purpose.",
  },
  {
    label: "Term 03",
    title: "Step forward",
    text: "Celebrate progress and make the next brave move.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="top" className="hero-section">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-sun" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> A school for the whole child
            </p>
            <BlurText
              as="h1"
              text="Grow in more than one direction."
              delay={80}
              animateBy="words"
              direction="bottom"
              className="hero-blur-title"
            />
            <p className="hero-lede">
              At the Village School of Parkwoods, learning is a lived experience
              — thoughtful, joyful, hands-on, and deeply human.
            </p>
            <div className="hero-actions">
              <Link href="/parent-guide" className="primary-button">
                See the parent journey <ArrowUpRight size={17} />
              </Link>
              <Link href="/about" className="text-button">
                Meet VSOP <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true">
                <span>H</span>
                <span>H</span>
                <span>H</span>
                <span>+</span>
              </div>
              <div>
                <strong>Head · Heart · Hand · Human Relations</strong>
                <small>
                  Four ways we help children become more of who they are.
                </small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-note note-one">
              <span>Since</span>
              <strong>2004</strong>
              <small>high school department</small>
            </div>
            <div className="visual-note note-two">
              <MapPin size={15} />
              <span>Parkwood Hills</span>
            </div>
            <div className="hero-photo-frame">
              <img
                src="/images/home-hero-classroom.jpg"
                alt="Instructional Classroom at Village School of Parkwoods"
                loading="eager"
              />
              <div className="photo-wash" />
              <div className="photo-caption">
                <span>Room to learn.</span>
                <strong>Space to become.</strong>
              </div>
            </div>
            <div className="hero-sticker">
              <span>VSOP</span>
              <small>make your mark</small>
            </div>
          </div>
        </div>
        <div className="hero-bottom-note container">
          <span>Scroll to explore</span>
          <ArrowDownRight size={16} />
        </div>
      </section>

      {/* Explore VSOP Quick Links */}
      <section className="section-pad" style={{ background: "#fffdf8" }}>
        <div className="container">
          <AnimatedContent distance={40} duration={0.7} threshold={0.15}>
            <div className="section-intro">
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> Explore VSOP
              </p>
              <h2>
                Everything in <span>one place.</span>
              </h2>
            </div>
          </AnimatedContent>
          <div className="home-links-grid">
            {[
              {
                label: "Our School",
                desc: "History since 1997, philosophy, vision, and the 4H approach.",
                href: "/about",
                icon: Users,
              },
              {
                label: "Curriculum",
                desc: "MATATAG framework, 8 core disciplines, and Senior High strands.",
                href: "/curriculum",
                icon: BookOpen,
              },
              {
                label: "Parent Guide",
                desc: "5-step orientation roadmap, schedules, and school policies.",
                href: "/parent-guide",
                icon: Route,
              },
              {
                label: "Campus Facilities",
                desc: "Laboratories, classrooms, library, and interactive photo tour.",
                href: "/campus",
                icon: MapPin,
              },
              {
                label: "Get in Touch",
                desc: "Enrollment inquiries, office hours, and plan a campus visit.",
                href: "/contact",
                icon: ArrowUpRight,
              },
            ].map(({ label, desc, href, icon: Icon }, index) => (
              <FadeContent key={href} delay={index * 0.08} duration={0.7}>
                <Link href={href} className="home-link-card">
                  <div className="home-link-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <strong>{label}</strong>
                    <span>{desc}</span>
                  </div>
                  <ArrowRight size={16} className="home-link-arrow" />
                </Link>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Preview Banner */}
      <section className="campus-section section-pad" style={{ paddingTop: 0 }}>
        <div className="container campus-grid">
          <div className="campus-photo-wrap">
            <img
              src="/images/home-campus-exterior.jpg"
              alt="Village School of Parkwoods campus building in Parkwood Hills"
              loading="lazy"
            />
            <div className="campus-tag">
              <span>Campus Life</span>
              <strong>Learn together.</strong>
            </div>
            <div className="campus-doodle" aria-hidden="true">
              ↗
            </div>
          </div>
          <div className="campus-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot green-dot" /> Spaces that support growth
            </p>
            <h2>
              Little moments.
              <br />
              <span>Big becoming.</span>
            </h2>
            <p>
              Instructional rooms, science and computer laboratories, a peaceful
              library, and communal dining — each space gives students room to
              ask, try, collaborate, and belong.
            </p>
            <div className="location-line">
              <MapPin size={18} />
              <div>
                <strong>Find us in Parkwood Hills</strong>
                <span>Block 6 Lot 8, Durian St., Violago Homes, Parkwood Hills</span>
              </div>
            </div>
            <Link href="/campus" className="outline-button">
              Explore campus facilities <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Term School Year Rhythm */}
      <section className="terms-section section-pad">
        <div className="container">
          <div className="section-heading-row terms-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> The School Year
              </p>
              <h2>
                A rhythm that helps
                <br />
                <span>everyone thrive.</span>
              </h2>
            </div>
            <p>
              VSOP's 3-term system gives each season of learning a clear purpose
              — and every family a steady pulse to follow.
            </p>
          </div>
          <div className="terms-grid">
            {terms.map((term, index) => (
              <article className="term-card" key={term.label}>
                <div className="term-number">0{index + 1}</div>
                <p>{term.label}</p>
                <h3>{term.title}</h3>
                <span>{term.text}</span>
                <div className="term-bar">
                  <i style={{ width: `${52 + index * 20}%` }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
