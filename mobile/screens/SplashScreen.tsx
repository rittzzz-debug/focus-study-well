import React from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 justify-center items-center">
      <View className="items-center">
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 120, height: 120, marginBottom: 20 }}
        />
        <Text className="text-3xl font-bold text-indigo-600 mb-2">
          Focus Study Well
        </Text>
        <Text className="text-center text-gray-600 mb-8 px-6">
          विद्याधनं सर्वधनप्रधानम्।
        </Text>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    </View>
  );
}
