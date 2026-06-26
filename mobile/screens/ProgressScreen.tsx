import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProgressScreen() {
  const subjects = [
    {
      name: 'Cell Biology',
      completed: 12,
      total: 15,
      hours: 8,
      streak: 5,
    },
    { name: 'Genetics', completed: 8, total: 12, hours: 5, streak: 3 },
    {
      name: 'Microbiology',
      completed: 10,
      total: 18,
      hours: 6,
      streak: 7,
    },
  ];

  const achievements = [
    { id: 1, name: 'First Step', icon: '👣', description: 'Complete your first topic' },
    { id: 2, name: 'Week Warrior', icon: '⚔️', description: '7-day learning streak' },
    { id: 3, name: 'Quiz Master', icon: '🏆', description: 'Score 100% on a quiz' },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-6">
        <Text className="text-2xl font-bold text-gray-800 mb-6">
          Your Progress
        </Text>

        {/* Overall Stats */}
        <View className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 mb-8 text-white">
          <View className="flex-row gap-4">
            <View className="flex-1">
              <Text className="text-white/80 text-sm mb-1">Topics Done</Text>
              <Text className="text-3xl font-bold text-white">30</Text>
              <Text className="text-white/60 text-xs">of 45 total</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white/80 text-sm mb-1">Hours Studied</Text>
              <Text className="text-3xl font-bold text-white">19</Text>
              <Text className="text-white/60 text-xs">hours</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white/80 text-sm mb-1">Current Streak</Text>
              <Text className="text-3xl font-bold text-white">7</Text>
              <Text className="text-white/60 text-xs">days</Text>
            </View>
          </View>
        </View>

        {/* Subject Progress */}
        <Text className="text-lg font-bold text-gray-800 mb-4">Subjects Progress</Text>
        <View className="gap-4 mb-8">
          {subjects.map((subject, index) => {
            const percentage = (subject.completed / subject.total) * 100;
            return (
              <View key={index} className="bg-gray-50 rounded-lg p-4">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="font-semibold text-gray-800">
                    {subject.name}
                  </Text>
                  <Text className="text-indigo-600 font-bold">
                    {Math.round(percentage)}%
                  </Text>
                </View>
                <View className="h-2 bg-gray-300 rounded-full overflow-hidden mb-3">
                  <View
                    className="h-full bg-indigo-600"
                    style={{ width: `${percentage}%` }}
                  />
                </View>
                <View className="flex-row gap-4 text-xs text-gray-600">
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="book" size={14} color="#6366f1" />
                    <Text>{subject.completed}/{subject.total}</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="time" size={14} color="#6366f1" />
                    <Text>{subject.hours}h</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="flame" size={14} color="#f59e0b" />
                    <Text>{subject.streak} days</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/* Achievements */}
        <Text className="text-lg font-bold text-gray-800 mb-4">Achievements</Text>
        <View className="gap-3">
          {achievements.map((achievement) => (
            <View
              key={achievement.id}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 flex-row items-center"
            >
              <View className="text-3xl mr-4">{achievement.icon}</View>
              <View className="flex-1">
                <Text className="font-bold text-gray-800">
                  {achievement.name}
                </Text>
                <Text className="text-gray-600 text-sm">
                  {achievement.description}
                </Text>
              </View>
              <Ionicons name="checkmark-circle" size={24} color="#10b981" />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
