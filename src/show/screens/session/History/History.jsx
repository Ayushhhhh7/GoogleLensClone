import React from 'react';
import { StyleSheet} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


const History = () => {
  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#454141',
  },
});

export default History
