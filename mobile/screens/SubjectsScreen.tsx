import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SubjectsScreen({ navigation }: any) {
  const subjects = [
    {
      id: 1,
      name: 'Cell Biology',
      topics: 15,
      description: 'Structure and function of cells',
      icon: '🧬',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Genetics',
      topics: 12,
      description: 'Heredity and DNA',
      icon: '🔬',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      name: 'Microbiology',
      topics: 18,
      description: 'Microorganisms and bacteria',
      icon: '🦠',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 4,
      name: 'Biochemistry',
      topics: 20,
      description: 'Chemical processes in living cells',
      icon: '⚗️',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-6">
        <Text className="text-2xl font-bold text-gray-800 mb-6">
          Choose Subject
        </Text>
        <View className="gap-4">
          {subjects.map((subject) => (
            <TouchableOpacity
              key={subject.id}
              className={`bg-gradient-to-r ${subject.color} rounded-2xl p-6 overflow-hidden`}
              onPress={() => navigation.navigate('Topic')}
            >
              <View className="flex-row items-start justify-between">
                <View className="flex-1">
                  <View className="flex-row items-center mb-2">
                    <Text className="text-4xl mr-3">{subject.icon}</Text>
                    <View>
                      <Text className="text-white font-bold text-xl">
                        {subject.name}
                      </Text>
                      <Text className="text-white/80 text-sm">
                        {subject.topics} topics
                      </Text>
                    </View>
                  </View>
                  <Text className="text-white/90 text-sm mt-2">
                    {subject.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
