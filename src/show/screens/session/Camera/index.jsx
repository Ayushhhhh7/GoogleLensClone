import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Pressable,
  AppState,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {CustomIcon} from 'Components';
import {ColumnView, RowView} from 'Containers';

import images from '../../../images';
import {Focus} from '../../../components/CustomIcon/icons';

import {sizes} from 'Theme';

const CameraBoard = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');

  useEffect(() => {
    requestPermission();

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
    <View flex={1} backgroundColor="#1f2125">
      <Camera
        style={[StyleSheet.absoluteFill, {bottom: 90}]}
        device={device}
        isActive={true}
      />

      <View
        alignItems="center"
        justifyContent="space-between"
        flex={1}
        backgroundColor="transparent">
        <View style={{position: 'absolute', top: 50}}>
          <Focus />
        </View>
        {/* 1st Row  */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}></View>
        {/* search Icon Row */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            marginBottom: sizes.margin * 15,
          }}>
          <View
            style={{
              position: 'absolute',
              left: 10,
            }}>
            <Image style={{borderRadius:50,borderWidth:2,borderColor:'#fff',height: 60, width: 60}} source={images.gallery} />
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 50,
              paddingLeft: sizes.padding*4,
              paddingTop: sizes.padding*4,
            }}>
                <View >
                <CustomIcon
              onPress={() => console.log('search')}
              icon="search"
              iconColor="#333131"
              size={sizes.icon['lg'].size*2}
              containerSize={sizes.icon['lg'].containerSize*1.5}
            />
                </View>
    
          </View>
        </View>

        {/* LAST ROW TRANSLATE SEARCH   */}

        <View
          style={{
            flexDirection: 'row',
            marginBottom: sizes.margin * 10,
            gap: 15,
          }}>
          <View
            style={{
              borderColor: '#4e535c',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: sizes.padding * 2,
              borderWidth: 1,
              paddingVertical: sizes.padding,
              borderRadius: 20,
            }}>
            <CustomIcon
              icon="translate"
              size={sizes.icon['sm'].size}
              containerSize={sizes.icon['sm'].containerSize / 2}
            />
            <Text style={{color: '#fff', fontSize: 12}}>Translate</Text>
          </View>

          {/* Search  */}
          <View
            style={{
              backgroundColor: '#2c3c54',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: sizes.padding * 2,
              paddingRight: sizes.padding * 3,
              paddingVertical: sizes.padding,
              borderRadius: 20,
            }}>
            <CustomIcon
              iconColor={'#7faff7'}
              icon="search"
              size={sizes.icon['sm'].size}
              containerSize={sizes.icon['sm'].containerSize / 2}
            />

            <View style={{marginBottom: sizes.margin}}>
              <Text style={{color: '#7faff7', fontSize: 12}}>Search</Text>
            </View>
          </View>

          {/* HomeWOrk   */}
          <View
            style={{
              borderColor: '#4e535c',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: sizes.padding * 2,
              borderWidth: 1,
              paddingVertical: sizes.padding,
              borderRadius: 20,
            }}>
            <CustomIcon
              icon="school"
              size={sizes.icon['sm'].size}
              containerSize={sizes.icon['sm'].containerSize / 2}
            />
            <View style={{marginBottom: sizes.margin}}>
              <Text style={{color: '#fff', fontSize: 12}}>HomeWork</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2125',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cornerBrackets: {
    flex: 1,
    margin: 40,
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
