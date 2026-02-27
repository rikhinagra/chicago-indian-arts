# Chicago Indian Arts - Project Context

This project is a premium website for **Chicago Indian Collective Arts**, celebrating and preserving Indian cultural heritage through literature, fashion, and photography.

## Technical Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **CMS:** Payload CMS 3.x (Headless)
- **Database:** MongoDB (via Mongoose)
- **Styling:** Tailwind CSS v4 + Inline Styles for specific overrides
- **Animations:** Motion (Framer Motion)
- **Smooth Scroll:** Lenis
- **Forms:** React Hook Form + Zod
- **Integrations:**
    - **Stripe:** Payments and donations (In Progress)
    - **Resend:** Email service (In Progress)
    - **Telegram:** Notifications/Alerts (In Progress)
    - **Google Sheets:** Data logging/syncing (In Progress)
    - **Cloudinary:** Media CDN (Active)

## Project Structure (Rebranded)

- `src/app/(frontend)/`: Public-facing Next.js pages and layouts.
    - `/literature-festival`: Formerly /vaarta
    - `/fashion-week`: Formerly /prasang
    - `/photography-festival`: Formerly /varnam
- `src/app/(payload)/`: Payload CMS admin panel routes.
- `src/collections/`: Payload CMS collection definitions.
- `src/components/`:
    - `home/`: Homepage-specific sections.
    - `layout/`: Navbar (with Accordion logic) and Footer.
    - `ui/`: Reusable primitive components.
- `src/lib/`: Integration logic and utility functions.

## Key Development Decisions

### 1. Rebranding Purge
- All nomenclature transitioned from old names (Vaarta, Prasang, Varnam) to descriptive titles.
- Directory names and URLs updated for SEO optimization.
- Internal logic IDs in CMS and forms updated to `literature`, `fashion`, and `photography`.

### 2. UI Stability
- **Hydration:** Navbar background and colors are locked to `mounted` state to prevent server/client mismatches.
- **Responsive Typography:** Program card titles and hero labels use proportional scaling across 1200px, 768px, and 480px breakpoints.
- **Navbar:** Implemented Accordion logic for mobile to ensure only one dropdown is open at a time.

### 3. Visuals
- Team images transitioned from grayscale to full color.
- High-contrast text shadows and semibold weights applied to Navbar for readability over video backgrounds.

## Key Commands

- `npm run dev`: Starts the development server.
- `npm run build`: Builds for production (refreshes sitemap).
- `vercel --prod`: Deploys to live environment.
