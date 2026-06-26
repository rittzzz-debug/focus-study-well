import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'student' | 'teacher' | 'admin';
  learningLevel: 'bachelor' | 'postgraduate' | 'research';
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, fullName: string) => Promise<void>;
  logout: () => Promise<void>;
  loadAuthState: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoading: false,

  setUser: (user) => set({ user }),
  setToken: (token) => {
    set({ token });
    if (token) {
      AsyncStorage.setItem('authToken', token);
    } else {
      AsyncStorage.removeItem('authToken');
    }
  },
  setLoading: (loading) => set({ isLoading: loading }),

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // API call to backend
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      set({ user: data.user, token: data.token });
      await AsyncStorage.setItem('authToken', data.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email: string, password: string, fullName: string) => {
    set({ isLoading: true });
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName }),
      });
      const data = await response.json();
      set({ user: data.user, token: data.token });
      await AsyncStorage.setItem('authToken', data.token);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ user: null, token: null });
    await AsyncStorage.removeItem('authToken');
  },

  loadAuthState: async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        set({ token });
      }
    } catch (error) {
      console.error('Failed to load auth state:', error);
    }
  },
}));
