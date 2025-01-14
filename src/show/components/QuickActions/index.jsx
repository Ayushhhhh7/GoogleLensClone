import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

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
  const [isVisible, setIsVisible] = React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 0);
    }, [])
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, {width: '100%'}]}>
      <RowView style={styles.container}>
        {isVisible &&
          quickActions.map((action, index) => (
            <Animated.View
              style={[
                styles.button,
                {
                  flex: 1,
                  backgroundColor: action.bgColor,
                },
              ]}
              key={index}
              entering={FadeInRight.delay(index * 200)}>
              <RowView width="auto" marginRight={-sizes.margin * 2}>
                <CustomIcon
                  icon={action.icon}
                  size={sizes.icon['lg'].size}
                  iconColor={action.color}
                />
              </RowView>
            </Animated.View>
          ))}
      </RowView>
    </ScrollView>
  );
};

export default QuickActions;