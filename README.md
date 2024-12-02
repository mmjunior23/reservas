npx create-expo-app --template expo-template-blank

npx expo install react-dom react-native-web @expo/metro-runtime
npx expo install react-native
npx expo install expo-sqlite
npm install @reduxjs/toolkit react-redux
npm install @react-native-picker/picker
npm install typescript @types/react @types/react-native --save-dev

npm install @prisma/client
npm install --save-dev prisma
npx prisma migrate dev
npx prisma generate

Gerar pastas nativas do Android
npx expo prebuild --clean
Funciona somente com emulador
npx expo run:android
