# Focus Study Well - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- Git

### Installation Steps

#### 1. Clone Repository
```bash
git clone https://github.com/rittzzz-debug/focus-study-well.git
cd focus-study-well
```

#### 2. Setup Database
```bash
# Create database
createdb focus_study_well

# Load schema
psql focus_study_well < database/schema.sql
```

#### 3. Setup Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials
npm install
npm run dev
```

Backend runs on http://localhost:5000

#### 4. Setup Frontend (new terminal)
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Frontend runs on http://localhost:3000

---

## 📝 Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `DB_HOST` - PostgreSQL host
- `DB_NAME` - Database name
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `JWT_SECRET` - JWT signing secret

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL` - Backend API URL

---

## ✅ Verify Installation

```bash
# Test backend health check
curl http://localhost:5000/api/health

# Should return:
# {"status":"ok","message":"Focus Study Well API is running"}
```

---

## 🆘 Troubleshooting

### PostgreSQL Connection Error
- Check if PostgreSQL is running
- Verify credentials in .env
- Ensure database exists

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Node Modules Issues
```bash
rm -rf node_modules
rm package-lock.json
npm install
```
