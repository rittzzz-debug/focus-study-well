import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AIAssistantScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! I\'m your AI Learning Assistant. Ask me anything about Biotechnology or Microbiology!',
      sender: 'ai',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: 'Great question! Let me explain... [AI Response will be fetched from backend]',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <View className="flex-1">
        {/* Header */}
        <View className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
          <Text className="text-white text-2xl font-bold">AI Assistant</Text>
          <Text className="text-white/80">Ask anything about your studies</Text>
        </View>

        {/* Messages */}
        <ScrollView className="flex-1 px-4 py-4">
          {messages.map((message) => (
            <View
              key={message.id}
              className={`mb-4 flex-row ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <View
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-indigo-600 rounded-br-none'
                    : 'bg-gray-200 rounded-bl-none'
                }`}
              >
                <Text
                  className={`text-base ${
                    message.sender === 'user'
                      ? 'text-white'
                      : 'text-gray-800'
                  }`}
                >
                  {message.text}
                </Text>
              </View>
            </View>
          ))}

          {isLoading && (
            <View className="mb-4 flex-row justify-start">
              <View className="bg-gray-200 px-4 py-3 rounded-2xl rounded-bl-none">
                <Text className="text-gray-800">Thinking...</Text>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Input */}
        <View className="px-4 py-4 border-t border-gray-200 bg-white">
          <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
            <TextInput
              className="flex-1 text-gray-800 py-2"
              placeholder="Ask a question..."
              value={inputText}
              onChangeText={setInputText}
              editable={!isLoading}
            />
            <TouchableOpacity
              onPress={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className={`ml-2 p-2 rounded-full ${
                inputText.trim() ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            >
              <Ionicons
                name="send"
                size={18}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
