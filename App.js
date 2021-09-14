import { AuthContextProvider } from './src/context'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/stack';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
