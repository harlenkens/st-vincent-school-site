import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Eye,
  Info,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "wouter";
import BlurText from "@/components/react-bits/BlurText";
import { Reveal } from "@/components/motion/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Facility {
  id: string;
  name: string;
  category: "all" | "classrooms" | "support" | "life";
  tag: string;
  image: string;
  description: string;
  features: string[];
}

const facilities: Facility[] = [
  {
    id: "instructional-room",
    name: "Instructional Classrooms",
    category: "classrooms",
    tag: "Elementary & High School",
    image: "/images/campus-instructional-room.jpg",
    description:
      "Bright, well-ventilated learning spaces featuring vibrant nature murals, comfortable student seating, and teacher presentation areas tailored for interactive discussions and active engagement.",
    features: [
      "Natural daylight & good cross-ventilation",
      "Teacher desk & whiteboard layout",
      "Comfortable student writing desks",
      "Hand-painted bamboo & nature mural themes",
    ],
  },
  {
    id: "science-lab",
    name: "Science Laboratory",
    category: "classrooms",
    tag: "Hands-on Discovery",
    image: "/images/campus-science-lab.jpg",
    description:
      "Equipped for experimental science, chemistry, and biology demonstrations with dedicated work tables, laboratory sinks, anatomical models, and secure storage for lab apparatus.",
    features: [
      "Laboratory wash stations & sinks",
      "Anatomical torso & biological models",
      "Apparatus & glassware display cabinet",
      "Open-air observation terrace",
    ],
  },
  {
    id: "computer-room",
    name: "Computer Laboratory",
    category: "classrooms",
    tag: "Digital Literacy",
    image: "/images/campus-computer-lab.jpg",
    description:
      "Modern computer stations giving students direct hands-on practice in digital research, typing, productivity software, internet-assisted projects, and technology literacy.",
    features: [
      "Individual desktop workstations",
      "Dedicated high-speed networking setup",
      "Printing and document facilities",
      "Curriculum-aligned IT exercises",
    ],
  },
  {
    id: "library",
    name: "Library & Resource Room",
    category: "classrooms",
    tag: "Research & Reading",
    image: "/images/campus-library.jpg",
    description:
      "A peaceful learning haven with DepEd textbooks, reference encyclopedias, literature, and subject-specific resources organized for Junior and Senior High school tracks.",
    features: [
      "Extensive curriculum textbook catalog",
      "Dedicated sections for HUMSS, GAS & ABM",
      "Spacious wooden reading tables",
      "Quiet independent study environment",
    ],
  },
  {
    id: "tle-room",
    name: "TLE & Home Economics Room",
    category: "classrooms",
    tag: "Practical Skills (Hand)",
    image: "/images/campus-tle-room.jpg",
    description:
      "A simulated domestic and culinary environment where students learn cooking, household management, practical craft, and hospitality as part of the 4H 'Hand' philosophy.",
    features: [
      "Stove & food preparation counters",
      "Dining table & hospitality practice setup",
      "Living area simulation for domestic arts",
      "Refrigeration and cooking appliances",
    ],
  },
  {
    id: "activity-hall",
    name: "Activity Area & Multipurpose Hall",
    category: "life",
    tag: "Assemblies & Events",
    image: "/images/campus-activity-hall.jpg",
    description:
      "The vibrant central gathering venue for student assemblies, Parents' Orientation, United Nations Day celebrations, school plays, awards rites, and community gatherings.",
    features: [
      "Decorated stage for performances & talks",
      "High-ceiling covered hall with fresh airflow",
      "Multimedia screen & sound system",
      "Accommodates students, faculty & parents",
    ],
  },
  {
    id: "canteen",
    name: "School Canteen",
    category: "life",
    tag: "Nutrition & Fellowship",
    image: "/images/campus-canteen.jpg",
    description:
      "A friendly communal dining hub with artistic tree murals, pure drinking water dispensers, sanitary food counters, and long wooden tables where students eat and connect.",
    features: [
      "Sanitary serving & washing counters",
      "Complimentary purified drinking water",
      "Sturdy long wooden communal benches",
      "Orderly line system promoting discipline",
    ],
  },
  {
    id: "clinic",
    name: "School Clinic",
    category: "support",
    tag: "Health & Well-being",
    image: "/images/campus-clinic.jpg",
    description:
      "A dedicated first-aid and rest station to provide medical attention, rest beds for unwell students, first-aid care, and continuous health monitoring.",
    features: [
      "Resting beds with clean linens & curtains",
      "First aid supplies and health record kits",
      "Hygiene and health reminder posters",
      "Quiet, caring recovery space",
    ],
  },
  {
    id: "guidance",
    name: "Guidance & Counseling Center",
    category: "support",
    tag: "Student Welfare",
    image: "/images/campus-guidance-office.jpg",
    description:
      "A private, caring space where learners receive one-on-one counsel, emotional encouragement, peer mediation, and college/career path planning in complete confidence.",
    features: [
      "Private consultation consultation desks",
      "Warm counseling ambiance with painted murals",
      "Career advising & college entrance test prep",
      "Safe space adhering to Child Safeguarding",
    ],
  },
  {
    id: "info-desk",
    name: "Front Lobby & Information Desk",
    category: "support",
    tag: "Parent Services",
    image: "/images/campus-information-desk.jpg",
    description:
      "The front-of-house greeting station bearing the official VSOP seal, ready to assist families with enrollment, transcript requests, payment inquiries, and campus tours.",
    features: [
      "Front-desk greeting station with school crest",
      "Admissions, registrar & enrollment processing",
      "Direct coordinator appointments for parents",
      "Safe visitor sign-in and security logging",
    ],
  },
  {
    id: "admin-office",
    name: "School Administrative Office",
    category: "support",
    tag: "Administration",
    image: "/images/campus-admin-office.jpg",
    description:
      "The central administrative hub managing school records, student credentials, faculty coordination, and academic administration.",
    features: [
      "Registrar archives & student records",
      "Administrative faculty workstations",
      "Document notarization & certification desk",
      "Quiet conference space for parent meetings",
    ],
  },
];

export default function Campus() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "classrooms" | "support" | "life"
  >("all");
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
    null,
  );

  const filteredFacilities =
    activeCategory === "all"
      ? facilities
      : facilities.filter((f) => f.category === activeCategory);

  return (
    <>
      <section className="campus-section section-pad">
        <div className="container campus-grid">
          <Reveal>
            <div className="campus-photo-wrap campus-photo-wrap--static">
              <div className="campus-photo-stack">
                <img
                  src="/images/campus-hero-exterior.jpg"
                  alt="Village School of Parkwoods campus building in Parkwood Hills"
                  loading="eager"
                />
              </div>
              <div className="campus-tag">
                <span>Parkwood Hills</span>
                <strong>Our Campus Home</strong>
              </div>
              <div className="campus-doodle" aria-hidden="true">
                ↗
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="campus-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot green-dot" /> Spaces that support growth
              </p>
              <BlurText
                as="h2"
                text="Little moments. Big becoming."
                delay={55}
                animateBy="words"
                className="page-blur-title"
              />
              <p>
                Nestled inside the quiet Parkwood Hills community in Cainta, Rizal,
                our campus gives learners a secure, tree-lined sanctuary to think,
                create, collaborate, and grow.
              </p>
              <div className="location-line">
                <MapPin size={18} />
                <div>
                  <strong>Find us in Parkwood Hills</strong>
                  <span>
                    Block 6 Lot 8, Durian St., Violago Homes, Parkwood Hills,
                    Brgy. San Isidro, Cainta, Rizal
                  </span>
                </div>
              </div>
              <div className="hero-actions" style={{ marginTop: "1.8rem" }}>
                <Link href="/contact" className="primary-button">
                  Schedule a campus visit <ArrowUpRight size={16} />
                </Link>
                <a
                  href="#facilities"
                  className="text-button"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("facilities")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse facilities <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facilities Showcase Section */}
      <section id="facilities" className="section-pad bg-cream">
        <div className="container">
          <div className="section-heading-row section-heading-row--light">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot coral-dot" /> Real Campus Spaces
              </p>
              <h2>
                Explore our
                <br />
                <span>facilities.</span>
              </h2>
            </div>
            <div>
              <p>
                Every room at VSOP has been shaped around student welfare, hands-on
                learning, and community. Take an authentic look inside our campus.
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="campus-filter-bar">
            {[
              { id: "all", label: "All Facilities" },
              { id: "classrooms", label: "Classrooms & Labs" },
              { id: "support", label: "Student Care & Offices" },
              { id: "life", label: "Campus Life & Gatherings" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`campus-filter-btn${
                  activeCategory === tab.id ? " active" : ""
                }`}
                onClick={() =>
                  setActiveCategory(
                    tab.id as "all" | "classrooms" | "support" | "life",
                  )
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              className="facility-cards-grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {filteredFacilities.map((facility) => (
                <motion.article
                  key={facility.id}
                  layout
                  className="facility-card"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedFacility(facility)}
                >
                  <div className="facility-img-wrapper">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      loading="lazy"
                    />
                    <div className="facility-badge">{facility.tag}</div>
                    <div className="facility-overlay">
                      <span className="facility-overlay-action">
                        <Eye size={16} /> View details
                      </span>
                    </div>
                  </div>
                  <div className="facility-content">
                    <h3>{facility.name}</h3>
                    <p>{facility.description}</p>
                    <ul className="facility-feature-tags">
                      {facility.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={12} /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Campus Map & Directions Info */}
      <section className="about-section section-pad">
        <div className="container">
          <div className="about-grid">
            <div className="section-intro">
              <p className="eyebrow">
                <span className="eyebrow-dot yellow-dot" /> Visiting VSOP
              </p>
              <h2>
                Getting to <span>Parkwood Hills.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                Our campus is safely nestled within a gated residential
                neighborhood, giving students a peaceful environment free from
                highway noise and urban hazards.
              </p>

              <div className="campus-info-boxes">
                <div className="campus-info-box">
                  <div className="info-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong>Campus Address</strong>
                    <p>
                      Block 6 Lot 8, Durian St., Violago Homes, Parkwood Hills,
                      Barangay San Isidro, Cainta, Rizal
                    </p>
                  </div>
                </div>

                <div className="campus-info-box">
                  <div className="info-icon">
                    <Compass size={22} />
                  </div>
                  <div>
                    <strong>Neighborhood Access</strong>
                    <p>
                      Accessible through the Parkwood Hills main entrance. Safe
                      parking and visitor check-in at the security gate.
                    </p>
                  </div>
                </div>

                <div className="campus-info-box">
                  <div className="info-icon">
                    <Info size={22} />
                  </div>
                  <div>
                    <strong>Visiting Guidelines</strong>
                    <p>
                      Parents and guardians are warmly welcomed during school
                      office hours (Monday to Friday, 7:00 AM – 5:00 PM). Please
                      present a valid ID at the Information Desk.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <Link href="/contact" className="primary-button">
                  Book a guided tour <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedFacility}
        onOpenChange={(open) => {
          if (!open) setSelectedFacility(null);
        }}
      >
        <DialogContent className="facility-dialog max-w-2xl gap-0 overflow-hidden p-0 sm:max-w-2xl">
          {selectedFacility && (
            <>
              <div className="facility-modal-img">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.name}
                />
                <span className="facility-modal-tag">
                  {selectedFacility.tag}
                </span>
              </div>
              <div className="facility-modal-body p-6">
                <DialogHeader>
                  <p className="eyebrow">
                    <span className="eyebrow-dot green-dot" /> VSOP Campus Life
                  </p>
                  <DialogTitle className="font-[family-name:Bricolage_Grotesque] text-3xl tracking-tight text-[#123e31]">
                    {selectedFacility.name}
                  </DialogTitle>
                  <DialogDescription className="modal-desc text-base">
                    {selectedFacility.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="modal-features-list">
                  <strong>Facility Highlights:</strong>
                  <ul>
                    {selectedFacility.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="feature-bullet" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-actions">
                  <Link
                    href="/contact"
                    className="primary-button"
                    onClick={() => setSelectedFacility(null)}
                  >
                    Ask about this facility <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
