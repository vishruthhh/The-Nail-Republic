# The Nail Republic — Salon Landing Page

A single-page React website for **The Nail Republic**, a premium unisex salon with two branches in Kerala (Kochi & Muvattupuzha). Built as a fast, conversion-focused site for a real business — no CMS, no backend, just clean componentized React.

## Overview

The site is data-driven: services, pricing, FAQs, and branch details are defined as plain JS arrays/objects at the top of the component, so content can be updated without touching markup. All styling is scoped, dependency-free CSS-in-JS — no external UI framework — built around a custom dark/gold design system.

## Features

- **Multi-branch logic** — dynamic Call / WhatsApp / Directions actions that resolve to the correct branch (Kochi or Muvattupuzha) via inline state, not separate pages
- **WhatsApp-first CTAs** — direct `wa.me` deep links per branch
- **Interactive FAQ accordion** — accessible expand/collapse with `aria-expanded`
- **Embedded Google Maps** per location, styled to match the site's dark palette
- **Fully responsive** — custom mobile nav (hamburger + full-screen menu), fluid typography with `clamp()`, breakpoint-tuned grids
- **Data-driven content** — services, pricing tiers, and hours generated from config objects, not hardcoded JSX
- **Custom design system** — CSS variables for a consistent black/gold premium aesthetic, image toning filters to unify photography from different sources

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React (function components, hooks) |
| Styling | Custom CSS-in-JS (scoped, no Tailwind/Bootstrap) |
| Icons | `react-icons` (WhatsApp), custom inline SVGs |
| Maps | Google Maps Embed API |
| State | React `useState` (menu, FAQ, active CTA) |
| Fonts | Playfair Display + Inter (Google Fonts) |

## Skills Demonstrated

- Component-driven architecture with clear separation of config vs. markup
- Responsive, mobile-first CSS authored from scratch (no framework dependency)
- Practical UX patterns for local business sites: click-to-call, WhatsApp deep links, map embeds
- Accessible interactive UI (accordion, keyboard/ARIA support)
- Attention to visual/brand consistency across a real client project

## Getting Started

```bash
git clone https://github.com/<your-username>/the-nail-republic.git
cd the-nail-republic
npm install
npm start
```

## Project Structure

```
src/
├── components/
│   ├── Insta.jsx
│   ├── Whatsapp.jsx
│   └── Call.jsx
├── assets/          # branch photos, logo, service images
└── TheNailRepublicSimple.jsx   # main page component
```

## Author

Vishruth Arulselvam | Veena G


## License

This project was built as client work for The Nail Republic. Code structure is shared here for portfolio purposes.
