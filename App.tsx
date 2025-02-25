import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import TodoProvider from './contexts/TodoContext'
import Navigation from './navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Setting a timer',
  'Warning: componentWillReceiveProps',
  'Warning: DatePickerAndroid'
]);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TodoProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </TodoProvider>
      </SafeAreaProvider>
    );
  }
}
