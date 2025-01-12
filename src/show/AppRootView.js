import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';

import HomePage from './screens/session/Homepage';

const AppRootView = () => {
  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1}}>
        <HomePage />
      </KeyboardAvoidingView>
  );
};

export default AppRootView;
