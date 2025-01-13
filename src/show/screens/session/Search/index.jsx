import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {SearchInput} from 'Components';

import styles from './styles';

const Search = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput leftIcon={'back'} leftIconOnPress={()=>navigation.goBack()}/>
    </SafeAreaView>
  );
};

export default Search;
