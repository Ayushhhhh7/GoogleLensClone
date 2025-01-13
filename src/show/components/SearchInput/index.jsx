import React, {createRef} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {sizes} from 'Theme';
import {RowView} from 'Containers';
import {CustomIcon} from 'Components';

import styles from './styles';

const searchInputRef = createRef();

const SearchInput = props => {
  const navigation = useNavigation();
  const {
    leftIcon = 'search',
    leftIconOnPress = () => navigation.navigate('Search'),
    value,
    onChangeText,
  } = props;

  return (
    <View style={styles.container}>
      <RowView
        alignItems="center"
        backgroundColor="#2e3133"
        borderRadius={sizes.borderRadius * 7}
        paddingHorizontal={sizes.padding * 4}
        paddingVertical={
          leftIcon == 'search' ? sizes.padding * 3 : sizes.padding
        }>
        <CustomIcon
          pointer={false}
          onPress={leftIconOnPress}
          icon={leftIcon}
          size={sizes.icon['lg'].size}
          iconColor="#9AA0A6"
        />
        <Pressable
          onPress={leftIcon == 'search' ? leftIconOnPress : () => {}}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginBottom: sizes.margin,
          }}>
          <TextInput
            {...(leftIcon == 'search' ? {pointerEvents: 'none'} : {})}
            editable={leftIcon == 'search' ? false : true}
            ref={searchInputRef}
            placeholder="Search"
            placeholderTextColor="#9AA0A6"
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
          />
        </Pressable>

        <RowView width="auto" gap={sizes.padding * 2}>
          <CustomIcon
            onPress={() => console.log('Mic')}
            icon="mic"
            size={sizes.icon['lg'].size}
          />
          <CustomIcon icon="add-photo" size={sizes.icon['lg'].size} />
        </RowView>
      </RowView>
    </View>
  );
};

export default SearchInput;
