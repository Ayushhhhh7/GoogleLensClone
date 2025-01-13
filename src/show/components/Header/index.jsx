import {View} from 'react-native';
import React, {useState} from 'react';
import {Modal, Pressable, Text} from 'react-native';

import {sizes} from 'Theme';
import {RowView} from 'Containers';
import {CustomIcon, Separator} from 'Components';

import styles from './styles';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
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
        <Pressable
          onPress={onClose}
          style={styles.modalBackgroundPressable}
        />

        <View style={styles.modalContainer}>
          <RowView width="100%">
            <View style={styles.closeIconContainer}>
              <CustomIcon
                onPress={onClose}
                icon="close"
                size={sizes.icon['lg'].size}
              />
            </View>
            <Text style={styles.modalTitle}>
              Google
            </Text>
          </RowView>

          <View style={styles.profileInfoContainer}>
            <Pressable
              onPress={() => {}}
              style={styles.profileIcon}>
              <Text style={styles.profileIconText}>A</Text>
            </Pressable>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.profileName}>Ayush</Text>
              <Text style={styles.profileEmail}>ayushdhingra4500@gmail.com</Text>
            </View>
            <CustomIcon size={sizes.icon['lg'].size} icon="drop-down" />
          </View>

          <View style={styles.manageAccountContainer}>
            <Text style={styles.manageAccountText}>Manage your Google Account</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </View>
    </Modal>
  );
};

export default Header;