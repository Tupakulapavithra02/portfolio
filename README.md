# Pavithra Tupakula — Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a **Frozen / Ice** theme with animated effects throughout.

**Live at:** [pavithratupakula.dev](https://pavithratupakula.dev) <!-- update with your actual URL -->

---

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | Resend + Express |

---

## Features

### Frozen / Ice Theme
- Deep navy + blue radial gradient background
- Animated snowflakes drifting across the page
- Ambient glow blobs for depth
- `ice-card` glassmorphism cards with shimmer-on-hover sweep
- Ice shimmer text gradient on the hero name

### Hero Section
- Animated name with Olaf (☃️) snowman next to the title
- Subtitle and social media links (GitHub, LinkedIn, Email)
- Reduced spacing between social links and the Summary section

### Sections
- **Summary** — brief professional bio card
- **Skills** — 6 category grid with animated skill tags
- **Projects** — project cards with cover images, frozen tint overlay, and zoom-on-hover
- **Experience & Education** — alternating timeline with a curved animated ice trail (wavy SVG path, sparkle dots, shimmer orb)
- **Certifications & Awards** — clickable cards that open certificate pages in a new tab
- **Resume** — download button for PDF resume
- **Contact** — contact form with sparkling ice-crystal effect on input hover

### Interactivity
- **Sparkling text boxes** — hovering over any contact form field spawns animated ice-crystal sparkles (`✦ ✧ ❄ ❅`) that fade out
- **Frozen glass hover** on form inputs — icy glow border and backdrop blur on hover
- **Project card images** — each project has a relevant cover image with a frozen blue overlay and ice-shimmer sweep on hover
- **Clickable certifications** — Prompt Design in Vertex AI and MTA Python badges link directly to Credly certificate pages

---

## Project Images

| Project | Image Source |
|---|---|
| CorroSight | Dark circuit board — Unsplash |
| Plant Leaf Disease Detection | Succulent/agave macro — Unsplash |
| Suicide Analysis & Prevention | Mental health visualization — Unsplash |
| Real-Time NER on Reddit | Abstract light streams — Unsplash |
| Stock Price Prediction | Financial trading charts — Unsplash |

---

## Certifications with Links

| Certificate | Link |
|---|---|
| Prompt Design in Vertex AI Skill Badge | [Credly](https://www.credly.com/badges/46966254-0004-4ee7-a4bf-f8c2cbe4b75f/public_url) |
| MTA: Introduction to Programming Using Python | [Credly](https://www.credly.com/badges/741be0fe-917c-4d53-ae0f-09a6b9d791ec/public_url) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) account and API key

### Install

```bash
npm install
```

### Configure environment

Create a `.env` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### Run locally

```bash
npm run dev
```

This starts both the Vite dev server (`localhost:5173`) and the Express API server (`localhost:3001`) concurrently.

### Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

---

## Project Structure

```
├── FrozenPortfolio.tsx    # Main component — all sections + frozen theme
├── server/
│   └── index.ts           # Express API — contact form → Resend
├── src/
│   ├── main.tsx           # React entry point (renders FrozenPortfolio)
│   ├── index.css          # Tailwind + frozen theme CSS (ice-card, snowflakes, sparkles)
│   └── vite-env.d.ts
├── public/
│   └── Pavithra_Tupakula_Job.pdf   # Resume download
├── .env                   # API keys (never committed)
├── vite.config.ts
└── tsconfig.json
```

---

## Contact

- **Email:** pavithratupakula1@gmail.com
- **LinkedIn:** [linkedin.com/in/tupakula-pavithra-512004244](https://www.linkedin.com/in/tupakula-pavithra-512004244/)
- **GitHub:** [github.com/Tupakulapavithra02](https://github.com/Tupakulapavithra02)
