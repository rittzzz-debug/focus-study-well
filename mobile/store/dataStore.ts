import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Topic {
  id: string;
  title: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced';
  readingTime: number;
  description: string;
  content: string;
}

interface Bookmark {
  id: string;
  topicId: string;
  folderName: string;
  bookmarkedAt: string;
}

interface Note {
  id: string;
  topicId: string;
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
}

interface DataStore {
  topics: Topic[];
  bookmarks: Bookmark[];
  notes: Note[];
  setTopics: (topics: Topic[]) => void;
  addBookmark: (topicId: string) => Promise<void>;
  removeBookmark: (id: string) => Promise<void>;
  addNote: (topicId: string, title: string, content: string) => Promise<void>;
  updateNote: (id: string, content: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  loadOfflineData: () => Promise<void>;
}

export const useDataStore = create<DataStore>((set) => ({
  topics: [],
  bookmarks: [],
  notes: [],

  setTopics: (topics) => {
    set({ topics });
    AsyncStorage.setItem('topics', JSON.stringify(topics));
  },

  addBookmark: async (topicId: string) => {
    const bookmark: Bookmark = {
      id: Date.now().toString(),
      topicId,
      folderName: 'Favorites',
      bookmarkedAt: new Date().toISOString(),
    };
    set((state) => ({ bookmarks: [...state.bookmarks, bookmark] }));
    await AsyncStorage.setItem('bookmarks', JSON.stringify(useDataStore.getState().bookmarks));
  },

  removeBookmark: async (id: string) => {
    set((state) => ({
      bookmarks: state.bookmarks.filter((b) => b.id !== id),
    }));
    await AsyncStorage.setItem('bookmarks', JSON.stringify(useDataStore.getState().bookmarks));
  },

  addNote: async (topicId: string, title: string, content: string) => {
    const note: Note = {
      id: Date.now().toString(),
      topicId,
      title,
      content,
      isPinned: false,
      createdAt: new Date().toISOString(),
    };
    set((state) => ({ notes: [...state.notes, note] }));
    await AsyncStorage.setItem('notes', JSON.stringify(useDataStore.getState().notes));
  },

  updateNote: async (id: string, content: string) => {
    set((state) => ({
      notes: state.notes.map((n) => (n.id === id ? { ...n, content } : n)),
    }));
    await AsyncStorage.setItem('notes', JSON.stringify(useDataStore.getState().notes));
  },

  deleteNote: async (id: string) => {
    set((state) => ({
      notes: state.notes.filter((n) => n.id !== id),
    }));
    await AsyncStorage.setItem('notes', JSON.stringify(useDataStore.getState().notes));
  },

  loadOfflineData: async () => {
    try {
      const topics = await AsyncStorage.getItem('topics');
      const bookmarks = await AsyncStorage.getItem('bookmarks');
      const notes = await AsyncStorage.getItem('notes');
      set({
        topics: topics ? JSON.parse(topics) : [],
        bookmarks: bookmarks ? JSON.parse(bookmarks) : [],
        notes: notes ? JSON.parse(notes) : [],
      });
    } catch (error) {
      console.error('Failed to load offline data:', error);
    }
  },
}));
