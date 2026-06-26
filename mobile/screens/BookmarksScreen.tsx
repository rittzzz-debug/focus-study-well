import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDataStore } from '../store/dataStore';

export default function BookmarksScreen({ navigation }: any) {
  const { bookmarks } = useDataStore();

  const mockBookmarks = [
    {
      id: 1,
      title: 'PCR Technique',
      folder: 'Favorites',
      subject: 'Molecular Biology',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'DNA Replication',
      folder: 'Semester 1',
      subject: 'Cell Biology',
      date: '2024-01-14',
    },
    {
      id: 3,
      title: 'CRISPR Technology',
      folder: 'Exam Prep',
      subject: 'Genetic Engineering',
      date: '2024-01-13',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-6">
        <Text className="text-2xl font-bold text-gray-800 mb-6">Bookmarks</Text>

        {mockBookmarks.length === 0 ? (
          <View className="items-center justify-center py-12">
            <Text className="text-5xl mb-4">📚</Text>
            <Text className="text-gray-600 text-center">
              No bookmarks yet. Save topics to access them later!
            </Text>
          </View>
        ) : (
          <View className="gap-3">
            {mockBookmarks.map((bookmark) => (
              <TouchableOpacity
                key={bookmark.id}
                className="bg-gray-50 rounded-lg p-4 flex-row items-start border border-gray-200"
                onPress={() => navigation.navigate('Topic')}
              >
                <Ionicons name="bookmark" size={24} color="#6366f1" />
                <View className="flex-1 ml-3">
                  <Text className="font-bold text-gray-800 mb-1">
                    {bookmark.title}
                  </Text>
                  <View className="flex-row gap-2 mb-2">
                    <Text className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                      {bookmark.subject}
                    </Text>
                    <Text className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                      {bookmark.folder}
                    </Text>
                  </View>
                  <Text className="text-xs text-gray-500">
                    Bookmarked on {bookmark.date}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
