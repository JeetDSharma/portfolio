# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js, port 3000)
npm run build    # Production build (ESLint errors are ignored during build)
npm run lint     # Run ESLint
npm run start    # Start production server
```

There are no tests in this project.

## Architecture

Single-page portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

### Page structure

`app/page.tsx` → `AppShell` wraps everything with `Navbar` + content offset. Inside: `Hero` (above the fold, two-column grid) then `BodySection` (all scrollable sections).

`AppShell` applies `md:pl-[4.5rem]` to account for the fixed vertical sidebar (`Navbar` renders both a mobile top bar and a desktop left rail).

### Content data

**All portfolio copy lives in `lib/founderContent.ts`** — projects, experience, education, about text, and the hero showcase config. This is the primary file to edit when updating content. It exports typed arrays (`founderProjects`, `experiencesFounder`, `education`) consumed directly by `Body.tsx`.

### Media / showcase

- `FounderShowcase` (hero right column): controlled by `showcaseConfig` in `lib/founderContent.ts`. Set `mode: "video"` and add `public/showcase.mp4`, or `mode: "images"` with paths under `public/`. Falls back to a gradient placeholder when empty.
- `ProjectCover`: each project card's cover. Supports `kind: "video"` or `kind: "images"` per project. Empty `items: []` renders a gradient placeholder — no broken image errors.

### Styling conventions

- **`brand`** color token (orange, defined in `globals.css` CSS vars) is the accent used throughout — `text-brand`, `bg-brand`, `hover:text-brand`, etc.
- **`font-display`** = Syne (headings); **`font-sans`** = Geist Sans (body).
- Dark mode is default (`defaultTheme="dark"` in `ThemeProvider`), toggled via `next-themes` with class strategy.
- Tailwind design tokens (colors, border radius) are CSS variables defined in `globals.css` and referenced in `tailwind.config.ts`.

### Deployment

Deployed to Vercel. `@vercel/analytics` and `@vercel/speed-insights` are wired in `app/layout.tsx`. `console.*` calls are stripped in production builds.

### Unused / legacy components

`components/pipeline/` (PipelineJourney, PipelineScene, etc.) and `components/CommandPalette.tsx`, `components/SystemArchitecture.tsx`, `components/GitHubStats.tsx`, `components/GitHubActivity.tsx` exist but are not imported in the current page. `lib/util.ts` and `lib/utils.ts` both exist (the latter is the shadcn `cn` helper).
