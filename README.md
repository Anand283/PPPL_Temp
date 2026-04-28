# PP Industries Pvt. Ltd. — Digital Brochure

B2B single-page brochure for a corrugated cardboard manufacturer. Built with React + Vite + Tailwind CSS. Bulk orders only — no e-commerce.

---

## Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS 3
- **Icons:** lucide-react
- **Fonts:** Inter (body), Roboto Mono (Market Wall terminal)
- **Deployment:** Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
website_pppl/
├── index.html                  # Entry HTML, Google Fonts preload
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                # ReactDOM entry point
    ├── App.jsx                 # SPA shell — assembles all sections
    ├── index.css               # Tailwind directives, smooth scroll
    └── components/
        ├── Navbar.jsx          # Sticky nav, mobile hamburger
        ├── HeroSection.jsx     # Full-viewport hero, stats grid
        ├── MarketWall.jsx      # Dark terminal — live price ticker
        ├── FacilitiesMatrix.jsx# Tabbed dual-facility spec grid
        ├── LogisticsTrust.jsx  # Award, fleet, compliance badges
        ├── ContactGateway.jsx  # 3-step funnel, phone & email CTAs
        └── Footer.jsx          # Dark footer
```

---

## Sections

| Section | Component | Anchor |
|---------|-----------|--------|
| Hero | `HeroSection.jsx` | `#hero` |
| Live Market Index | `MarketWall.jsx` | `#market` |
| Dual-Facility Capabilities | `FacilitiesMatrix.jsx` | `#capabilities` |
| Logistics & Trust | `LogisticsTrust.jsx` | `#logistics` |
| Contact / Order Gateway | `ContactGateway.jsx` | `#contact` |

---

## Before Going Live

Replace all placeholder values:

| Placeholder | File(s) | Replace with |
|-------------|---------|--------------|
| `+91 XX XXXX XXXX` | `ContactGateway.jsx`, `Footer.jsx` | Real phone number |
| `sales@ppindustries.in` | `ContactGateway.jsx`, `Footer.jsx` | Real email address |
| `PP Industries Pvt. Ltd.` | `Navbar.jsx`, `Footer.jsx` | Actual company name |
| `Bhiwandi, Maharashtra` | `FacilitiesMatrix.jsx`, `Footer.jsx` | Real plant address |
| `Est. 30+ Years` | `HeroSection.jsx` | Actual founding year |

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — no configuration required.
4. Click **Deploy**.

Every push to `main` triggers an automatic redeploy.

---

## Design System

| Token | Value |
|-------|-------|
| Primary dark | `#111111` |
| Off-white | `#F9F9F9` |
| Industrial Yellow (accent) | `#FFD700` |
| Kraft Brown (secondary) | `#C19A6B` |
| Terminal background | `#0a0a0a` |
| Terminal green (price up) | `#00FF41` |
| Terminal red (price down) | `#FF5555` |

Brutalist UI convention: `border-2 border-[#111111]` + `box-shadow: 4px 4px 0 #111111`.

---

## Notes

- The Market Wall prices are **simulated** for demonstration. Wire up a real commodity API (e.g. MCX data feed) to replace the `setInterval` simulation in `MarketWall.jsx`.
- This is a **static brochure** — no backend, no database, no checkout.
- All enquiries are routed to phone/email. There is intentionally no contact form to filter out non-bulk leads.
