# Asit Mandi – Developer Portfolio

A modern, fully responsive animated portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

## Features

- **Hero** – Typing effect, particle background, CTA buttons
- **About** – Bio and animated skill progress bars (JavaScript, React, Node.js, MongoDB)
- **Projects** – 3–4 project cards with hover scale/glow, tech badges, GitHub & Live Demo
- **Skills** – Animated grid (Frontend, Backend, Tools) with hover effects
- **Contact** – Animated form and social links (LinkedIn, GitHub, Email)
- Dark theme with blue/purple gradients, glassmorphism, smooth scroll, loading animation
- SEO via `react-helmet-async`, responsive layout

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- react-type-animation
- react-helmet-async
- react-router-dom

## Setup

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Customize

- **Content**: Edit section files in `src/sections/` and project data in `Projects.jsx`.
- **Links**: Update GitHub, Live Demo, LinkedIn, and email in `Projects.jsx` and `Contact.jsx`.
- **SEO**: Adjust meta tags and canonical URL in `index.html` and `App.jsx` (Helmet).
