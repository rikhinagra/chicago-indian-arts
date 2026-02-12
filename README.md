# Chicago Indian Arts

A premium website for **Chicago Indian Collective Arts** — celebrating and preserving the rich cultural heritage of India through literature, fashion, and photography.

**Live URL:** [chicagoindianarts.org](https://chicagoindianarts.org) *(coming soon)*

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **CMS:** Payload CMS 3.x
- **Styling:** Tailwind CSS v4 + Inline Styles
- **Animations:** Motion (Framer Motion)
- **Smooth Scroll:** Lenis
- **Fonts:** Cormorant Garamond + Montserrat (Google Fonts)
- **Icons:** Lucide React
- **Media CDN:** Cloudinary

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Dark | `#1a1a1a` | Backgrounds, text |
| Accent Gold | `#d4af37` | Highlights, labels |
| Accent Terracotta | `#cd5c5c` | CTAs, buttons |
| Cream | `#faf8f3` | Section backgrounds |
| White | `#ffffff` | Text on dark |
| Text Dark | `#2d2d2d` | Body text |
| Text Light | `#666666` | Secondary text |

## Homepage Sections

1. **Hero** — Full-screen video background with countdown timer
2. **Intro** — Mission statement and welcome message
3. **Programs** — Vaarta (Literature), Prasang (Fashion), Varnam (Photography)
4. **Events Timeline** — Upcoming events with dates
5. **Highlights Gallery** — Past event photo gallery with hover overlays
6. **Featured Speakers** — Speaker profiles with circular images
7. **Stats Counters** — Animated number counters
8. **Founder** — About the founder, Jigar Shah
9. **CTA** — Registration call-to-action
10. **Newsletter** — Email signup form
11. **Sponsors** — Sponsor logos with hover effects
12. **Footer** — Navigation links, social media

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/chicago-indian-arts.git

# Navigate to project
cd chicago-indian-arts

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    (frontend)/        # Public-facing pages
      page.tsx          # Homepage
      vaarta/           # Vaarta program page
      prasang/          # Prasang program page
      varnam/           # Varnam program page
    (payload)/          # CMS admin routes
    globals.css         # Global styles & responsive breakpoints
    layout.tsx          # Root layout
  components/
    home/               # Homepage section components
      HeroSection.tsx
      IntroSection.tsx
      ProgramsGrid.tsx
      EventsTimeline.tsx
      HighlightsGallery.tsx
      FeaturedSpeakers.tsx
      StatsCounters.tsx
      FounderSection.tsx
      CTASection.tsx
      NewsletterSignup.tsx
      SponsorsSection.tsx
    layout/             # Layout components
      Navbar.tsx
      Footer.tsx
    ui/                 # Reusable UI components
      Button.tsx
      FadeInSection.tsx
      SectionTag.tsx
      AnimatedCounter.tsx
  collections/          # Payload CMS collections
  globals/              # Payload CMS globals
  payload.config.ts     # Payload CMS configuration
public/
  images/
    founder.webp        # Founder portrait
```

## Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| > 1200px | Desktop |
| <= 1200px | Tablet |
| <= 768px | Mobile |
| <= 480px | Small Mobile |

## Current Status

### Phase 1 (Complete)
- Homepage design and development
- Full responsiveness across all screen sizes
- Video hero background with Cloudinary CDN
- Scroll animations and smooth scrolling
- Mobile hamburger menu with dark overlay
- Countdown timer for upcoming events
- Sponsor section with SVG logos

### Phase 2 (Upcoming)
- Replace stock images with real event photos
- Build inner pages (About, Contact, Donate, Register)
- Connect newsletter form to email service
- Add real social media links
- SEO optimization and meta tags

## License

All rights reserved. Chicago Indian Collective Arts.
