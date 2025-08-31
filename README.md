# Sahara – AI-Powered Mental Wellness (Frontend)

A modern, calming, and responsive SPA for Indian youth, built with React and Tailwind CSS. This codebase includes a public landing experience and an authenticated dashboard shell with mock API functions.

## Tech Stack
- React 18 + React Router 6
- TypeScript + Vite
- Tailwind CSS 3

## Getting Started

1. Install dependencies
   ```bash
   pnpm install
   ```
2. Run the development server
   ```bash
   pnpm dev
   ```
3. Build for production
   ```bash
   pnpm build && pnpm start
   ```

## Structure
- client/pages – Route components (Landing, Login, Signup, Dashboard pages)
- client/components/sahara – Reusable UI (Navbar, Footer, Chat, etc.)
- client/lib/api-mock.ts – Mock API helpers (sendMessageToAI, saveJournalEntry)

## Notes
- Links under Dashboard are implemented; most pages are placeholders for now. Ask to expand any section (Journal, Resources, My Journey, Settings) when ready.
- Color palette: sky-300 (primary), emerald-200 (secondary), orange-200 (accent), gray-50 background, gray-800 text.
