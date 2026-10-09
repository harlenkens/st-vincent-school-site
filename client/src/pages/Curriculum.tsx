import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Calculator,
  Compass,
  FileCheck,
  FlaskConical,
  Globe,
  GraduationCap,
  HeartHandshake,
  Languages,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";
import BlurText from "@/components/react-bits/BlurText";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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
          <Reveal>
            <div className="section-intro">
              <p className="eyebrow">
                <span className="eyebrow-dot green-dot" /> Academic Framework
              </p>
              <BlurText
                as="h2"
                text="Learning with purpose."
                delay={60}
                animateBy="words"
                className="page-blur-title"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
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
          </Reveal>
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

          <Stagger className="terms-grid" stagger={0.1}>
            {[
              {
                n: "01",
                level: "Elementary",
                title: "Grades 1–6",
                text: "Building robust literacy, numeracy, social skills, and character habits in an encouraging environment.",
                width: "55%",
              },
              {
                n: "02",
                level: "Junior High",
                title: "Grades 7–10",
                text: "Deepening scientific inquiry, advanced math, humanities, and exploratory TLE courses while preparing for high school exit exams.",
                width: "75%",
              },
              {
                n: "03",
                level: "Senior High",
                title: "Grades 11–12",
                text: "Specialized tracks with work immersion, research capstones, and preparation for university entrance tests (UPCAT, etc.).",
                width: "95%",
              },
            ].map((item) => (
              <StaggerItem key={item.n}>
                <article className="term-card">
                  <div className="term-number">{item.n}</div>
                  <p>{item.level}</p>
                  <h3>{item.title}</h3>
                  <span>{item.text}</span>
                  <div className="term-bar">
                    <i style={{ width: item.width }} />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
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

          <Stagger
            className="four-h-grid subjects-grid"
            stagger={0.06}
            style={{ marginTop: "3.5rem" }}
          >
            {subjects.map(({ name, desc, icon: Icon, color }) => (
              <StaggerItem key={name}>
                <article className={`h-card subject-card ${color} text-white`}>
                  <div className="subject-card-copy">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <div className="subject-action-cue">
                      <span>MATATAG Core</span>
                    </div>
                  </div>
                  <div className="subject-icon-box" aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
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

          <Stagger className="strands-grid-2x2" stagger={0.08}>
            {shsStrands.map((strand) => {
              const StrandIcon = strand.icon;
              return (
                <StaggerItem key={strand.code}>
                  <article className={`strand-action-card ${strand.color}`}>
                    <div className="strand-action-card-header">
                      <span className="pillar-badge" style={{ marginBottom: 0 }}>
                        {strand.track}
                      </span>
                      <div className="strand-icon-box">
                        <StrandIcon size={20} strokeWidth={2} />
                      </div>
                    </div>
                    <p className="strand-code-label">{strand.code}</p>
                    <h3>{strand.name}</h3>
                    <p className="strand-desc">{strand.desc}</p>
                    <div className="strand-careers">
                      <small>Career Readiness:</small>
                      <span>{strand.careers.join(" · ")}</span>
                    </div>
                    <Link
                      href={`/contact?strand=${encodeURIComponent(strand.code)}`}
                      className="strand-action-btn"
                    >
                      <span>Inquire for {strand.code}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>

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

          <Stagger
            className="specialized-spaces-grid"
            stagger={0.1}
            style={{ marginTop: "3rem" }}
          >
            {specializedSpaces.map((space) => (
              <StaggerItem key={space.title}>
                <div className="space-showcase-card">
                  <div className="space-img-wrap">
                    <img src={space.image} alt={space.title} loading="lazy" />
                  </div>
                  <div className="space-showcase-body">
                    <h4>{space.title}</h4>
                    <p>{space.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

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
