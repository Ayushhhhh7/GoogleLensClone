import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';

import HomePage from './screens/session/Homepage';

const AppRootView = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#1f2125', flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1}}>
        <HomePage />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppRootView;
