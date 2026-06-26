import create from 'zustand';

interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'student' | 'teacher' | 'admin';
}

interface AppStore {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  logout: () => void;
}

export const useStore = create<AppStore>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  theme: 'light',
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => set({ token, isAuthenticated: !!token }),
  setTheme: (theme) => set({ theme }),
  logout: () => set({ user: null, isAuthenticated: false, token: null }),
}));
