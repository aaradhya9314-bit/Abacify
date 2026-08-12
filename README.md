# Abacify

Information + enquiry website for Abacify's learning programs: Abacus, Chess, AI & Robotics, and Maths & Science.

## Apps

- `frontend`: Next.js App Router, TailwindCSS, Framer Motion, Lucide icons, shadcn-style UI primitives
- `backend`: Node.js, Express.js, MongoDB with Mongoose

## Local Setup

```bash
npm run install:all
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
npm run dev
```

Frontend runs on `http://localhost:3000`.
Backend runs on `http://localhost:5000`.

## Deployment

- Frontend: Vercel
- Backend: Render or Railway
- Database: MongoDB Atlas
