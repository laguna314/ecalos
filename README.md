# Ecalos Music Initiative — React + Vite + Tailwind (Cloudflare Pages)

Modern, professional nonprofit site with a local rock‑energy vibe. Includes sections for Mission, Events, Donate, Volunteer, Sponsors, Gallery, Board, Newsletter, and Contact, plus Cloudflare Pages Functions for simple form handling (optional KV bindings).

## Local Development

```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```

## Tailwind

Already configured in `tailwind.config.js` and `postcss.config.js`. Styles in `src/styles.css`.

## Deployment — Cloudflare Pages

1. Create a new Pages project, connect your repo, or upload this folder.
2. **Build command**: `npm run build`
3. **Build output**: `dist`
4. (Optional) Under Pages **Functions**, add KV bindings for any forms you want to persist:
   - `CONTACTS_KV`, `SUBSCRIBERS_KV`, `VOLUNTEERS_KV`, `SPONSORS_KV`, `DONATIONS_KV`
5. Forms POST to `/api/*` and will redirect back to `/` after submission.

> To email form submissions, add a Worker or queue to send email via a provider (SendGrid, MailChannels, Resend).

## Content Edits

- Update text and links in `src/site.config.js`.
- Update events in `src/components/Events.jsx`.
- Replace gallery URLs in `src/components/Gallery.jsx` with your own images.
- Adjust sponsor tiers in `src/components/Sponsors.jsx`.

## Notes

- Icons: `lucide-react`
- Dark theme with brand orange glow.
- Fully responsive and accessible.
