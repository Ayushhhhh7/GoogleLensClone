import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {sizes} from 'Theme';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('MainApp')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f2125',
  },
  button: {
    backgroundColor: '#4285F4',
    paddingHorizontal: sizes.padding * 8,
    paddingVertical: sizes.padding * 3,
    borderRadius: sizes.borderRadius * 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: sizes.fontSize.lg,
    fontWeight: '600',
  },
});

export default Login;
