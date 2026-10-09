# VSOP Design Architecture

This document is the standard for building and evolving the Village School of Parkwoods website. Follow it for every page, component, and interaction so the product stays coherent as we ship.

---

## 1. Product intent

VSOP’s site must feel:

- **Warm and trustworthy** — a real school community, not a SaaS landing page
- **Clear under pressure** — parents scanning on phones during enrollment season
- **Alive, not noisy** — motion supports hierarchy; it never hides content

Every section should answer one parent question. If a block tries to do two jobs, split it.

---

## 2. Stack roles (do not blur these)

| Layer | Role | Source of truth |
|---|---|---|
| **React** | Structure, routing, state, composition | `client/src/pages`, `components` |
| **SCSS** | Brand layout, page composition, responsive behavior | `client/src/styles/*` |
| **Tailwind + shadcn** | Interactive primitives (forms, dialogs, tabs, accordion, buttons) | `components/ui/*`, `index.css` tokens |
| **Motion (`motion/react`)** | Page transitions, reveals, hover micro-interactions | `components/motion`, page-level usage |
| **React Bits** | Signature moments only (titles, magnets, counters) | `components/react-bits` |

Rules:

1. Prefer **SCSS** for page layout and brand look.
2. Prefer **shadcn** when the user is *doing* something (submit, filter, expand, open).
3. Prefer **Motion** for entrance/exit and feedback.
4. Prefer **React Bits** sparingly — one signature effect per viewport max.
5. Never leave text unreadable for the sake of animation (no stuck blur, no forever opacity 0).

---

## 3. Brand system

### Color tokens (SCSS + CSS variables)

| Token | Value | Use |
|---|---|---|
| Cream | `#f7f2e8` | Page canvas |
| Ink | `#18241f` | Body text |
| Forest | `#0f5a45` | Primary brand / CTAs |
| Forest deep | `#123e31` | Headings, header accents |
| Yellow | `#f4c531` | Highlights, seal, energy |
| Coral | `#e66550` | Emphasis / secondary accent |
| Slate | `#6c8fa6` | Tertiary academic accent |
| Card | `#fffdf8` | Surfaces |
| Border | `#dcd8ce` | Dividers |

### Typography

- **Display:** Bricolage Grotesque — headings, brand moments
- **Body:** DM Sans — paragraphs, UI labels, forms
- Heading scale should use `clamp()` so type never overflows small screens

### Radii & density

- Soft school language: large radii on cards/CTAs (`0.9rem`–`1.5rem`, pills for actions)
- Comfortable touch targets: **min 44px** height for interactive controls

---

## 4. Layout architecture

### Shell

```
Announcement bar
Sticky header (desktop links ≥ 900px / overlay menu < 900px)
Main (route content)
Footer
```

### Page recipe (every route)

1. **Hero / intro** — one eyebrow, one title, one short supporting line, one CTA group  
2. **Primary content sections** — each with one purpose  
3. **Proof / media** — real campus imagery when possible  
4. **Close / next step** — contact, visit, or handbook action  

### Grid rules

- Desktop: 1–2 column content grids
- ≤1024px: stack major two-column layouts
- ≤768px: single column for cards/lists
- Decorative absolute layers (notes, stickers, doodles) only at **≥1024px**
- Never let absolute badges create horizontal scroll (`overflow-x: clip` on document)

---

## 5. Responsive breakpoints

| Name | Width | Behavior |
|---|---|---|
| `sm` | 640px | Phone refinements |
| `md` | 768px | Single-column cards |
| `nav` | 900px | Desktop nav appears |
| `decorate` | 1024px | Floating decorations allowed |
| `lg+` | 1024px+ | Full brand composition |

Implementation lives in `styles/_variables.scss` mixins (`mq-up`, `mq-down`) and `styles/_responsive.scss`.

---

## 6. Navigation standard

### Desktop (≥900px)

- Inline text links + one solid CTA (“Plan a visit”)
- Active link gets yellow underline accent

### Mobile / tablet (<900px)

- Burger opens a **right slide-over overlay** (not an inline dropdown)
- Overlay includes:
  - brand lockup + close control
  - numbered links with short hints
  - hover/focus affordance + arrow motion
  - footer CTA (“Plan a visit”)
- Body scroll locks while open
- Close via X, backdrop, route change, Escape, or resize to desktop

---

## 7. Motion standard

### Allowed

- Page fade/slide on route change (short, ≤350ms)
- Scroll reveals / staggered cards
- CTA magnet on primary actions
- Overlay spring entrance
- Count-up for heritage stats

### Forbidden

- Effects that can leave content illegible
- More than one competing motion in the first viewport
- Hover-only essential information
- Large layout shifts from decorative layers on small screens

### Reduced motion

Respect `prefers-reduced-motion` for non-essential loops (scroll cue, ambient motion).

---

## 8. Component usage map

| Need | Use |
|---|---|
| Page title moment | `BlurText` (`eager`) |
| Section entrance | `Reveal` / `Stagger` |
| Card grids | `Stagger` + `StaggerItem` (`hoverLift` only on true cards) |
| Primary CTA polish | `Magnet` + branded button/link |
| Stats | `CountUp` |
| Policies / FAQs | shadcn `Accordion` |
| Strand switcher | shadcn `Tabs` |
| Facility details | shadcn `Dialog` |
| Forms | shadcn `Input`, `Label`, `Textarea`, `Select`, `Button` |
| Toasts | shadcn / sonner |

---

## 9. SCSS file architecture

```
styles/
  _variables.scss   # tokens + breakpoints + mixins
  _header.scss      # header + overlay navigation
  _site.scss        # page/section brand compositions
  _responsive.scss  # cross-page responsive corrections
  main.scss         # entry: variables → site → header → responsive
```

When adding a page:

1. Build structure in React
2. Style composition in `_site.scss` (or a new partial if a page grows large)
3. Put breakpoint fixes in `_responsive.scss`
4. Only then add Motion / React Bits accents

---

## 10. Definition of done (every UI change)

- [ ] Readable at 375 / 768 / 900 / 1280
- [ ] No horizontal overflow
- [ ] No overlapping text/controls (decorative layers only ≥1024)
- [ ] Burger hidden ≥900; overlay works <900
- [ ] Keyboard: focus visible, Escape closes overlay/dialog
- [ ] Touch targets ≥44px
- [ ] Animations never leave content stuck blurred/hidden
- [ ] One job per section; brand remains the hero on landing

---

## 11. Recommended build sequence for new work

1. Content + route structure  
2. SCSS composition (desktop)  
3. Responsive stacking + overflow pass  
4. shadcn interactions  
5. Motion / React Bits accents  
6. Accessibility pass  
7. Multi-device visual QA  

This order prevents “pretty but broken” pages.
