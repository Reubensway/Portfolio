# Tech Stack

## Core Framework

- **Next.js 14.1** (App Router)
- **React 18**
- **TypeScript 5** (strict mode)

## Styling

- **Tailwind CSS 3** with custom container padding breakpoints
- PostCSS + Autoprefixer
- Inline Tailwind classes (no CSS modules or styled-components)

## 3D / Visual Effects

- **Three.js** with `@react-three/fiber` and `@react-three/drei` for animated star background
- `maath` library for random point generation

## Utilities

- `react-intersection-observer` for scroll-based visibility
- `sharp` for image optimization
- `next/image` for optimized image rendering

## Deployment & Monitoring

- Vercel hosting
- `@vercel/analytics` and `@vercel/speed-insights`
- Google Analytics (tag ID via `NEXT_PRIVATE_GTID` env var)

## Linting

- ESLint with `next/core-web-vitals` preset

## Commands

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |
