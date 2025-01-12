import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import HomePage from './screens/session/Homepage';

const AppRootView = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
          style={{flex: 1}}>
          <HomePage />
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppRootView;
