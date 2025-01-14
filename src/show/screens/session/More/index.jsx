import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {sizes} from 'Theme';

const More = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>More</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f2125',
  },
  text: {
    color: '#FFFFFF',
    fontSize: sizes.fontSize.lg,
  },
});

export default More;
