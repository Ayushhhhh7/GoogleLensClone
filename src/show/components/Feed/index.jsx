import React from 'react';
import {Text, Image} from 'react-native';
import {sizes} from 'Theme';
import {ColumnView, RowView} from 'Containers';
import {CustomIcon, Separator} from 'Components';
import images from '../../images';
import styles from './styles';

const Feed = () => {
  return (
    <>
      <ColumnView
        marginTop={sizes.spacing.sm}
        paddingHorizontal={sizes.spacing.md}
        alignItems={'flex-start'}>
        <Image style={styles.mainImage} source={images.tata} />
        <Text numberOfLines={3} style={styles.title}>
          This superstar was Ratan Tata's closest friend shared same room, went
          for picnics,listened to songs together
        </Text>
        <RowView marginTop={sizes.spacing.sm} justifyContent="space-between">
          <RowView width="auto">
            <Image source={images.dp1} style={styles.profileImage} />
            <ColumnView
              width="auto"
              marginLeft={sizes.spacing.sm}
              alignItems="flex-start">
              <Text style={styles.sourceName}>News Hot</Text>
              <Text style={styles.sourceTime}>Youtube · 23h</Text>
            </ColumnView>
          </RowView>
          <RowView width="auto" gap={sizes.spacing.sm}>
            <CustomIcon icon={'heart'} size={sizes.icon.sm.size} />
            <CustomIcon icon={'share'} size={sizes.icon.sm.size} />
            <CustomIcon icon={'more-vert'} size={sizes.icon.sm.size} />
          </RowView>
        </RowView>
      </ColumnView>
      <Separator marginVertical={sizes.spacing.md} />

      <ColumnView
        marginTop={sizes.spacing.sm}
        paddingHorizontal={sizes.spacing.md}
        alignItems={'flex-start'}>
        <Image style={styles.mainImage} source={images.car} />
        <Text numberOfLines={3} style={styles.title}>
          A stylish sedan that became a symbol of sophistication and aspiration
          in the 70s and 80s.
        </Text>
        <RowView marginTop={sizes.spacing.sm} justifyContent="space-between">
          <RowView width="auto">
            <Image source={images.dp2} style={styles.profileImage} />
            <ColumnView
              width="auto"
              marginLeft={sizes.spacing.sm}
              alignItems="flex-start">
              <Text style={styles.sourceName}>Speedy Rush</Text>
              <Text style={styles.sourceTime}>Youtube · 18h</Text>
            </ColumnView>
          </RowView>
          <RowView width="auto" gap={sizes.spacing.sm}>
            <CustomIcon icon={'heart'} size={sizes.icon.sm.size} />
            <CustomIcon icon={'share'} size={sizes.icon.sm.size} />
            <CustomIcon icon={'more-vert'} size={sizes.icon.sm.size} />
          </RowView>
        </RowView>
      </ColumnView>
      <Separator marginVertical={sizes.spacing.md} />

      <ColumnView
        marginTop={sizes.spacing.sm}
        paddingHorizontal={sizes.spacing.md}
        alignItems={'flex-start'}>
        <Image style={styles.mainImage} source={images.cod} />
        <Text numberOfLines={3} style={styles.title}>
          Call of Duty: Modern Warfare III brings intense action and strategic
          gameplay to new heights
        </Text>
        <RowView marginTop={sizes.spacing.sm} justifyContent="space-between">
          <RowView width="auto">
            <Image source={images.dp3} style={styles.profileImage} />
            <ColumnView
              width="auto"
              marginLeft={sizes.spacing.sm}
              alignItems="flex-start">
              <Text style={styles.sourceName}>Gaming Zone</Text>
              <Text style={styles.sourceTime}>Youtube · 5h</Text>
            </ColumnView>
          </RowView>
          <RowView width="auto" gap={sizes.spacing.sm}>
            <CustomIcon icon={'heart'} size={sizes.icon.sm.size} />
            <CustomIcon icon={'share'} size={sizes.icon.sm.size} />
            <CustomIcon icon={'more-vert'} size={sizes.icon.sm.size} />
          </RowView>
        </RowView>
      </ColumnView>
      <Separator marginVertical={sizes.spacing.md} />
    </>
  );
};

export default Feed;
