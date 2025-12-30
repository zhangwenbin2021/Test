# Repository Guidelines

## Project Structure

- `app/`: Next.js App Router pages/layouts (entry points: `app/layout.tsx`, `app/page.tsx`).
- `components/`: Shared React components. Shadcn UI primitives live in `components/ui/`.
- `hooks/`: Reusable React hooks (mirrors some UI hook helpers).
- `lib/`: Utility modules (e.g., `lib/utils.ts` for `cn()` and shared helpers).
- `public/`: Static assets served at `/` (icons, images).
- Styles: global CSS is loaded from `app/globals.css` (imported by `app/layout.tsx`). `styles/` contains additional CSS assets if needed.

## Build, Test, and Development Commands

This repo uses `pnpm` (see `pnpm-lock.yaml`). If `pnpm` isn’t available, enable it via Corepack (`corepack enable`) or install it globally (`npm i -g pnpm`).

- Install: `pnpm install`
- Dev server: `pnpm dev` (Next dev server, typically at `http://localhost:3000`)
- Production build: `pnpm build`
- Start production server: `pnpm start` (run after `pnpm build`)
- Lint: `pnpm lint` (runs `eslint .`; if it fails due to missing tooling, add the expected ESLint deps for Next.js)

## Coding Style & Naming Conventions

- Language: TypeScript + React (Next.js). Keep code compatible with App Router and RSC conventions.
- Indentation: 2 spaces; no semicolons (match existing files).
- Naming: file names are kebab-case (e.g., `components/editor-section.tsx`); exported components/functions use PascalCase/camelCase.
- Imports: prefer path aliases via `@/…` (configured in `tsconfig.json` as `@/*` → repo root).

## Testing Guidelines

- No test framework or `test` script is currently configured.
- If adding tests, prefer colocated `*.test.ts(x)` or a `tests/` directory, and add a `pnpm test` script (e.g., Vitest or Jest) plus CI-friendly defaults.

## Commit & Pull Request Guidelines

- Git history is not included in this checkout, so conventions can’t be derived from prior commits.
- Recommended: Conventional Commits (e.g., `feat: add hero CTA`, `fix: handle empty prompt`).
- PRs: include a clear description, link issues (if any), and screenshots/GIFs for UI changes. Ensure `pnpm lint` and `pnpm build` pass before requesting review.

## Configuration & Security Notes

- Local config: use `.env.local` for secrets and API keys; do not commit credentials.
