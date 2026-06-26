import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDataStore } from '../store/dataStore';

export default function TopicScreen({ navigation }: any) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { addBookmark, removeBookmark } = useDataStore();

  const topic = {
    id: 1,
    title: 'PCR - Polymerase Chain Reaction',
    subject: 'Molecular Biology',
    difficulty: 'medium',
    readingTime: 15,
    content: `PCR is a molecular technique used to amplify specific DNA sequences.

Steps:
1. Denaturation - Heat to 94-95°C to separate DNA strands
2. Annealing - Cool to 50-65°C for primers to bind
3. Extension - Heat to 72°C for DNA polymerase to add nucleotides

Applications:
- Medical diagnostics
- Forensic analysis
- Gene cloning
- Quality control`,
  };

  const handleBookmark = async () => {
    if (isBookmarked) {
      await removeBookmark(topic.id.toString());
    } else {
      await addBookmark(topic.id.toString());
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-6">
        <Text className="text-white text-3xl font-bold mb-4">{topic.title}</Text>
        <View className="flex-row gap-4 items-center">
          <View className="bg-white/20 px-3 py-1 rounded-full">
            <Text className="text-white text-xs capitalize font-semibold">
              {topic.difficulty}
            </Text>
          </View>
          <View className="flex-row items-center bg-white/20 px-3 py-1 rounded-full">
            <Ionicons name="time" size={14} color="#fff" />
            <Text className="text-white text-xs ml-1">{topic.readingTime} min</Text>
          </View>
        </View>
      </View>

      <View className="px-6 py-6">
        {/* Actions */}
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity
            className="flex-1 flex-row items-center justify-center bg-indigo-50 rounded-lg py-3"
            onPress={handleBookmark}
          >
            <Ionicons
              name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color="#6366f1"
            />
            <Text className="text-indigo-600 font-semibold ml-2">
              {isBookmarked ? 'Saved' : 'Save'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-purple-50 rounded-lg py-3">
            <Ionicons name="share-social" size={20} color="#a855f7" />
            <Text className="text-purple-600 font-semibold ml-2">Share</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-pink-50 rounded-lg py-3">
            <Ionicons name="download" size={20} color="#ec4899" />
            <Text className="text-pink-600 font-semibold ml-2">PDF</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="bg-gray-50 rounded-lg p-4 mb-6">
          <Text className="text-gray-800 leading-6 text-base">
            {topic.content}
          </Text>
        </View>

        {/* Quiz Button */}
        <TouchableOpacity
          className="bg-indigo-600 rounded-lg py-4 flex-row items-center justify-center mb-4"
          onPress={() => navigation.navigate('Quiz')}
        >
          <Ionicons name="help-circle" size={24} color="#fff" />
          <Text className="text-white font-bold text-lg ml-2">
            Take Quiz
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
