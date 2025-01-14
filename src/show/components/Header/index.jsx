import React, {useState} from 'react';
import FastImage from 'react-native-fast-image'
import {Image, View, Modal, Pressable, Text} from 'react-native';

import {sizes} from 'Theme';
import {RowView} from 'Containers';
import {CustomIcon} from 'Components';

import styles from './styles';
import images from '../../images';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <RowView
        justifyContent="space-between"
        paddingHorizontal={sizes.padding * 5}
        marginTop={sizes.margin * 2}>
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

        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.profileIcon}>
          <Text style={styles.profileIconText}>A</Text>
        </Pressable>

        <ProfileMenu
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </RowView>
    </>
  );
};

const ProfileMenu = ({onClose, visible}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable onPress={onClose} style={styles.modalPressable}>
          <FastImage style={styles.modalImage} source={images.profile} />
        </Pressable>
      </View>
    </Modal>
  );
};

export default Header;
