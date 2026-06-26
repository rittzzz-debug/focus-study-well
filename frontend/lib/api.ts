import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add token to requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiClient = {
  auth: {
    register: (data: any) => api.post('/auth/register', data),
    login: (data: any) => api.post('/auth/login', data),
  },
  subjects: {
    getAll: () => api.get('/subjects'),
    getById: (id: string) => api.get(`/subjects/${id}`),
  },
  topics: {
    getAll: (params?: any) => api.get('/topics', { params }),
    getById: (id: string) => api.get(`/topics/${id}`),
    search: (query: string) => api.get('/topics/search', { params: { q: query } }),
  },
  bookmarks: {
    getAll: () => api.get('/bookmarks'),
    create: (topicId: string) => api.post('/bookmarks', { topicId }),
  },
};

export default api;
