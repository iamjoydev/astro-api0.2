# Joydev Sastri Ultimate — All-in-One Astrology App

This is a full-stack hybrid app (Express backend + Next.js frontend) with a built-in astrology engine (Panchang, Horoscope, Kundli, Match).
It is packaged ready-to-deploy.

## Quick start (local)

1. Copy env:
   ```
   cp .env.example .env
   ```
2. Install dependencies for root (concurrently) and for backend/frontend:
   ```
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Start backend:
   ```
   npm run start:backend
   ```
   Start frontend (in separate terminal):
   ```
   cd frontend && npm run dev
   ```
   Or run both with:
   ```
   npm run dev
   ```

## Docker
```
docker build -t joydev-sastri-ultimate .
docker run --env-file .env -p 4000:4000 -p 3000:3000 joydev-sastri-ultimate
```

## Endpoints
- Backend: `http://localhost:4000/api/daily`
- Frontend: `http://localhost:3000`

Authentication: set header `x-api-key` to `ADMIN_API_KEY` from .env to access API endpoints that require it.

Note: This project uses a self-contained astrology engine (approximate). For production-grade ephemeris, integrate Swiss Ephemeris.
