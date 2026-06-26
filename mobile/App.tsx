import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useThemeStore } from './store/themeStore';

// Screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SubjectsScreen from './screens/SubjectsScreen';
import TopicScreen from './screens/TopicScreen';
import QuizScreen from './screens/QuizScreen';
import ProgressScreen from './screens/ProgressScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import NotesScreen from './screens/NotesScreen';
import AIAssistantScreen from './screens/AIAssistantScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: true,
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: '#6366f1',
    }}
  >
    <Stack.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Subjects" component={SubjectsScreen} />
    <Stack.Screen name="Topic" component={TopicScreen} />
    <Stack.Screen name="Quiz" component={QuizScreen} />
  </Stack.Navigator>
);

const MainTabs = () => {
  const isDark = useColorScheme() === 'dark';
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ?? isDark;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: theme ? '#6b7280' : '#d1d5db',
        tabBarStyle: {
          backgroundColor: theme ? '#1f2937' : '#ffffff',
          borderTopColor: theme ? '#374151' : '#e5e7eb',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color }) => (
            <Ionicons name="trending-up" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState<string | null>(null);
  const isDark = useColorScheme() === 'dark';
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ?? isDark;

  useEffect(() => {
    // Check if user is logged in
    const bootstrapAsync = async () => {
      try {
        // Load token from storage
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        // Catch error if needed
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {userToken == null ? <AuthStack /> : <MainTabs />}
    </NavigationContainer>
  );
}
