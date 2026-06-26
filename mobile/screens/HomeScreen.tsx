import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('bachelor');

  const subjects = [
    { id: 1, name: 'Cell Biology', icon: '🧬', color: 'bg-blue-500' },
    { id: 2, name: 'Genetics', icon: '🔬', color: 'bg-green-500' },
    { id: 3, name: 'Microbiology', icon: '🦠', color: 'bg-purple-500' },
    { id: 4, name: 'Biochemistry', icon: '⚗️', color: 'bg-pink-500' },
  ];

  const recentTopics = [
    { id: 1, title: 'PCR Technique', difficulty: 'medium', time: 15 },
    { id: 2, title: 'DNA Replication', difficulty: 'hard', time: 20 },
    { id: 3, title: 'CRISPR Technology', difficulty: 'advanced', time: 25 },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 pt-12">
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-gray-300 text-sm">Welcome back,</Text>
            <Text className="text-white text-2xl font-bold">Student Name</Text>
          </View>
          <View className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Ionicons name="person" size={24} color="#fff" />
          </View>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-white/20 rounded-lg px-4 py-2">
          <Ionicons name="search" size={20} color="#fff" />
          <TextInput
            className="flex-1 ml-2 text-white text-sm"
            placeholder="Search topics..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View className="px-6 py-6">
        {/* Quick Stats */}
        <View className="flex-row gap-4 mb-8">
          <View className="flex-1 bg-indigo-50 rounded-lg p-4">
            <Text className="text-indigo-600 font-bold text-2xl">12</Text>
            <Text className="text-indigo-600 text-sm">Topics Done</Text>
          </View>
          <View className="flex-1 bg-purple-50 rounded-lg p-4">
            <Text className="text-purple-600 font-bold text-2xl">85%</Text>
            <Text className="text-purple-600 text-sm">Progress</Text>
          </View>
          <View className="flex-1 bg-pink-50 rounded-lg p-4">
            <Text className="text-pink-600 font-bold text-2xl">7</Text>
            <Text className="text-pink-600 text-sm">Day Streak</Text>
          </View>
        </View>

        {/* Learning Level Selection */}
        <Text className="text-gray-800 font-bold text-lg mb-3">Learning Level</Text>
        <View className="flex-row gap-2 mb-8">
          {['bachelor', 'postgraduate', 'research'].map((level) => (
            <TouchableOpacity
              key={level}
              className={`flex-1 py-3 rounded-lg ${
                selectedLevel === level
                  ? 'bg-indigo-600'
                  : 'bg-gray-200'
              }`}
              onPress={() => setSelectedLevel(level)}
            >
              <Text
                className={`text-center font-semibold capitalize ${
                  selectedLevel === level
                    ? 'text-white'
                    : 'text-gray-700'
                }`}
              >
                {level === 'bachelor' ? 'Simple'
                  : level === 'postgraduate' ? 'Medium'
                  : 'Advanced'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Subjects */}
        <Text className="text-gray-800 font-bold text-lg mb-3">Subjects</Text>
        <View className="gap-3 mb-8">
          {subjects.map((subject) => (
            <TouchableOpacity
              key={subject.id}
              className={`${subject.color} rounded-lg p-4 flex-row items-center`}
              onPress={() => navigation.navigate('Subjects')}
            >
              <Text className="text-3xl mr-4">{subject.icon}</Text>
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">
                  {subject.name}
                </Text>
                <Text className="text-white/80 text-sm">12 topics</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Topics */}
        <Text className="text-gray-800 font-bold text-lg mb-3">Continue Learning</Text>
        <View className="gap-3">
          {recentTopics.map((topic) => (
            <TouchableOpacity
              key={topic.id}
              className="bg-gray-50 rounded-lg p-4 flex-row items-center"
              onPress={() => navigation.navigate('Topic')}
            >
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold">
                  {topic.title}
                </Text>
                <View className="flex-row gap-2 mt-1">
                  <Text className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded capitalize">
                    {topic.difficulty}
                  </Text>
                  <Text className="text-xs text-gray-500">⏱️ {topic.time} min</Text>
                </View>
              </View>
              <Ionicons name="play" size={24} color="#6366f1" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
