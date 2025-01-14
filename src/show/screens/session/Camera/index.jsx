import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Pressable,
  AppState,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {CustomIcon} from 'Components';
import {ColumnView, RowView} from 'Containers';

import {sizes} from 'Theme';

const CameraBoard = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        requestPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [requestPermission]);

  const openSettings = async () => {
    await Linking.openSettings();
  };

  if (!hasPermission) {
    return (
      <ColumnView backgroundColor="#1f2125" flex={1} paddingHorizontal={20}>
        <Text style={styles.messageText}>
          To search with Google Lens, allow camera access
        </Text>
        <Pressable onPress={openSettings} style={styles.settingsButton}>
          <View style={styles.iconContainer}>
            <CustomIcon icon="settings" iconColor="black" />
          </View>
          <Text style={styles.settingsButtonText}>Go to Settings</Text>
        </Pressable>
      </ColumnView>
    );
  }

  if (device == null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No camera device found</Text>
      </View>
    );
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2125',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  messageText: {
    textAlign: 'center',
    fontSize: sizes.fontSize.md,
    color: '#fff',
  },
  settingsButton: {
    marginTop: sizes.margin * 4,
    paddingVertical: sizes.padding * 4,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bb4d9',
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
  },
  settingsButtonText: {
    fontWeight: '600',
    fontSize: sizes.fontSize.sm,
  },
});

export default CameraBoard;
