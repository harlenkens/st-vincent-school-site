import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Calculator,
  CheckCircle2,
  Compass,
  FileCheck,
  FlaskConical,
  Globe,
  GraduationCap,
  HeartHandshake,
  Languages,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

const subjects = [
  {
    name: "Filipino",
    desc: "Wika, panitikan, at pagpapahalaga sa kulturang Pilipino.",
    icon: Languages,
    color: "bg-coral",
  },
  {
    name: "English",
    desc: "Language proficiency, reading comprehension, and communication.",
    icon: BookOpen,
    color: "bg-forest",
  },
  {
    name: "Mathematics",
    desc: "Problem solving, critical reasoning, and real-world numeracy.",
    icon: Calculator,
    color: "bg-yellow",
  },
  {
    name: "Science",
    desc: "Inquiry-based biology, physics, chemistry, and environmental science.",
    icon: FlaskConical,
    color: "bg-blue",
  },
  {
    name: "Araling Panlipunan",
    desc: "History, geography, civic participation, and social consciousness.",
    icon: Globe,
    color: "bg-coral",
  },
  {
    name: "MAPEH",
    desc: "Music, Arts, Physical Education, and Health for well-rounded wellness.",
    icon: Activity,
    color: "bg-forest",
  },
  {
    name: "Values Education",
    desc: "Character formation, moral courage, empathy, and spiritual grounding.",
    icon: HeartHandshake,
    color: "bg-yellow",
  },
  {
    name: "TLE / EPP",
    desc: "Technology, home economics, digital literacy, and livelihood crafts.",
    icon: Wrench,
    color: "bg-blue",
  },
];

const shsStrands = [
  {
    code: "HUMSS",
    track: "Academic Track",
    name: "Humanities and Social Sciences",
    desc: "Designed for learners passionate about communication, psychology, education, political science, journalism, and creative arts.",
    careers: ["Education", "Law & Criminology", "Journalism", "Public Administration", "Psychology"],
    color: "pillar-forest",
    icon: GraduationCap,
  },
  {
    code: "ABM",
    track: "Academic Track",
    name: "Accountancy, Business & Management",
    desc: "Builds foundations in financial management, business enterprise, marketing, accounting, and leadership in commerce.",
    careers: ["Accountancy", "Business Administration", "Marketing", "Entrepreneurship", "Finance"],
    color: "pillar-coral",
    icon: TrendingUp,
  },
  {
    code: "GAS",
    track: "Academic Track",
    name: "General Academic Strand",
    desc: "Flexible, multidisciplinary preparation for students exploring diverse collegiate paths and versatile career horizons.",
    careers: ["Liberal Arts", "Interdisciplinary Studies", "Social Work", "General Sciences"],
    color: "pillar-yellow",
    icon: Compass,
  },
  {
    code: "TVL",
    track: "Tech-Voc Track",
    name: "Technical-Vocational-Livelihood",
    desc: "Hands-on competency training aligned with TESDA national certifications, home economics, and direct workplace immersion.",
    careers: ["Hospitality & Culinary", "Information Technology", "Tourism Services", "Skilled Trades"],
    color: "pillar-forest",
    icon: Briefcase,
  },
];

const specializedSpaces = [
  {
    title: "Science Laboratory",
    image: "/images/curriculum-science-lab.jpg",
    desc: "Where theories come alive through hands-on experiments, anatomical observation, and scientific inquiry.",
  },
  {
    title: "Computer Laboratory",
    image: "/images/curriculum-computer-lab.jpg",
    desc: "Empowering digital competence, coding foundations, research skills, and responsible online exploration.",
  },
  {
    title: "TLE & Home Economics Room",
    image: "/images/curriculum-tle-kitchen.jpg",
    desc: "Direct hands-on livelihood education (Hand pillar) spanning cooking, dining simulation, and household crafts.",
  },
];

export default function Curriculum() {
  return (
    <>
      {/* Curriculum Hero */}
      <section className="about-section section-pad">
        <div className="container about-grid">
          <div className="section-intro">
            <p className="eyebrow">
              <span className="eyebrow-dot green-dot" /> Academic Framework
            </p>
            <h2>
              Learning with <span>purpose.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              VSOP implements the DepEd MATATAG curriculum — the revised K to 12
              framework designed to decongest learning competencies and anchor
              education on foundational skills, critical thinking, and moral
              character.
            </p>
            <div className="about-details">
              <div>
                <strong>MATATAG Ready</strong>
                <span>
                  Modernized learning objectives focusing on literacy,
                  numeracy, and 21st-century problem-solving capabilities.
                </span>
              </div>
              <div>
                <strong>4H Integration</strong>
                <span>
                  Head, Heart, Hand, and Human Relations woven into daily
                  classroom engagement, laboratory experiments, and community
                  projects.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels Overview */}
      <section className="terms-section section-pad">
        <div className="container">
          <div className="section-heading-row terms-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> Learning Pathways
              </p>
              <h2>
                From kindergarten
                <br />
                <span>to senior high.</span>
              </h2>
            </div>
            <p>
              A continuous, nurturing educational journey structured to meet
              learners at their developmental stage and guide them toward
              independent mastery.
            </p>
          </div>

          <div className="terms-grid">
            <article className="term-card">
              <div className="term-number">01</div>
              <p>Elementary</p>
              <h3>Grades 1–6</h3>
              <span>
                Building robust literacy, numeracy, social skills, and character
                habits in an encouraging environment.
              </span>
              <div className="term-bar">
                <i style={{ width: "55%" }} />
              </div>
            </article>

            <article className="term-card">
              <div className="term-number">02</div>
              <p>Junior High</p>
              <h3>Grades 7–10</h3>
              <span>
                Deepening scientific inquiry, advanced math, humanities, and
                exploratory TLE courses while preparing for high school exit
                exams.
              </span>
              <div className="term-bar">
                <i style={{ width: "75%" }} />
              </div>
            </article>

            <article className="term-card">
              <div className="term-number">03</div>
              <p>Senior High</p>
              <h3>Grades 11–12</h3>
              <span>
                Specialized tracks with work immersion, research capstones, and
                preparation for university entrance tests (UPCAT, etc.).
              </span>
              <div className="term-bar">
                <i style={{ width: "95%" }} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Subject Areas Grid */}
      <section className="four-hs-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow light-eyebrow">
                <span className="eyebrow-dot yellow-dot" /> Core Disciplines
              </p>
              <h2>
                What we
                <br />
                <span>teach.</span>
              </h2>
            </div>
            <p>
              From languages and sciences to practical life skills and arts, each
              subject is taught with care, intention, and real-world relevance.
            </p>
          </div>

          <div className="four-h-grid" style={{ marginTop: "3.5rem" }}>
            {subjects.map(({ name, desc, icon: Icon, color }) => (
              <article key={name} className={`h-card ${color} text-white`}>
                <div className="h-card-top">
                  <div className="subject-icon-box">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    style={{ opacity: 0.75 }}
                    className="subject-action-arrow"
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}>
                    {name}
                  </h3>
                  <p style={{ maxWidth: "100%", opacity: 0.9 }}>{desc}</p>
                </div>
                <div className="subject-action-cue">
                  <span>MATATAG Core</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Senior High School Strands */}
      <section className="about-section section-pad">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: "2.5rem" }}>
            <p className="eyebrow">
              <span className="eyebrow-dot coral-dot" /> Senior High School
            </p>
            <h2>
              Academic strands & <span>future pathways.</span>
            </h2>
          </div>

          <div className="strands-grid-2x2">
            {shsStrands.map((strand) => {
              const StrandIcon = strand.icon;
              return (
                <article
                  key={strand.code}
                  className={`strand-action-card ${strand.color}`}
                >
                  <div className="strand-action-card-header">
                    <span className="pillar-badge" style={{ marginBottom: 0 }}>
                      {strand.code}
                    </span>
                    <div className="strand-icon-box">
                      <StrandIcon size={20} strokeWidth={2} />
                    </div>
                  </div>
                  <h3>{strand.name}</h3>
                  <p style={{ fontStyle: "normal", marginBottom: "1.2rem" }}>
                    {strand.desc}
                  </p>
                  <div
                    style={{
                      marginTop: "auto",
                      borderTop: "1px solid rgba(255,255,255,0.2)",
                      paddingTop: "0.85rem",
                    }}
                  >
                    <small
                      style={{
                        display: "block",
                        textTransform: "uppercase",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        marginBottom: "0.35rem",
                        fontWeight: 800,
                      }}
                    >
                      Career Readiness:
                    </small>
                    <span style={{ fontSize: "0.72rem", opacity: 0.9 }}>
                      {strand.careers.join(" · ")}
                    </span>
                  </div>
                  <Link
                    href={`/contact?strand=${encodeURIComponent(strand.code)}`}
                    className="strand-action-btn"
                  >
                    <span>Inquire for {strand.code}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* DepEd ESC & Voucher Assistance Box */}
          <div className="voucher-banner" style={{ marginTop: "3rem" }}>
            <div className="voucher-icon">
              <FileCheck size={28} />
            </div>
            <div className="voucher-content">
              <h3>DepEd Senior High School Voucher Program (SHS VP) & ESC</h3>
              <p>
                VSOP participates in DepEd assistance programs. Completers from
                public Junior High Schools and ESC grantees from private schools
                are eligible for tuition vouchers, making Senior High School at
                VSOP accessible and affordable.
              </p>
            </div>
            <Link href="/contact" className="voucher-cta">
              Inquire about vouchers <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Applied Learning Spaces (Hands-on Hand) */}
      <section className="terms-section section-pad">
        <div className="container">
          <div className="section-heading-row terms-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot green-dot" /> Applied Learning
              </p>
              <h2>
                Spaces that bring
                <br />
                <span>lessons to life.</span>
              </h2>
            </div>
            <p>
              The "Hand" pillar of 4H comes alive in our dedicated laboratories
              and practical workshop rooms.
            </p>
          </div>

          <div className="specialized-spaces-grid" style={{ marginTop: "3rem" }}>
            {specializedSpaces.map((space) => (
              <div key={space.title} className="space-showcase-card">
                <div className="space-img-wrap">
                  <img src={space.image} alt={space.title} loading="lazy" />
                </div>
                <div className="space-showcase-body">
                  <h4>{space.title}</h4>
                  <p>{space.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/campus" className="primary-button">
              View all campus facilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
