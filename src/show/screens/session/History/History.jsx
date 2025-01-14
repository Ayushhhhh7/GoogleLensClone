import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { sizes } from 'Theme';
import { SafeAreaView } from 'react-native-safe-area-context';


const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>History</Text>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
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

export default History
