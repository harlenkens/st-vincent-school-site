# Village School of Parkwoods (VSOP) — Official Website

Modern, responsive multi-page web portal for **Village School of Parkwoods** (VSOP), a private basic and secondary educational institution in Cainta, Rizal / Pasig, Philippines, founded in 1997.

---

## 🌟 Overview & Educational Framework

Village School of Parkwoods is built upon the **4H Educational Philosophy**:
- 🧠 **Head**: Academic rigor, analytical inquiry, and foundational knowledge.
- ❤️ **Heart**: Moral conviction, emotional well-being, and Christian character formation.
- 🤝 **Hand**: Practical life skills, laboratory application, vocational competencies, and creative craftsmanship.
- 🌐 **Human Relations**: Collaborative dialogue, leadership, community service, and civic empathy.

The institution implements the **DepEd MATATAG Curriculum** for basic education and offers four dedicated **Senior High School (SHS) Strands** (HUMSS, ABM, GAS, TVL), participating in the **DepEd Senior High School Voucher Program** and **PEAC / ESC (Educational Service Contracting)** tuition subsidies.

---

## 🧭 Multi-Page Route Architecture

The site was transitioned from a monolithic one-page scroll into a clean, route-based web application with smooth page transitions and responsive navigation:

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Welcoming hero with authentic classroom photography, 4H pillar highlights, campus preview, and the 3-Term School Year rhythm. |
| `/about` | **Our School** | 1997 founding heritage, Vision & Mission, detailed 4H pedagogical methodology, timeline of growth, and scholastic track record (UPCAT, Regional Science HS, NCAE). |
| `/curriculum` | **Curriculum** | DepEd MATATAG integration, 8 core subject disciplines, Senior High Academic & TVL Strands, DepEd Voucher details, and learning laboratory highlights. |
| `/parent-guide` | **Parent Guide** | 5-step parent orientation journey, assembly photo gallery, and interactive policy accordions (attendance, safety, health protocols, and PTC schedules). |
| `/campus` | **Campus & Facilities** | Filterable interactive facility showcase with high-resolution photos, lightbox detail modal, campus map, and neighborhood access guide. |
| `/contact` | **Contact & Admissions** | Interactive inquiry form with validation, admissions desks by grade level, office hours, and real administrative office photos. |

---

## 📸 Authentic Visual Assets

All visual assets represent real, on-campus facilities and academic life sourced directly from VSOP's institutional records, calibrated and cropped with zero slide border artifacts. Filenames are semantically aligned to their target pages:

| Page / Section | Asset Name | Location | Facility / Context |
|---|---|---|---|
| **Home** | `home-hero-classroom.jpg` | `/public/images/` | Active classroom setting with teacher-student instruction |
| **Home** | `home-campus-exterior.jpg` | `/public/images/` | Multi-story campus facade, main gate, and arrival court |
| **About** | `about-school-seal.jpg` | `/public/images/` | High-fidelity institutional seal and crest |
| **About** | `about-philosophy-wall.jpg` | `/public/images/` | Authentic hand-painted Philosophy, Vision, Mission, and Goals mural wall |
| **Curriculum** | `curriculum-science-lab.jpg` | `/public/images/` | Science discovery laboratory with microscopes and apparatus |
| **Curriculum** | `curriculum-computer-lab.jpg` | `/public/images/` | Air-conditioned digital workstation computer laboratory |
| **Curriculum** | `curriculum-tle-kitchen.jpg` | `/public/images/` | Technology & Livelihood Education (TLE) culinary / practical kitchen |
| **Parent Guide** | `parent-guide-orientation.jpg` | `/public/images/` | Parents' orientation assembly in the school activity hall |
| **Campus** | `campus-hero-exterior.jpg` | `/public/images/` | Full campus facade, entrance pavilion, and arrival court |
| **Campus** | `campus-instructional-room.jpg`| `/public/images/` | Well-ventilated classroom with armchairs and whiteboard |
| **Campus** | `campus-science-lab.jpg` | `/public/images/` | Natural science laboratory with experiment benches and glassware |
| **Campus** | `campus-computer-lab.jpg` | `/public/images/` | Modern computer laboratory with networked desktop PCs |
| **Campus** | `campus-library.jpg` | `/public/images/` | Learning Resource Center with reference volumes and reading tables |
| **Campus** | `campus-tle-room.jpg` | `/public/images/` | Dedicated TLE skills laboratory with culinary and life-skills stations |
| **Campus** | `campus-activity-hall.jpg` | `/public/images/` | Multi-purpose indoor activity hall for ceremonies and PE |
| **Campus** | `campus-canteen.jpg` | `/public/images/` | Clean student dining hall and nutritious food service |
| **Campus** | `campus-clinic.jpg` | `/public/images/` | Health & dental clinic staffed by licensed medical personnel |
| **Campus** | `campus-guidance-office.jpg` | `/public/images/` | Guidance & counseling office for career and personal support |
| **Campus** | `campus-information-desk.jpg`| `/public/images/` | Admissions information desk and registrar service counter |
| **Campus** | `campus-admin-office.jpg` | `/public/images/` | Administrative office for inquiries, student records, and principal |
| **Contact** | `contact-information-desk.jpg`| `/public/images/` | Front-office inquiry and registrar intake desk |
| **Contact** | `contact-admin-office.jpg` | `/public/images/` | Administrative headquarters for parent consultations |

---

## 🎨 Design System & Palette

The design reflects an established, warm, and trustworthy academic environment:

- **Cream Background**: `#f7f2e8` (`bg-[#f7f2e8]`) — Soft, parchment-inspired reading canvas.
- **Deep Ink**: `#18241f` (`text-[#18241f]`) — High-contrast legibility for headings and body copy.
- **Forest Green**: `#0f5a45` (`bg-[#0f5a45]`, `text-[#0f5a45]`) — Primary institutional brand color representing growth and stability.
- **School Yellow**: `#f4c531` (`bg-[#f4c531]`) — Energetic accent color for highlights, badges, and CTAs.
- **Warm Coral**: `#e66550` (`bg-[#e66550]`) — Secondary accent for alerts, dates, and active tags.
- **Slate Blue**: `#6c8fa6` (`bg-[#6c8fa6]`) — Subtle tertiary accent for academic discipline cards.

### Typography
- **Headings**: `Bricolage Grotesque`, display serif-like warmth and character.
- **Body & Data**: `DM Sans`, clean humanist sans-serif optimized for multi-device readability.

---

## 📁 Project Structure

```
st-vincent-school-site/
├── client/                     # Frontend client application
│   ├── index.html              # HTML entry point with web font imports
│   ├── public/
│   │   └── images/             # Page-aligned campus photography and slide archives
│   │       ├── home-*.jpg      # Homepage hero & campus exterior previews
│   │       ├── about-*.jpg     # School seal & philosophy mural wall
│   │       ├── curriculum-*.jpg# Applied laboratories (science, IT, culinary)
│   │       ├── parent-guide-*.jpg # Orientation assembly & community hall
│   │       ├── campus-*.jpg    # 12 distinct clean campus facilities
│   │       └── contact-*.jpg   # Admissions desk & admin consultation office
│   └── src/
│       ├── App.tsx             # Route definitions (Wouter)
│       ├── main.tsx            # React root mounting
│       ├── index.css           # Tailwind CSS v4 directives & theme styles
│       ├── const.ts            # Global client constants
│       ├── components/
│       │   ├── Layout.tsx      # Persistent layout (announcement, nav, footer)
│       │   ├── ErrorBoundary.tsx
│       │   ├── Map.tsx         # Interactive campus location map
│       │   └── ui/             # Radix-UI accessible design system primitives
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── hooks/              # Custom React hooks (useMobile, etc.)
│       ├── lib/
│       │   └── utils.ts        # Class merging and utility helpers
│       └── pages/
│           ├── Home.tsx        # Homepage (Hero, 4H, terms, campus teaser)
│           ├── About.tsx       # School history, 4H pillars, achievements
│           ├── Curriculum.tsx   # MATATAG framework, SHS strands, vouchers
│           ├── ParentGuide.tsx # Parent roadmap, photo gallery, policies
│           ├── Campus.tsx      # Facilities gallery with filter & modal preview
│           ├── Contact.tsx     # Contact details, admissions desk & inquiry form
│           └── NotFound.tsx    # 404 error page
├── server/
│   └── index.ts                # Express backend server serving static client
├── shared/
│   └── const.ts                # Shared constants between server and client
├── package.json                # Project dependencies and script runner
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler build pipeline
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- pnpm or npm

### Installation
```bash
# Clone the repository
git clone https://github.com/nyetrusky/st-vincent-school-site.git
cd st-vincent-school-site

# Install dependencies
pnpm install
# or
npm install
```

### Running Locally
```bash
# Start the Vite development server
npm run dev
# or
npx vite --host
```
The application will be accessible at `http://localhost:5173`.

### Type Checking & Linting
```bash
# Run TypeScript compilation check
npm run check
# or
npx tsc --noEmit
```

### Production Build
```bash
# Build the client for production
npm run build
# or
npx vite build
```
Optimized static assets will be output to the `dist/` directory.

---

## 📜 License
This project is licensed under the MIT License.
