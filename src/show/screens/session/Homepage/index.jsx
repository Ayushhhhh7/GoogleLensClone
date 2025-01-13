import {SafeAreaView, ScrollView, Text} from 'react-native';
import React from 'react';
import {ColumnView, RowView} from 'Containers';
import {sizes} from 'Theme';

import styles from './style';
import {
  Feed,
  Header,
  InfoCards,
  QuickActions,
  SearchInput,
  Separator,
} from 'Components';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16}>
        <Header />

        <RowView paddingVertical={sizes.padding * 4}>
          <Text style={styles.googleTitle}>Google</Text>
        </RowView>
        <SearchInput />
        <QuickActions />
        <Separator />
        <InfoCards />
        <Feed />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
