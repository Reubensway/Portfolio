# Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, metadata, global providers)
│   ├── page.tsx            # Home page (composes section components)
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── robots.ts           # Robots.txt generation
│   └── sitemap.ts          # Sitemap generation
├── components/             # React components (one per file)
│   ├── main/               # Background/ambient components
│   │   └── StarsBackground.tsx
│   ├── Navbar.tsx
│   ├── Banner.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Footer.tsx
├── constant/               # Static data and configuration
│   └── index.tsx           # Exported arrays/objects (social links, etc.)
├── public/                 # Static assets (images, SVGs, GIFs)
└── .kiro/steering/         # AI assistant steering rules
```

## Conventions

- **App Router**: Single-page site using `app/` directory. No nested routes.
- **Components**: PascalCase filenames. Each component is a default export. Client components use `"use client"` directive at top.
- **Path aliases**: `@/*` maps to project root (e.g., `@/components/Navbar`).
- **Static data**: Constants live in `constant/index.tsx` as named exports.
- **Assets**: Images and icons stored in `public/` and referenced with absolute paths (e.g., `/Logo.svg`).
- **Styling**: All styling via Tailwind utility classes directly on elements. No separate CSS files per component.
- **Type annotations**: Components typed as `React.FC<{}>` with explicit empty props.
