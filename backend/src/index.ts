import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Focus Study Well API is running' });
});

app.get('/api', (req, res) => {
  res.json({ 
    message: 'Welcome to Focus Study Well API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      subjects: '/api/subjects',
      topics: '/api/topics'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📚 Focus Study Well API started`);
  console.log(`🌐 http://localhost:${PORT}/api`);
});
