import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Text} from 'react-native';

import {CustomIcon} from 'Components';

import styles from './styles';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('MainApp')}>
        <View style={styles.buttonContent}>
          <CustomIcon icon="google-logo" />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;