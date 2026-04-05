# Pavithra Tupakula — Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a contact form powered by Resend.

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

- Animated hero with custom magnetic cursor
- Dark / light mode toggle
- Skills, Projects, Experience & Education sections
- Certifications & Awards
- Resume download
- Contact form — submissions delivered to inbox via Resend

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
├── Portfolio.tsx          # Main component (all sections)
├── server/
│   └── index.ts           # Express API — contact form → Resend
├── src/
│   ├── main.tsx           # React entry point
│   ├── index.css          # Tailwind + design tokens
│   └── vite-env.d.ts
├── .env                   # API keys (never committed)
├── vite.config.ts
└── tsconfig.json
```

---

## Contact

- **Email:** pavithratupakula1@gmail.com
- **LinkedIn:** [linkedin.com/in/tupakula-pavithra-512004244](https://www.linkedin.com/in/tupakula-pavithra-512004244/)
- **GitHub:** [github.com/Tupakulapavithra02](https://github.com/Tupakulapavithra02)
