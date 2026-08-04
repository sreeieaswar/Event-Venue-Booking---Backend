# Deployment Notes

## Suggested Targets

- Frontend: Vercel, Netlify, or static hosting.
- Backend: Render, Railway, Fly.io, or VPS.
- Database: MongoDB Atlas.

## Environment Variables

Backend:

- `MONGO_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `PORT`
- `CLIENT_URL`

Frontend:

- `VITE_API_URL`

## Git Workflow

```bash
git init
git add .
git commit -m "chore: scaffold event booking platform"
git branch -M main
```

Recommended branch names:

- `feature/auth`
- `feature/venue-management`
- `feature/cart-checkout`
- `fix/order-status`

