import React, {createRef} from 'react';
import {View, TextInput} from 'react-native';

import {sizes} from 'Theme';
import {RowView} from 'Containers';
import {CustomIcon} from 'Components';

import styles from './styles';

const searchInputRef = createRef();

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <RowView
        alignItems="center"
        backgroundColor="#2e3133"
        borderRadius={sizes.borderRadius * 7}
        paddingHorizontal={sizes.padding * 4}
        paddingVertical={sizes.padding * 3}>
        <CustomIcon
          pointer={false}
          onPress={()=>searchInputRef.current.focus()}
          icon="search"
          size={sizes.icon['lg'].size}
          iconColor="#9AA0A6"
        />

        <TextInput
          ref={searchInputRef}
          placeholder="Search"
          placeholderTextColor="#9AA0A6"
          style={styles.input}
        />

        <RowView width="auto" gap={sizes.padding * 2}>
          <CustomIcon icon="mic" size={sizes.icon['lg'].size} />
          <CustomIcon icon="add-photo" size={sizes.icon['lg'].size} />
        </RowView>
      </RowView>
    </View>
  );
};

export default SearchInput;
