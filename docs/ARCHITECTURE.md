# Focus Study Well - Architecture

## System Overview

```
┌─────────────────┐
│   Next.js App   │
│   (Frontend)    │
└────────┬────────┘
         │ HTTP/REST
         ↓
┌─────────────────────┐
│  Express.js API     │
│    (Backend)        │
└────────┬────────────┘
         │ SQL
         ↓
┌─────────────────────┐
│  PostgreSQL         │
│   (Database)        │
└─────────────────────┘
```

## Frontend Architecture

**Tech Stack:**
- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Zustand (state management)
- Axios (HTTP client)

**Key Features:**
- Server-side rendering
- Image optimization
- Mobile responsive
- Dark mode support
- SEO optimized

## Backend Architecture

**Tech Stack:**
- Express.js
- TypeScript
- PostgreSQL
- JWT authentication
- Bcrypt for password encryption

**API Routes:**
- `/api/health` - Health check
- `/api/auth/*` - Authentication
- `/api/subjects/*` - Subject management
- `/api/topics/*` - Topic management
- `/api/bookmarks/*` - User bookmarks
- `/api/quiz/*` - Quiz system
- `/api/progress/*` - Progress tracking

## Database Schema

**Core Tables:**
- users
- subjects
- topics
- diagrams
- quiz_questions
- bookmarks
- personal_notes
- progress
- achievements
