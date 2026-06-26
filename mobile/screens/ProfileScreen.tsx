import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeStore } from '../store/themeStore';
import { useAuthStore } from '../store/authStore';

export default function ProfileScreen({ navigation }: any) {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Profile Header */}
      <View className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8">
        <View className="flex-row items-center">
          <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center mr-4">
            <Ionicons name="person" size={40} color="#fff" />
          </View>
          <View>
            <Text className="text-white text-2xl font-bold">John Doe</Text>
            <Text className="text-white/80">john@email.com</Text>
            <View className="mt-2 bg-white/20 px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-semibold">Bachelor's Student</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="px-6 py-6">
        {/* Settings */}
        <Text className="text-lg font-bold text-gray-800 mb-4">Settings</Text>
        <View className="bg-gray-50 rounded-lg overflow-hidden mb-6">
          <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
            <View className="flex-row items-center">
              <Ionicons name="moon" size={20} color="#6366f1" />
              <Text className="ml-3 text-gray-800 font-semibold">Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode || false}
              onValueChange={toggleTheme}
              trackColor={{ false: '#ccc', true: '#81c784' }}
            />
          </View>
          <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
            <Ionicons name="language" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold flex-1">Language</Text>
            <Text className="text-gray-500">English</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center px-4 py-3">
            <Ionicons name="notifications" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold">Notifications</Text>
          </TouchableOpacity>
        </View>

        {/* Learning Preferences */}
        <Text className="text-lg font-bold text-gray-800 mb-4">Learning</Text>
        <View className="bg-gray-50 rounded-lg overflow-hidden mb-6">
          <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
            <Ionicons name="bar-chart" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold flex-1">Learning Level</Text>
            <Text className="text-gray-500">Bachelor's</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
            <Ionicons name="download" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold flex-1">Download Quality</Text>
            <Text className="text-gray-500">High</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center px-4 py-3">
            <Ionicons name="wifi" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold">Data Usage</Text>
          </TouchableOpacity>
        </View>

        {/* Account */}
        <Text className="text-lg font-bold text-gray-800 mb-4">Account</Text>
        <View className="bg-gray-50 rounded-lg overflow-hidden mb-6">
          <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
            <Ionicons name="lock" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold">Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200">
            <Ionicons name="help-circle" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold">Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center px-4 py-3">
            <Ionicons name="information-circle" size={20} color="#6366f1" />
            <Text className="ml-3 text-gray-800 font-semibold">About</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity
          className="bg-red-600 rounded-lg py-3 flex-row items-center justify-center"
          onPress={handleLogout}
        >
          <Ionicons name="log-out" size={20} color="#fff" />
          <Text className="text-white font-bold ml-2">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
