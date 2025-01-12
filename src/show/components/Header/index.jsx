import React from 'react';
import {Pressable, Text} from 'react-native';

import {sizes} from 'Theme';
import {RowView} from 'Containers';
import {CustomIcon} from 'Components';

import styles from './styles';

const Header = () => {
  return (
    <RowView
      justifyContent="space-between"
      paddingHorizontal={sizes.padding * 5}>
      <CustomIcon icon="flask" size={sizes.icon['lg'].size} />
      <RowView
        width="auto"
        borderRadius={sizes.borderRadius * 2.5}
        backgroundColor={'#2e3133'}
        paddingHorizontal={sizes.padding * 1.5}
        paddingVertical={sizes.padding * 1.5}>
        <RowView
          width="auto"
          backgroundColor={'#1f2125'}
          borderRadius={sizes.borderRadius * 2.5}>
          <CustomIcon icon="google-logo" size={sizes.icon['sm'].size} />
          <Text style={styles.search}>Search</Text>
        </RowView>
        <CustomIcon icon="gemini-logo" size={sizes.icon['sm'].size} />
      </RowView>

      <Pressable style={styles.profileIcon}>
        <Text style={{color: '#fff'}}>A</Text>
      </Pressable>
    </RowView>
  );
};

export default Header;
