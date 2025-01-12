import {SafeAreaView, ScrollView, Text} from 'react-native';
import React from 'react';
import {ColumnView, RowView} from 'Containers';
import {sizes} from 'Theme';

import styles from './style';
import {
  Header,
  InfoCards,
  SearchInput,
  Separator,
  QuickActions,
} from 'Components';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <RowView paddingVertical={sizes.padding * 4}>
          <Text style={styles.googleTitle}>Google</Text>
        </RowView>
        <SearchInput />
        <QuickActions />
        <Separator />
        <InfoCards />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
