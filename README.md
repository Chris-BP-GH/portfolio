# Cinematic Developer Portfolio

A responsive, one-page portfolio built with React, Vite, TypeScript, and Tailwind CSS. Featuring a space-inspired cinematic aesthetic, smooth scrolling, section reveals, and a central data store.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### Local Test Plan

You can verify the integrity of the project code using the following built-in scripts:

- **Typecheck**: Verify TypeScript types without emitting output: `npm run typecheck`
- **Lint**: Lint for any style or logical errors (recommended): `npm run lint`
- **Unit Tests**: Run automated tests for key behaviors (ScrollSpy, i18n, Filtering): `npm run test`
- **Build**: Output a production bundle: `npm run build`

### Smoke Checklist

To manually verify the core behaviors are functioning properly, perform the following checklist in the browser:

- [ ] Nav items 01–06 trigger a smooth scroll to the correct section.
- [ ] Active navigation highlight changes progressively as the user scrolls down the page.
- [ ] Toggling the TH/EN button updates all visible text across the entire page (Hero, About, Projects, Experience, Skills, Contact).
- [ ] Launching a Project Details modal traps focus properly, and you can close it via the 'x' button, clicking the backdrop, or pressing the ESC key.
- [ ] System preferences testing: `prefers-reduced-motion` settings in the browser disables heavy animations, enabling a fast and non-animated `scrollIntoView`.

### Updating Content

All dynamic content (projects, experiences, skills) is designed to be easily configurable without touching UI code.

- **Projects:** Edit `src/data/projects.ts` to add or modify projects.
- **About/Timeline/Skills:** Modify the corresponding data arrays directly at the top of their respective components (`src/components/About.tsx`, `src/components/Experience.tsx`, `src/components/Skills.tsx`).

### Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically build and deploy the app to GitHub Pages.

1. Go to your repository **Settings > Pages**.
2. Set the **Source** to `GitHub Actions`.
3. Commit and push your code to the `main` branch. The action will build the `dist` folder and deploy it automatically.

> **Note:** If you are deploying to a specific repository path (e.g. `https://<username>.github.io/<repo>/`), ensure the `base` property in `vite.config.ts` matches your repository name. Currently, `vite.config.ts` sets `base: '/portfolio/'`. Update this if your repo name is different, or remove it entirely if deploying to a custom root domain (`/`).
