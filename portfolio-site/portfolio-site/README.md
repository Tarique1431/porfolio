# Tarique Mahmood — Projects Portfolio

A single-page portfolio website showcasing live production systems, internal tools,
and self-built automation — built with **Vite + React + Tailwind CSS v4**.

Each project card supports a short looping **video demo on hover** (desktop) — add
one any time, no code changes needed (see below).

---

## 🚀 Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 📦 Deploy on Vercel

1. Push this folder to a **new GitHub repo**.
2. Go to [vercel.com/new](https://vercel.com/new), import that repo.
3. Vercel auto-detects **Vite** — just click **Deploy**. No config needed.
4. Every `git push` after that auto-redeploys.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then import the repo on Vercel.

---

## 🎥 Adding a demo video for a project

Every project in `src/projects.js` has a `video` field, e.g.:

```js
{
  name: "SWAG Order Portal",
  video: "swag-order-portal.mp4",
  ...
}
```

To make the hover-demo actually play:

1. Screen-record the project (15–30 seconds is plenty — a quick click-through of
   the main screen/flow looks great). Any screen recorder works:
   - **Windows**: `Win + Alt + R` (Xbox Game Bar) or OBS Studio
   - **Mac**: `Cmd + Shift + 5`
2. Export/save it as an **`.mp4`** file.
3. Rename it to **exactly** match the `video` field for that project
   (e.g. `swag-order-portal.mp4`).
4. Drop it into the **`public/media/`** folder.
5. Commit and push — Vercel redeploys automatically.

That's it — no code edits. Hover the card on the live site and the video plays
muted & looped. If a video file is missing, the card just shows a clean icon
tile instead (nothing breaks).

**Tip:** keep each video under ~5–8 MB for fast loading — screen-record at a
modest resolution (720p is enough) and trim out dead time at the start/end.

---

## ✏️ Editing projects / adding a new one

Everything lives in **`src/projects.js`** — one object per project, grouped into
three categories (`live`, `tools`, `internal`). To add a new project, copy an
existing object in the right category and update:

- `name`, `desc`, `stack` (tech badges)
- `url` — the live link, or `null` for an internal/private tool (shows a lock
  badge instead of a link)
- `icon` — pick any icon name already imported in `src/ProjectCard.jsx`
  (from [lucide-react](https://lucide.dev/icons/))
- `video` — the filename you'll drop into `public/media/`

## 🎨 Tech stack

- [Vite](https://vite.dev) — build tool
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) — icons

---

Built and maintained end-to-end by **Tarique Mahmood**
📧 tarique1431@gmail.com · 📱 +91-9123297576
