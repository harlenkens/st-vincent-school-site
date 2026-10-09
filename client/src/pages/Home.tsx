import { useState } from "react";
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
import { AnimatePresence, motion } from "motion/react";
import BlurText from "@/components/react-bits/BlurText";
import Magnet from "@/components/react-bits/Magnet";
import { FadeIn, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const exploreLinks = [
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
];

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

const campusGallery = [
  {
    src: "/images/home-campus-exterior.jpg",
    alt: "Village School of Parkwoods campus building in Parkwood Hills",
    label: "Campus Life",
    title: "Learn together.",
  },
  {
    src: "/images/campus-hero-exterior.jpg",
    alt: "Exterior view of the Village School of Parkwoods campus",
    label: "Our Grounds",
    title: "Rooted here.",
  },
  {
    src: "/images/home-hero-classroom.jpg",
    alt: "Instructional classroom at Village School of Parkwoods",
    label: "Classrooms",
    title: "Room to grow.",
  },
  {
    src: "/images/campus-library.jpg",
    alt: "School library at Village School of Parkwoods",
    label: "Quiet Study",
    title: "Space to think.",
  },
  {
    src: "/images/campus-science-lab.jpg",
    alt: "Science laboratory at Village School of Parkwoods",
    label: "Labs",
    title: "Hands-on learning.",
  },
];

export default function Home() {
  const [campusIndex, setCampusIndex] = useState(0);
  const campusPhoto = campusGallery[campusIndex];

  const cycleCampusPhoto = () => {
    setCampusIndex((current) => (current + 1) % campusGallery.length);
  };

  return (
    <>
      <section id="top" className="hero-section">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-sun" aria-hidden="true" />
        <div className="container hero-grid">
          <FadeIn className="hero-copy">
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
            <motion.p
              className="hero-lede"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              At the Village School of Parkwoods, learning is a lived experience
              — thoughtful, joyful, hands-on, and deeply human.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Magnet padding={40} magnetStrength={3}>
                <Button asChild className="primary-button h-auto rounded-full px-5 py-3">
                  <Link href="/parent-guide">
                    See the parent journey <ArrowUpRight size={17} />
                  </Link>
                </Button>
              </Magnet>
              <Link href="/about" className="text-button">
                Meet VSOP <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              className="hero-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
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
            </motion.div>
          </FadeIn>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
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
          </motion.div>
        </div>
        <motion.div
          className="hero-bottom-note container"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <span>Scroll to explore</span>
          <ArrowDownRight size={16} />
        </motion.div>
      </section>

      <section className="section-pad" style={{ background: "#fffdf8" }}>
        <div className="container">
          <Reveal>
            <div className="section-intro">
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> Explore VSOP
              </p>
              <h2>
                Everything in <span>one place.</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="home-links-grid" stagger={0.07}>
            {exploreLinks.map(({ label, desc, href, icon: Icon }) => (
              <StaggerItem key={href} hoverLift>
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="campus-section section-pad" style={{ paddingTop: 0 }}>
        <div className="container campus-grid">
          <Reveal>
            <button
              type="button"
              className="campus-photo-wrap"
              onClick={cycleCampusPhoto}
              aria-label={`View next campus photo (${campusIndex + 1} of ${campusGallery.length})`}
            >
              <div className="campus-photo-stack">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={campusPhoto.src}
                    src={campusPhoto.src}
                    alt={campusPhoto.alt}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  />
                </AnimatePresence>
                <span className="campus-photo-hint">Click to change</span>
                <span className="campus-photo-dots" aria-hidden="true">
                  {campusGallery.map((photo, index) => (
                    <i
                      key={photo.src}
                      className={index === campusIndex ? "is-active" : undefined}
                    />
                  ))}
                </span>
              </div>
              <div className="campus-tag">
                <span>{campusPhoto.label}</span>
                <strong>{campusPhoto.title}</strong>
              </div>
              <div className="campus-doodle" aria-hidden="true">
                ↗
              </div>
            </button>
          </Reveal>
          <Reveal delay={0.12}>
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
                  <span>
                    Block 6 Lot 8, Durian St., Violago Homes, Parkwood Hills
                  </span>
                </div>
              </div>
              <Magnet padding={36} magnetStrength={3.2}>
                <Link href="/campus" className="outline-button">
                  Explore campus facilities <ArrowUpRight size={16} />
                </Link>
              </Magnet>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="terms-section section-pad">
        <div className="container">
          <Reveal>
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
          </Reveal>
          <Stagger className="terms-grid" stagger={0.1}>
            {terms.map((term, index) => (
              <StaggerItem key={term.label}>
                <article className="term-card">
                  <div className="term-number">0{index + 1}</div>
                  <p>{term.label}</p>
                  <h3>{term.title}</h3>
                  <span>{term.text}</span>
                  <div className="term-bar">
                    <motion.i
                      initial={{ width: 0 }}
                      whileInView={{ width: `${52 + index * 20}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
