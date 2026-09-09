# Personal Portfolio — Full Stack

A responsive full-stack personal portfolio built with:

- Frontend: React + Vite + CSS
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Contact form API
- Project CRUD API
- Ready for Vercel (frontend) + Render/Railway (backend)

## 1. Run locally

### Backend
```bash
cd server
npm install
copy .env.example .env
npm run dev
```
On macOS/Linux use `cp .env.example .env` instead of `copy`.

### Frontend
Open another terminal:
```bash
cd client
npm install
copy .env.example .env
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:5000

## 2. MongoDB

Set `MONGO_URI` in `server/.env` to either a local MongoDB instance or a MongoDB Atlas connection string.

## 3. Add projects

Projects are loaded from MongoDB. You can seed sample projects:
```bash
cd server
npm run seed
```

## 4. Deploy

### Backend
Deploy the `server` folder to Render/Railway/Fly.io.
Environment variables:
- `MONGO_URI`
- `PORT` (optional)
- `CLIENT_URL`

### Frontend
Deploy the `client` folder to Vercel/Netlify.
Set:
- `VITE_API_URL=https://YOUR-BACKEND-DOMAIN/api`

## API
- `GET /api/health`
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `POST /api/contact`
![Portfolio Screenshot](Screenshot%20(51).png)
