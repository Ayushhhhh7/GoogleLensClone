import {View, SafeAreaView, Text, Pressable} from 'react-native';
import React from 'react';
import {ColumnView, RowView} from 'Containers';
import {CustomIcon} from 'Components';
import {sizes} from 'Theme';

import styles from './style';
import Header from '../../../components/Header';

const HomePage = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ColumnView>
        <Header />
        <RowView paddingVertical={sizes.padding * 4}>
          <Text style={styles.googleTitle}>Google</Text>
        </RowView>
      </ColumnView>
    </SafeAreaView>
  );
};

export default HomePage;
