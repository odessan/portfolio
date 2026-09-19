# Portfolio

A developer portfolio styled as a retro pixel game. Astro, plain CSS, and one
~2KB script. The visual system is specified in [DESIGN.md](DESIGN.md).

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Edit your content

The site owner is "Edo Wijaya"; search for it to rename every instance.

| What | Where |
|---|---|
| Title screen (name, year, button) | `src/components/TitleScreen.astro` |
| Player profile windows, tools, skills | `src/components/PlayerProfile.astro` |
| Email, socials, footer | `src/components/SavePoint.astro` |
| HUD nav | `src/components/Hud.astro` |
| Projects | `src/content/projects/*.md` (one file per mission) |
| Colors, type sizes, pixel scale | `src/styles/global.css` (`:root`) |
| Pixel art | `src/lib/sprites.ts` |

### Project front-matter

```yaml
title: "Signal Atlas"
summary: "One sentence."
year: 2025
role: "What you did"
stack: ["TypeScript", "Rust"]
link: "https://..."   # optional
repo: "https://..."   # optional
cover: "/covers/signal-atlas.png"  # optional, otherwise a placeholder photo
order: 1               # lower = earlier in Mission Select
featured: true         # show on the homepage (max 5); all projects list on /missions
```

Once there are more projects than featured slots, the homepage shows a
"View all missions" button linking to `/missions`.

## Admin

Projects and profile content are editable in a Keystatic admin at `/keystatic`.

| | Local (`npm run dev`) | Production |
|---|---|---|
| Storage | Writes files on disk | Commits to your GitHub repo |
| Login | None | GitHub; only accounts with write access to the repo can save |
| Going live | Commit and push yourself | Automatic: each save commits, Vercel redeploys (~1 min) |

- **Projects** write to `src/content/projects/*.md`. Uploaded covers go to `public/covers/`.
- **Profile** writes to `src/data/profile.json` (name, role, greeting, training log, tools, skills, email, socials).
- Keystatic rewrites frontmatter in its own YAML style on first save (unquoted values, block lists). The data is unchanged.
- `/keystatic` is Keystatic's own UI, not part of the pixel design, and is blocked in `robots.txt`.

### First-time production setup

1. Put the project on GitHub (a private repo is fine) and set `GITHUB_REPO` in `keystatic.config.ts` to `your-username/repo-name`.
2. Import the repo in Vercel. The adapter (`@astrojs/vercel`) is already configured.
3. Create Keystatic's GitHub App: temporarily force GitHub storage locally (change `import.meta.env.DEV` to `false` in `keystatic.config.ts`), run `npm run dev`, open `/keystatic`, and follow **Create GitHub App**. It installs the app on your repo and writes the secrets to `.env` (gitignored). Then switch the storage line back.
4. In Vercel → Project Settings → Environment Variables, add every `KEYSTATIC_*` and `PUBLIC_KEYSTATIC_*` value from `.env`.
5. In the GitHub App settings, add the callback URL `https://<your-domain>/api/keystatic/github/oauth/callback`.
6. Visit `https://<your-domain>/keystatic` and sign in with GitHub.

## Pixel art

Sprites are run-length pixel maps in `src/lib/sprites.ts`. Each row lists
color-key runs, e.g. `.4 h2 s12 h2 .4` is 4 empty, 2 hair, 12 skin, 2 hair,
4 empty. Every row must add up to the sprite's width or the build fails.
Color keys are defined in `PALETTE` at the top of the file.

## Motion

Motion is CSS with `steps()` timing, plus `src/scripts/game.ts` for the window
wipe, mission preview, profile connectors and the PAUSE button. Everything
ambient stops under PAUSE and under `prefers-reduced-motion`.

## Deploy

Static output. Any host works (Vercel, Netlify, Cloudflare Pages). Set `site`
in `astro.config.mjs` to the final URL.
