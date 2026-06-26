import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeStore {
  isDarkMode: boolean | null;
  setDarkMode: (isDark: boolean) => void;
  toggleTheme: () => void;
  initializeTheme: () => Promise<void>;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: null,
  setDarkMode: (isDark: boolean) => {
    set({ isDarkMode: isDark });
    AsyncStorage.setItem('isDarkMode', JSON.stringify(isDark));
  },
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      AsyncStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return { isDarkMode: newMode };
    }),
  initializeTheme: async () => {
    try {
      const saved = await AsyncStorage.getItem('isDarkMode');
      if (saved !== null) {
        set({ isDarkMode: JSON.parse(saved) });
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  },
}));
