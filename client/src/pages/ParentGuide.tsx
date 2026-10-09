import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Download,
  HeartHandshake,
  HelpCircle,
  PhoneCall,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

const journeySteps = [
  {
    step: "01",
    eyebrow: "Begin with belonging",
    title: "Welcome to VSOP",
    detail:
      "Meet our teachers, hear the founding story, and take your child's first step into the Parkwood Hills campus.",
    icon: Users,
    tone: "yellow",
    href: "/about",
  },
  {
    step: "02",
    eyebrow: "Find your rhythm",
    title: "The School Year",
    detail:
      "Understand the 3-term academic calendar, monthly rhythms, exam schedules, and quarterly parent-teacher conferences.",
    icon: CalendarDays,
    tone: "coral",
    href: "/",
  },
  {
    step: "03",
    eyebrow: "Learn in every direction",
    title: "MATATAG & 4H",
    detail:
      "Follow our holistic curriculum weaving Head, Heart, Hand, and Human Relations into every subject area.",
    icon: BookOpen,
    tone: "green",
    href: "/curriculum",
  },
  {
    step: "04",
    eyebrow: "Grow with guidance",
    title: "Safe & Connected",
    detail:
      "Child safeguarding protocols, clinic health monitoring, counseling guidance, and clear family touchpoints.",
    icon: ShieldCheck,
    tone: "blue",
    href: "/campus",
  },
  {
    step: "05",
    eyebrow: "Step into what's next",
    title: "Prepare for the Future",
    detail:
      "Senior High tracks (HUMSS, ABM, GAS, TVL), DepEd vouchers, work immersion, and verified college test readiness.",
    icon: Route,
    tone: "yellow",
    href: "/curriculum",
  },
] as const;

const essentialPolicies = [
  {
    title: "Daily Attendance & School Hours",
    desc: "The campus gates open at 6:30 AM. Classes commence promptly at 7:30 AM. Regular school hours run until dismissal based on grade level schedule. For the safety of every child, early dismissals require parent authorization.",
  },
  {
    title: "Child Safeguarding & Campus Security",
    desc: "VSOP strictly upholds the DepEd Child Protection Policy. All visitors must log in at the security gate and present a valid ID at the Information Desk. Students are released only to verified guardians.",
  },
  {
    title: "Health & First Aid Protocol",
    desc: "The on-site School Clinic attends to minor illnesses, first aid, and sudden medical needs. In case of fever or emergency, parents are immediately notified by the administration office.",
  },
  {
    title: "Report Cards & Parent-Teacher Touchpoints",
    desc: "Progress is shared quarterly during Parent-Teacher Conferences (PTC). We believe education is a partnership: open dialogue between families and educators ensures early support for every student.",
  },
];

export default function ParentGuide() {
  const [openPolicy, setOpenPolicy] = useState<number | null>(null);

  return (
    <>
      {/* Journey Hero */}
      <section className="journey-section section-pad">
        <div className="container">
          <div className="journey-intro">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> For Parents & Guardians
              </p>
              <h2>
                Your orientation,
                <br />
                <span>made clear.</span>
              </h2>
            </div>
            <div className="journey-intro-copy">
              <p>
                Think of this as your roadmap through the school year — from the
                first day of enrollment to your child’s next big milestone.
              </p>
              <span className="path-label">
                <Route size={16} /> The VSOP Parent Journey
              </span>
            </div>
          </div>

          {/* Flowchart Path */}
          <div
            className="journey-path"
            aria-label="Parent orientation journey flowchart"
          >
            <div className="path-line" aria-hidden="true" />
            {journeySteps.map(
              ({ step, eyebrow, title, detail, icon: Icon, tone, href }, index) => (
                <article
                  key={step}
                  className={`journey-card journey-card-${tone}`}
                >
                  <div className="journey-card-top">
                    <span className="step-number">{step}</span>
                    <Icon size={21} />
                  </div>
                  <p className="card-eyebrow">{eyebrow}</p>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  <div style={{ marginTop: "auto", paddingTop: "0.8rem" }}>
                    <Link
                      href={href}
                      className="text-button"
                      style={{ fontSize: "0.72rem" }}
                    >
                      Learn more <ArrowRight size={13} />
                    </Link>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <span className="journey-arrow" aria-hidden="true">
                      <ArrowRight size={17} />
                    </span>
                  )}
                </article>
              ),
            )}
          </div>

          {/* SHS Branching Callout */}
          <div className="shs-branch">
            <div className="branch-label">
              <span>For Senior High School</span>
              <ArrowDownRight size={17} />
            </div>
            <div className="branch-items">
              <span>Academic Tracks & Strands</span>
              <span>DepEd ESC & VMS Vouchers</span>
              <span>Industry Work Immersion</span>
              <span>UPCAT & College Readiness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Real Orientation Showcase Card */}
      <section className="section-pad bg-cream" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="heritage-card">
            <div className="heritage-image">
              <img
                src="/images/parent-guide-orientation.jpg"
                alt="Parents Orientation in the VSOP Activity Area"
                loading="lazy"
              />
              <div className="heritage-badge">
                <Users size={14} /> Orientation Assembly
              </div>
            </div>
            <div className="heritage-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot green-dot" /> Family Partnership
              </p>
              <h3>We Walk Beside Every Family</h3>
              <p>
                At Village School of Parkwoods, parents are active partners in
                learning. From our annual Parents' Orientation in the Activity
                Hall to regular check-ins and school events, we ensure you always
                feel informed, heard, and valued.
              </p>
              <div className="heritage-stats">
                <div className="heritage-stat">
                  <strong>3</strong>
                  <span>Terms per year</span>
                </div>
                <div className="heritage-stat">
                  <strong>4</strong>
                  <span>Quarterly PTCs</span>
                </div>
                <div className="heritage-stat">
                  <strong>100%</strong>
                  <span>Dedicated faculty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Parent Policies Accordion */}
      <section className="about-section section-pad">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: "3rem" }}>
            <p className="eyebrow">
              <span className="eyebrow-dot yellow-dot" /> Important Guidelines
            </p>
            <h2>
              What every <span>family should know.</span>
            </h2>
          </div>

          <div className="policy-cards-grid">
            {essentialPolicies.map((policy, idx) => (
              <div
                key={policy.title}
                className={`policy-accordion-item${
                  openPolicy === idx ? " open" : ""
                }`}
                onClick={() =>
                  setOpenPolicy(openPolicy === idx ? null : idx)
                }
              >
                <div className="policy-header">
                  <div className="policy-title-row">
                    <span className="policy-num">0{idx + 1}</span>
                    <h4>{policy.title}</h4>
                  </div>
                  <ChevronDown
                    size={18}
                    className="policy-arrow"
                    style={{
                      transform:
                        openPolicy === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </div>
                <div
                  className="policy-body"
                  style={{
                    display: openPolicy === idx ? "block" : "none",
                  }}
                >
                  <p>{policy.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Box */}
          <div className="parent-support-box" style={{ marginTop: "3.5rem" }}>
            <div>
              <h3>Have questions about enrollment or school policies?</h3>
              <p>
                Our administration desk is happy to assist with student
                guidelines, requirements, and visit appointments.
              </p>
            </div>
            <div className="parent-support-actions">
              <Link href="/contact" className="primary-button">
                Contact the office <ArrowUpRight size={16} />
              </Link>
              <button
                className="outline-button"
                onClick={() =>
                  toast.info(
                    "The 2026-2027 Student Handbook PDF will be downloadable once finalized before term start.",
                  )
                }
              >
                <Download size={15} /> Student Handbook PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
