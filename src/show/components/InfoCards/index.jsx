import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import {sizes} from 'Theme';
import {RowView} from 'Containers';
import {CustomIcon} from 'Components';

import styles from './styles';

const InfoCards = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Gurugram</Text>
        <RowView width="auto" justifyContent="space-between">
          <Text style={styles.subtitle}>30°</Text>
          <RowView marginTop={sizes.margin} width="auto">
            <CustomIcon
              icon="moon"
              size={sizes.icon.md.size}
              iconColor="#c8dbfc"
            />
          </RowView>
        </RowView>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Air quality · 170</Text>
        <RowView width="auto" justifyContent="space-between">
          <Text style={styles.subtitle}>Moderate</Text>
          <View
            backgroundColor={'#fffe01'}
            borderRadius={sizes.borderRadius * 4}
            marginRight={sizes.margin * 2}>
            <CustomIcon
              containerSize={sizes.icon.sm.containerSize / 1.75}
              icon="waves"
              size={sizes.icon.sm.size}
              iconColor="#c8dbfc"
            />
          </View>
        </RowView>
      </View>

      <View style={styles.card}>
        <RowView justifyContent="flex-start">
          <CustomIcon
            icon="settings"
            containerSize={sizes.icon.sm.containerSize/1.5}
            size={sizes.icon.md.size}
            iconColor="#c8dbfc"
          />
          <Text
            style={[
              styles.title,
              {
                color: '#c8dbfc',
                marginBottom: sizes.margin * 2,
                marginLeft: -sizes.margin ,
              },
            ]}>
            Settings
          </Text>
        </RowView>
        <Text
          style={[
            styles.subtitle,
            {fontSize: sizes.fontSize.sm, color: '#b1b5bc'},
          ]}>
          Customize your space
        </Text>
      </View>
    </ScrollView>
  );
};

export default InfoCards;
