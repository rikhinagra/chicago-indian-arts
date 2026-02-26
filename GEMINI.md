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
    - **Stripe:** Payments and donations
    - **Resend:** Email service
    - **Telegram:** Notifications/Alerts
    - **Google Sheets:** Data logging/syncing
    - **Cloudinary:** Media CDN

## Project Structure

- `src/app/(frontend)/`: Public-facing Next.js pages and layouts.
- `src/app/(payload)/`: Payload CMS admin panel routes.
- `src/collections/`: Payload CMS collection definitions (Users, Events, Programs, etc.).
- `src/globals/`: Payload CMS global settings (SiteSettings).
- `src/components/`:
    - `home/`: Homepage-specific sections (Hero, Programs, Timeline, etc.).
    - `layout/`: Shared layout components (Navbar, Footer).
    - `ui/`: Reusable primitive components (Button, FadeInSection, etc.).
    - `providers/`: Context providers (Lenis, etc.).
    - `seo/`: SEO and JSON-LD components.
- `src/lib/`: Integration logic and utility functions.
- `public/`: Static assets (images, videos).

## Key Commands

- `npm run dev`: Starts the development server for both Next.js and Payload CMS.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run generate:types`: Generates TypeScript types based on Payload collections.
- `npm run postbuild`: Generates the sitemap.

## Development Conventions

### Styling
- **Tailwind CSS v4:** Primary styling method. Custom theme variables are defined in `src/app/globals.css`.
- **Responsive Design:** Specific overrides are often handled via `data-section` attributes targeted in `globals.css` across four main breakpoints:
    - Desktop: `> 1200px`
    - Tablet: `<= 1200px`
    - Mobile: `<= 768px`
    - Small Mobile: `<= 480px`

### Content Management
- **Payload CMS:** All dynamic content (Events, Speakers, Blog Posts, etc.) should be managed through the Payload admin panel at `/admin`.
- **Types:** Always run `npm run generate:types` after modifying Payload collections to keep `src/payload-types.ts` in sync.

### Smooth Scrolling
- **Lenis:** Integrated via `LenisProvider`. Ensure that any full-page scrolling behavior is compatible with Lenis.

### Animations
- **Motion:** Used for scroll-triggered reveals and interactive elements. Prefer `FadeInSection` for consistent entry animations.

## SEO & Metadata
- **JSON-LD:** Integrated via components in `src/components/seo/JsonLd.tsx`.
- **Metadata:** Managed via Next.js Metadata API in layouts and pages.
- **Sitemap:** Automatically generated during the build process.
