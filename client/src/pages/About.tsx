import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  GraduationCap,
  Hand,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const fourHs = [
  {
    name: "Head",
    detail: "Curious, capable thinking",
    subtext:
      "Developing critical thinkers, problem solvers, and lifelong learners equipped with sound academic rigor.",
    icon: Lightbulb,
    className: "bg-yellow text-ink",
    number: "01",
  },
  {
    name: "Heart",
    detail: "Kindness with conviction",
    subtext:
      "Instilling moral values, empathy, respect, and spiritual groundedness in a caring school community.",
    icon: HeartHandshake,
    className: "bg-coral text-white",
    number: "02",
  },
  {
    name: "Hand",
    detail: "Learning by doing",
    subtext:
      "Practical livelihood training, laboratory science, culinary crafts, and hands-on application of concepts.",
    icon: Hand,
    className: "bg-forest text-cream",
    number: "03",
  },
  {
    name: "Human relations",
    detail: "Belonging that builds courage",
    subtext:
      "Fostering an atmosphere of love, genuine friendship, teamwork, and wholesome Filipino family values.",
    icon: Users,
    className: "bg-blue text-white",
    number: "04",
  },
];

const milestones = [
  {
    year: "1997",
    title: "Village Child Care Center",
    detail:
      "Established to offer preschool education to young children within the Parkwood Hills Subdivision, holding classes at the village Multi-Purpose hall.",
  },
  {
    year: "1998",
    title: "Own Campus Construction",
    detail:
      "Constructed its permanent school building at the present site along Durian Street, expanding to full elementary grade levels.",
  },
  {
    year: "2004",
    title: "High School Department & VSOP",
    detail:
      "In response to strong appeals from parents and students, the Secondary department was inaugurated and the school formally became Village School of Parkwoods (VSOP).",
  },
  {
    year: "Present",
    title: "Comprehensive K to 12 Excellence",
    detail:
      "Providing accessible, top-tier education with DepEd MATATAG implementation, Senior High School tracks, and verified college admissions readiness.",
  },
];

const pillars = [
  {
    badge: "Philosophy",
    title: "Education as an Instrument for Change",
    quote:
      "VSOP adheres to the belief that education is a prime instrument for change and that every person is unique and has potential for development to become God-fearing, productive, and contributive citizens of society geared towards national and global development.",
    tone: "forest",
  },
  {
    badge: "Vision",
    title: "Center of Educational Excellence",
    quote:
      "VSOP envisions itself to be a center of educational excellence with facilities and curriculum responsive to the needs of the children and youth in the midst of changing times — fostering healthy personalities in harmony with a quality Filipino way of life.",
    tone: "coral",
  },
  {
    badge: "Mission",
    title: "Developing Potentials to the Fullest",
    quote:
      "To provide quality education to students, develop their potentials to the fullest, and strengthen their foundation essential to life-long wellness as productive, contributive citizens of society.",
    tone: "yellow",
  },
];

export default function About() {
  return (
    <>
      {/* About Hero Section */}
      <section className="about-section section-pad">
        <div className="container about-grid">
          <div className="section-intro">
            <p className="eyebrow">
              <span className="eyebrow-dot coral-dot" /> The VSOP Story
            </p>
            <h2>
              Education is a <span>prime instrument</span> for change.
            </h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              From a humble community preschool in 1997 to a comprehensive
              elementary and high school institution, VSOP has held fast to one
              enduring truth: every child is unique and has boundless potential
              to unlock.
            </p>
            <div className="about-details">
              <div>
                <strong>Our Promise</strong>
                <span>
                  Quality education that remains accessible to families, with
                  holistic student welfare at the center of every decision.
                </span>
              </div>
              <div>
                <strong>Our Horizon</strong>
                <span>
                  Locally responsive, globally competitive, and continuously
                  evolving to prepare young minds for tomorrow.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature: School Seal & Heritage */}
      <section className="heritage-section-wrapper section-pad bg-cream">
        <div className="container">
          <div
            className="heritage-card"
            style={{
              marginTop: "1.5rem",
              border: "1.5px solid #d4cfc3",
              boxShadow: "0 12px 30px rgba(18, 62, 49, 0.06)",
            }}
          >
            <div className="heritage-image">
              <img
                src="/images/about-school-seal.jpg"
                alt="Village School of Parkwoods Information Desk and Official Seal"
                loading="lazy"
              />
              <div className="heritage-badge">
                <Sparkles size={14} /> Founded 1997
              </div>
            </div>
            <div className="heritage-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot green-dot" /> School Heritage
              </p>
              <h3>Rooted in Community, Reaching for Excellence</h3>
              <p>
                Village School of Parkwoods (VSOP, Inc.) was born from the
                aspirations of the Parkwood Hills community. Over more than two
                decades, our school has nurtured hundreds of graduates who have
                excelled in leading high schools and premier universities across
                Metro Manila.
              </p>
              <div className="heritage-stats">
                <div className="heritage-stat">
                  <strong>25+</strong>
                  <span>Years of service</span>
                </div>
                <div className="heritage-stat">
                  <strong>K–12</strong>
                  <span>Complete levels</span>
                </div>
                <div className="heritage-stat">
                  <strong>4H</strong>
                  <span>Holistic pillars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy, Vision, Mission */}
      <section className="terms-section section-pad">
        <div className="container">
          <div className="section-heading-row terms-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> Guiding Principles
              </p>
              <h2>
                What guides
                <br />
                <span>our mission.</span>
              </h2>
            </div>
            <p>
              Our philosophy, vision, and mission are not just words on a wall
              — they define how we teach, mentor, and care for every child each
              day.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <article key={pillar.badge} className={`pillar-card pillar-${pillar.tone}`}>
                <span className="pillar-badge">{pillar.badge}</span>
                <h3>{pillar.title}</h3>
                <p>"{pillar.quote}"</p>
              </article>
            ))}
          </div>

          {/* Philosophy Wall Showcase */}
          <div className="space-showcase-card" style={{ marginTop: "2.5rem", maxWidth: "900px", marginInline: "auto" }}>
            <div className="space-img-wrap" style={{ aspectRatio: "16 / 9" }}>
              <img
                src="/images/about-philosophy-wall.jpg"
                alt="Hand-painted VSOP Philosophy, Vision, Mission, and Goals mural on campus"
                loading="lazy"
              />
            </div>
            <div className="space-showcase-body">
              <h4>Institutional Identity Mural</h4>
              <p>
                The enduring core values of VSOP — Philosophy, Mission, Vision, and Goals — hand-painted within the communal hall as a daily reminder of our educational commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4H Approach */}
      <section className="four-hs-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow light-eyebrow">
                <span className="eyebrow-dot yellow-dot" /> The 4H Approach
              </p>
              <h2>
                Four directions.
                <br />
                <span>One whole person.</span>
              </h2>
            </div>
            <p>
              Our environment and curriculum invite children and youth to act
              simply, live gracefully, and give respect to one another.
            </p>
          </div>
          <div className="four-h-grid">
            {fourHs.map(({ name, detail, subtext, icon: Icon, className, number }) => (
              <article key={name} className={`h-card ${className}`}>
                <div className="h-card-top">
                  <span>{number}</span>
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                  <small className="h-card-subtext">{subtext}</small>
                </div>
                <ArrowUpRight className="h-card-arrow" size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="about-section section-pad">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: "3rem" }}>
            <p className="eyebrow">
              <span className="eyebrow-dot green-dot" /> Our Journey
            </p>
            <h2>
              Key moments in <span>VSOP history.</span>
            </h2>
          </div>

          <div className="timeline-grid">
            {milestones.map((m, idx) => (
              <div key={m.year} className="timeline-item">
                <div className="timeline-year-badge">{m.year}</div>
                <div className="timeline-body">
                  <h4>{m.title}</h4>
                  <p>{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Track Record & Pride */}
      <section className="terms-section section-pad">
        <div className="container">
          <div className="track-record-card">
            <div className="track-record-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> Proven Outcomes
              </p>
              <h2>
                Scholastic <span>achievements</span> that speak.
              </h2>
              <p>
                VSOP is proud of the high quality, affordable education it
                provides. Our graduates have consistently demonstrated their
                academic prowess in competitive examinations:
              </p>
              <ul className="achievement-bullets">
                <li>
                  <Trophy size={18} className="achieve-icon" />
                  <div>
                    <strong>Regional Science High School Passers</strong>
                    <span>
                      Elementary graduates qualifying through rigorous entrance
                      examinations in Quezon City.
                    </span>
                  </div>
                </li>
                <li>
                  <GraduationCap size={18} className="achieve-icon" />
                  <div>
                    <strong>Top University Entrance Test Qualifiers</strong>
                    <span>
                      High scores on the University of the Philippines College
                      Admission Test (UPCAT) and the National Career Achievement
                      Exam (NCAE).
                    </span>
                  </div>
                </li>
                <li>
                  <Award size={18} className="achieve-icon" />
                  <div>
                    <strong>Scholarship Awardees</strong>
                    <span>
                      Alumni proudly holding merit and academic scholarships in
                      premier institutions across Metro Manila.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="track-record-cta">
              <div className="track-record-box">
                <ShieldCheck size={36} className="text-forest" />
                <h3>Ready to join the VSOP family?</h3>
                <p>
                  Experience the warmth and dedication of our faculty firsthand.
                </p>
                <Link href="/contact" className="primary-button" style={{ marginTop: "1rem" }}>
                  Inquire for enrollment <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
