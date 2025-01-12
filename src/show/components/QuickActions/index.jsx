import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {RowView} from 'Containers';
import {CustomIcon} from 'Components';
import {sizes} from 'Theme';

import styles from './styles';

const quickActions = [
  {
    icon: 'image-search',
    label: 'Search',
    color: '#BBA247',
    bgColor: '#3E3A2F', // Darker shade of gold
  },
  {
    icon: 'translate',
    label: 'Translate',
    color: '#4B88E5',
    bgColor: '#2F3543', // Darker shade of blue
  },
  {
    icon: 'music-note',
    label: 'Music',
    color: '#8E4B4B',
    bgColor: '#3E2F2F', // Darker shade of red
  },
  {
    icon: 'school',
    label: 'Education',
    color: '#3E7D67',
    bgColor: '#2F3D37', // Darker shade of green
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
