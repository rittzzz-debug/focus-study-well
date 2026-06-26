import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuthStore } from '../../store/authStore';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuthStore();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }
    try {
      await login(email, password);
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 px-6 py-12">
          {/* Header */}
          <View className="mb-8">
            <Text className="text-4xl font-bold text-indigo-600 mb-2">
              Welcome Back
            </Text>
            <Text className="text-gray-600">
              Sign in to continue learning
            </Text>
          </View>

          {/* Error Message */}
          {error && (
            <View className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <Text className="text-red-600">{error}</Text>
            </View>
          )}

          {/* Email Input */}
          <View className="mb-6">
            <Text className="text-gray-700 font-semibold mb-2">Email</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3">
              <Ionicons name="mail" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-3 text-gray-800"
                placeholder="your@email.com"
                value={email}
                onChangeText={setEmail}
                editable={!isLoading}
                keyboardType="email-address"
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <Text className="text-gray-700 font-semibold mb-2">Password</Text>
            <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3">
              <Ionicons name="lock" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-3 text-gray-800"
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                editable={!isLoading}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#9ca3af"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="mb-8">
            <Text className="text-indigo-600 font-semibold">Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-indigo-600 rounded-lg py-3 flex-row justify-center items-center mb-4"
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Ionicons name="log-in" size={20} color="#fff" />
                <Text className="text-white font-bold text-lg ml-2">Login</Text>
              </>
            )}
          </TouchableOpacity>

          {/* Register Link */}
          <View className="flex-row justify-center">
            <Text className="text-gray-600">Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="text-indigo-600 font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-3 text-gray-500">OR</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Google Login */}
          <TouchableOpacity className="border border-gray-300 rounded-lg py-3 flex-row justify-center items-center">
            <Text className="text-gray-700 font-semibold ml-2">Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
