# HealthHub Medical Solutions

Production-quality React website for HealthHub Medical Solutions, a South African workplace medical services company.

## Stack

- **React 19** with Vite
- **React Router DOM v7** for routing
- **Tailwind CSS** for styling
- **Lucide React** for icons
- Component-based, data-driven architecture

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

The dev server runs on `http://localhost:5173` by default.

## Project structure

```
src/
├── assets/          # Logo, images, icons
├── components/      # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── CTA.jsx
│   ├── ServiceCard.jsx
│   ├── FeatureCard.jsx
│   ├── BlogCard.jsx
│   ├── SectionTitle.jsx
│   └── Button.jsx
├── layouts/         # Page layout shells
│   └── MainLayout.jsx
├── pages/           # Route components
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Staffing.jsx
│   ├── EmergencyServices.jsx
│   ├── About.jsx
│   ├── Blog.jsx
│   └── Contact.jsx
├── data/            # Content data, single source of truth
│   ├── services.js
│   ├── staffing.js
│   ├── emergency.js
│   └── blog.js
├── router/          # React Router setup
│   └── AppRouter.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Routes

- `/` — Home
- `/services` — Services overview
- `/services/:slug` — Dynamic service detail page
- `/staffing` — Medical staffing
- `/emergency-services` — Event emergency medical
- `/about` — About HealthHub
- `/blog` — Blog index with category filter
- `/contact` — Contact form, details, map placeholder

## Adding a new service

Service detail pages are generated entirely from `src/data/services.js`. To add a new service:

1. Open `src/data/services.js`.
2. Add a new object to the `services` array with:
   - `slug`, `icon` (any Lucide icon name), `title`, `subtitle`
   - `overview` (paragraph)
   - `coreServices` (array of `{icon, title, description}`)
   - `specializedEvaluations` (array of strings)
   - `benefits` (array of `{icon, title, description}`)
   - `cta` `{title, description}`
3. The route `/services/your-slug` will work automatically.

## Design tokens

Defined in `tailwind.config.js`:

| Token | Hex |
| --- | --- |
| `primary` | `#12B7AE` |
| `dark` | `#352C31` |
| `peach` | `#FFF3EB` |
| `pink` | `#FFF8FB` |
| `border` | `#F1D9BF` |

Typography: **Manrope**, weights 400 / 500 / 600 / 700 / 800.

## What needs swapping before production

- Replace placeholder phone numbers, email, and address in `Footer.jsx` and `Contact.jsx`
- Add real images for hero sections and service detail pages (currently using placeholder SVGs)
- Wire the contact form's `onSubmit` to your form handler (Formspree, custom API, etc.)
- Embed real Google Maps in the contact page (currently a styled placeholder)
- Replace the SVG logo at `src/assets/logo.svg` with the real brand mark
- Update trust logos in `Home.jsx` with real client logos
- Replace blog post placeholder content with real articles

## Responsive breakpoints

Built mobile-first using Tailwind's defaults: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.

## Accessibility

- Semantic HTML, ARIA labels on navigation and decorative elements
- Focus-visible outlines via Tailwind `focus-visible:`
- `prefers-reduced-motion` respected globally
- Keyboard navigable mobile menu and forms

## Notes

Built as a scaffold. Content is reasonable placeholder copy in a South African occupational health voice. Swap for real client copy before launch.
