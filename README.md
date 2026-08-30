# Preethi Agnes Thomas — Portfolio Site

A personal portfolio site built with the MERN stack (MongoDB, Express, React, Node), styled as a dark, terminal/dashboard-flavored site fitting a DevOps/Platform Engineering background.

- `client/` — React + Vite frontend (single-page, scroll-anchored sections: About, Experience, Projects, Skills, Contact)
- `server/` — Express API with a MongoDB-backed contact form (`POST /api/contact`)

## Local development

**1. Backend**

```bash
cd server
cp .env.example .env   # fill in MONGODB_URI (see MongoDB Atlas setup below)
npm install
npm run dev
```

**2. Frontend** (in a separate terminal)

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173 — the Vite dev server proxies `/api` requests to `http://localhost:5000`.

## Updating content

All resume-derived content (bio, experience, projects, skills, certifications) lives in one file:
[`client/src/data/portfolioData.js`](client/src/data/portfolioData.js). Edit that file to update anything on the site — no need to touch the components.

To update the downloadable resume, replace `client/public/resume.pdf`.

## Free hosting setup

This is designed to run entirely on free tiers:

| Piece | Service | Free tier |
|---|---|---|
| Frontend | [Vercel](https://vercel.com) | Yes, generous free tier for static/SPA sites |
| Backend API | [Render](https://render.com) | Yes, free web service (spins down after inactivity, cold-starts on next request) |
| Database | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | Yes, M0 free cluster (512MB) |

### 1. MongoDB Atlas (database)

1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) (you'll need to create this account yourself).
2. Create a free **M0** cluster.
3. Under **Database Access**, create a database user with a password.
4. Under **Network Access**, add `0.0.0.0/0` (allow access from anywhere) so Render can reach it.
5. Click **Connect > Drivers**, copy the connection string — it looks like:
   `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/portfolio?retryWrites=true&w=majority`

### 2. Render (backend API)

1. Sign up at [render.com](https://render.com) (via GitHub is easiest).
2. New > Web Service > connect this repo, root directory `server`.
3. Render should auto-detect the `render.yaml` in the repo root — otherwise set:
   - Build command: `npm install`
   - Start command: `npm start`
4. Add environment variables:
   - `MONGODB_URI` — the Atlas connection string from above
   - `CLIENT_ORIGIN` — your Vercel URL once you have it (e.g. `https://preethi-portfolio.vercel.app`), or `*` to start
5. Deploy. Note the resulting URL, e.g. `https://preethi-portfolio-api.onrender.com`.

### 3. Vercel (frontend)

1. Sign up at [vercel.com](https://vercel.com) (via GitHub is easiest).
2. New Project > import this repo, root directory `client`.
3. Add an environment variable:
   - `VITE_API_URL` — the Render URL from step 2 (e.g. `https://preethi-portfolio-api.onrender.com`)
4. Deploy. Vercel gives you a URL like `https://preethi-portfolio.vercel.app`.
5. Go back to Render and update `CLIENT_ORIGIN` to this Vercel URL, so the API only accepts requests from your site.

### Note on the free Render tier

Render's free web services spin down after ~15 minutes of no traffic and take a few seconds to wake back up on the next request — the first contact-form submission after a quiet period may feel slow. This doesn't affect the rest of the site (the resume, About, Projects, etc. are all static and served instantly by Vercel); only the contact form talks to the backend.
