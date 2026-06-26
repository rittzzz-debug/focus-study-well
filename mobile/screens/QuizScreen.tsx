import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ProgressViewIOSComponent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the temperature for DNA denaturation in PCR?',
      options: ['37°C', '72°C', '94-95°C', '50-65°C'],
      correct: 2,
      explanation: 'DNA denatures at 94-95°C, separating the double helix.',
    },
    {
      id: 2,
      question: 'Which enzyme is used in PCR?',
      options: ['Ligase', 'Taq Polymerase', 'Helicase', 'Primase'],
      correct: 1,
      explanation: 'Taq polymerase is the heat-stable enzyme used in PCR.',
    },
    {
      id: 3,
      question: 'How many cycles are typically used in PCR?',
      options: ['5-10', '20-40', '100+', '1-2'],
      correct: 1,
      explanation: 'Typically 25-35 cycles are used to amplify DNA.',
    },
  ];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(String(index));
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setCompleted(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <View className="flex-1 bg-white justify-center items-center px-6">
        <View className="items-center">
          <View className="w-24 h-24 bg-indigo-100 rounded-full justify-center items-center mb-6">
            <Text className="text-4xl">🎉</Text>
          </View>
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Quiz Complete!
          </Text>
          <Text className="text-5xl font-bold text-indigo-600 mb-2">
            {percentage}%
          </Text>
          <Text className="text-gray-600 text-lg mb-6">
            You got {score} out of {questions.length} correct
          </Text>
          <TouchableOpacity className="bg-indigo-600 rounded-lg px-8 py-3">
            <Text className="text-white font-bold text-lg">Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const question = questions[currentQuestion];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-6">
        {/* Progress Bar */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-gray-600 font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </Text>
            <Text className="text-indigo-600 font-bold">{Math.round(progress)}%</Text>
          </View>
          <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <View
              className="h-full bg-indigo-600"
              style={{ width: `${progress}%` }}
            />
          </View>
        </View>

        {/* Question */}
        <Text className="text-2xl font-bold text-gray-800 mb-8">
          {question.question}
        </Text>

        {/* Options */}
        <View className="gap-3 mb-8">
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              className={`p-4 rounded-lg border-2 ${
                selectedAnswer === String(index)
                  ? index === question.correct
                    ? 'bg-green-50 border-green-500'
                    : 'bg-red-50 border-red-500'
                  : 'bg-gray-50 border-gray-300'
              }`}
              onPress={() => handleAnswer(index)}
            >
              <View className="flex-row items-center">
                <View
                  className={`w-6 h-6 rounded-full border-2 justify-center items-center mr-4 ${
                    selectedAnswer === String(index)
                      ? index === question.correct
                        ? 'bg-green-500 border-green-500'
                        : 'bg-red-500 border-red-500'
                      : 'border-gray-400'
                  }`}
                >
                  {selectedAnswer === String(index) && (
                    <Ionicons
                      name={index === question.correct ? 'checkmark' : 'close'}
                      size={14}
                      color="#fff"
                    />
                  )}
                </View>
                <Text className="text-gray-800 font-semibold flex-1">
                  {option}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Explanation */}
        {selectedAnswer !== null && (
          <View className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <View className="flex-row items-start">
              <Ionicons name="information-circle" size={20} color="#3b82f6" />
              <Text className="text-blue-800 ml-3 flex-1 leading-5">
                {question.explanation}
              </Text>
            </View>
          </View>
        )}

        {/* Next Button */}
        {selectedAnswer !== null && (
          <TouchableOpacity
            className="bg-indigo-600 rounded-lg py-4 flex-row items-center justify-center"
            onPress={handleNext}
          >
            <Text className="text-white font-bold text-lg">
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}
