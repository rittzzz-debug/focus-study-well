# Focus Study Well - Mobile App

## 📱 React Native Mobile Application

A complete mobile application for iOS and Android built with React Native, Expo, and TypeScript.

---

## 🚀 Features

✅ **Authentication** - Login/Register with validation
✅ **Subject Selection** - Choose learning level (Bachelor's, Postgraduate, Research)
✅ **Topic Reading** - Full content with diagrams and explanations
✅ **Interactive Quizzes** - MCQ, True/False, Image-based questions
✅ **Progress Tracking** - Monitor learning with stats and achievements
✅ **Bookmarks** - Save topics for offline access
✅ **Personal Notes** - Write and sync notes
✅ **AI Assistant** - Chat with AI for doubts
✅ **Dark Mode** - Beautiful dark theme
✅ **Offline Support** - Work without internet
✅ **Push Notifications** - Study reminders
✅ **Dark/Light Theme** - User preference

---

## 📋 Prerequisites

- Node.js 16+
- Expo CLI: `npm install -g expo-cli`
- iOS: Xcode (Mac only)
- Android: Android Studio

---

## 🛠️ Installation

### 1. Install Dependencies

```bash
cd mobile
npm install
```

### 2. Start Development Server

```bash
npm start
```

You'll see a QR code in the terminal.

---

## 📱 Running on Devices

### iOS (Mac Only)

```bash
npm run ios
```

### Android

```bash
npm run android
```

### Web (Preview Only)

```bash
npm run web
```

---

## 📲 Using Expo Go App

**Easiest Method:**

1. Download **Expo Go** from App Store or Play Store
2. Run `npm start`
3. Scan the QR code with your phone camera
4. Open the Expo Go app
5. App launches instantly!

---

## 🏗️ Building APK (Android)

### Create EAS Account

```bash
npm install -g eas-cli
eas login
```

### Build APK

```bash
eas build --platform android --local
```

Or for cloud build:

```bash
eas build --platform android
```

APK will be available for download.

---

## 🍎 Building IPA (iOS)

### Build IPA

```bash
eas build --platform ios
```

Then:

```bash
eas submit --platform ios
```

---

## 📁 Project Structure

```
mobile/
├── App.tsx                    # Main app component
├── app.json                   # Expo configuration
├── eas.json                   # Build configuration
├── screens/
│   ├── SplashScreen.tsx
│   ├── auth/
│   │   ├── LoginScreen.tsx
│   │   └── RegisterScreen.tsx
│   ├── HomeScreen.tsx
│   ├── SubjectsScreen.tsx
│   ├── TopicScreen.tsx
│   ├── QuizScreen.tsx
│   ├── ProgressScreen.tsx
│   ├── BookmarksScreen.tsx
│   ├── NotesScreen.tsx
│   ├── AIAssistantScreen.tsx
│   └── ProfileScreen.tsx
├── store/
│   ├── authStore.ts
│   ├── themeStore.ts
│   └── dataStore.ts
└── assets/
    ├── icon.png
    ├── splash.png
    └── adaptive-icon.png
```

---

## 🔧 Configuration

### Environment Variables

Create `.env` file:

```bash
cp .env.example .env
```

### API Integration

Update `API_URL` in `.env` to your backend server.

---

## 📦 Available Scripts

```bash
# Development
npm start              # Start Expo development server
npm run android        # Run on Android emulator
npm run ios            # Run on iOS simulator
npm run web            # Run on web browser

# Building
npm run build:android  # Build APK
npm run build:ios      # Build IPA

# Publishing
npm run submit:android # Submit to Google Play
npm run submit:ios     # Submit to App Store
```

---

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to change colors.

### App Icons

Replace images in `assets/`:
- `icon.png` - App icon (1024x1024)
- `splash.png` - Splash screen (1242x2436)
- `adaptive-icon.png` - Android adaptive icon

### App Name

Edit `app.json`:

```json
{
  "name": "Focus Study Well",
  "slug": "focus-study-well"
}
```

---

## 🐛 Troubleshooting

### App Won't Load

```bash
rm -rf node_modules
npm install
npm start
```

### Clear Cache

```bash
npm start -- --clear
```

### Check Dependencies

```bash
npm list
```

---

## 📤 Distribution

### Google Play Store

1. Generate signing key
2. Build production APK
3. Submit to Play Store
4. Wait for review (24-48 hours)

### Apple App Store

1. Setup Apple Developer Account
2. Create app bundle
3. Submit via Xcode
4. Wait for review (1-3 days)

---

## 📚 Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [React Navigation](https://reactnavigation.org/)

---

## 🤝 Support

For issues or questions, contact support@focusstudywell.com

---

**Built with ❤️ for learners on the go!**
