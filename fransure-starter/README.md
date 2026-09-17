# FranSure

A web-based Franchise Compliance and Monitoring System developed for Mang Juan Franchising Corporation (MJFC).

## Tech Stack

**Frontend:** React.js, Tailwind CSS, Chart.js
**Backend:** Node.js, Express.js, JWT authentication, PDFKit
**Database:** PostgreSQL (via Supabase)
**File Storage:** Supabase Storage
**Scheduling:** Render Cron Jobs
**Email:** Nodemailer
**Hosting:** Render (backend), Vercel (frontend)

## Project Structure

```
fransure/
├── client/          React + Tailwind frontend
└── server/          Node.js + Express backend
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- A Supabase project (for the PostgreSQL database and storage)
- Git

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd fransure
```

### 2. Set up the backend
```bash
cd server
npm install
cp .env.example .env
# Fill in your .env values (see below)
npm run dev
```

### 3. Set up the frontend
```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:5000` by default.

## Environment Variables

Copy `server/.env.example` to `server/.env` and fill in:

| Variable | Description |
|---|---|
| `PORT` | Port the backend runs on (default 5000) |
| `DATABASE_URL` | Your Supabase PostgreSQL connection string |
| `JWT_SECRET` | A secret string used to sign JWT tokens |
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_KEY` | Your Supabase service role key |
| `EMAIL_USER` | Email address used to send notifications |
| `EMAIL_PASS` | App password for the email account |

Never commit your actual `.env` file — it's already in `.gitignore`.

## Team Workflow

- Create a new branch for each feature: `git checkout -b feature/violation-tracking`
- Open a pull request into `main` when ready for review
- Pull the latest `main` before starting new work: `git pull origin main`

## Team Members

_Add your names and roles here._
