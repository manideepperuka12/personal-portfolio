# Deployment

## MongoDB Atlas
1. Create a free MongoDB Atlas cluster.
2. Create a database user.
3. Add your deployment IP/network access.
4. Copy the connection string into `server/.env` on your backend host.

## Backend on Render
- Root directory: `server`
- Build command: `npm install`
- Start command: `npm start`
- Add `MONGO_URI` and `CLIENT_URL` environment variables.

## Frontend on Vercel
- Root directory: `client`
- Build command: `npm run build`
- Output: `dist`
- Add `VITE_API_URL=https://YOUR-BACKEND-DOMAIN/api`
