import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Download,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import BlurText from "@/components/react-bits/BlurText";
import CountUp from "@/components/react-bits/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { contactInquiryHref } from "@/lib/inquiry";

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
  return (
    <>
      {/* Journey Hero */}
      <section className="journey-section section-pad">
        <div className="container">
          <Reveal>
            <div className="journey-intro">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-dot coral-dot" /> For Parents & Guardians
                </p>
                <BlurText
                  as="h2"
                  text="Your orientation, made clear."
                  delay={55}
                  animateBy="words"
                  className="page-blur-title"
                />
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
          </Reveal>

          <Stagger className="journey-path" stagger={0.08}>
            <div className="path-line" aria-hidden="true" />
            {journeySteps.map(
              ({ step, eyebrow, title, detail, icon: Icon, tone, href }, index) => (
                <StaggerItem key={step}>
                  <article
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
                </StaggerItem>
              ),
            )}
          </Stagger>

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
                  <strong>
                    <CountUp to={3} duration={1.2} />
                  </strong>
                  <span>Terms per year</span>
                </div>
                <div className="heritage-stat">
                  <strong>
                    <CountUp to={4} duration={1.2} />
                  </strong>
                  <span>Quarterly PTCs</span>
                </div>
                <div className="heritage-stat">
                  <strong>
                    <CountUp to={100} duration={1.6} />%
                  </strong>
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

          <Accordion type="single" collapsible className="policy-accordion">
            {essentialPolicies.map((policy, idx) => (
              <AccordionItem
                key={policy.title}
                value={`policy-${idx}`}
                className="policy-accordion-item"
              >
                <AccordionTrigger className="policy-header hover:no-underline">
                  <div className="policy-title-row">
                    <span className="policy-num">0{idx + 1}</span>
                    <h4>{policy.title}</h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="policy-body">
                  <p>{policy.desc}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Reveal delay={0.1}>
            <div className="parent-support-box" style={{ marginTop: "3.5rem" }}>
              <div>
                <h3>Have questions about enrollment or school policies?</h3>
                <p>
                  Our administration desk is happy to assist with student
                  guidelines, requirements, and visit appointments.
                </p>
              </div>
              <div className="parent-support-actions">
                <Button asChild className="primary-button h-auto rounded-full px-5 py-3">
                  <Link href={contactInquiryHref({ topic: "general" })}>
                    <span>Contact the office</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="outline-button h-auto rounded-full px-5 py-3"
                  onClick={() =>
                    toast.info(
                      "The 2026-2027 Student Handbook PDF will be downloadable once finalized before term start.",
                    )
                  }
                >
                  <Download size={16} />
                  <span>Student Handbook PDF</span>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
