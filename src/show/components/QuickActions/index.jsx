import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';

import {sizes} from 'Theme';
import {RowView} from 'Containers';
import {CustomIcon} from 'Components';

import styles from './styles';

const quickActions = [
  {
    icon: 'image-search',
    label: 'Search',
    color: '#e4c34d',
    bgColor: '#3E3A2F',
  },
  {
    icon: 'translate',
    label: 'Translate',
    color: '#4B88E5',
    bgColor: '#2F3543', 
  },
  {
    icon: 'school',
    label: 'Education',
    color: '#3E7D67',
    bgColor: '#2F3D37', 
  },
  {
    icon: 'music-note',
    label: 'Music',
    color: '#8E4B4B',
    bgColor: '#3E2F2F', 
  },

];

const QuickActions = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, {width: '100%'}]}>
      <RowView style={styles.container}>
        {quickActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              {
                flex: 1,
                backgroundColor: action.bgColor,
              },
            ]}
            activeOpacity={0.7}
            onPress={() => console.log(`Pressed ${action.label}`)}>
            <RowView width="auto" marginRight={-sizes.margin * 2}>
              <CustomIcon
                icon={action.icon}
                size={sizes.icon['lg'].size}
                iconColor={action.color}
              />
            </RowView>
          </TouchableOpacity>
        ))}
      </RowView>
    </ScrollView>
  );
};

export default QuickActions;
