import React, {useEffect, useMemo, useRef, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Pressable,
  AppState,
  Image,
  ScrollView,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {launchImageLibrary} from 'react-native-image-picker';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import {sizes} from 'Theme';
import {CustomIcon} from 'Components';
import {ColumnView, RowView} from 'Containers';

import styles from './styles';
import images from '../../../images';
import {Focus} from '../../../components/CustomIcon/icons';

const CameraBoard = ({navigation}) => {
  const camera = useRef(null);
  const bottomSheetRef = useRef(null);
  const [photoPath, setPhotoPath] = useState('');
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

  const clickPicture = async () => {
    const photo = await camera.current.takePhoto();
    const {path} = photo;
    setPhotoPath(path);
  };

  const handleGallery = async () => {
    const result = await launchImageLibrary();
    const filePath = result?.assets[0]?.uri;
    setPhotoPath(filePath);
  };

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const snapPoints = useMemo(() => ['35%', '100%'], []);

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
    <View style={styles.mainContainer}>
      {photoPath ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#000',
            paddingTop: sizes.padding * 18,
          }}>
          <View style={styles.headerRowPicClicked}>
            <CustomIcon
              onPress={() => setPhotoPath('')}
              size={sizes.icon['lg'].size}
              icon="back"
            />
            <CustomIcon size={sizes.icon['md'].size} icon="flash-off" />
            <Text style={styles.titleText}>Google Lens</Text>
            <CustomIcon size={sizes.icon['md'].size} icon="clock" />
            <CustomIcon size={sizes.icon['md'].size} icon="more-vert" />
          </View>

          <Image
            style={{
              height: 450,
              width: 300,
              alignSelf: 'center',
              marginTop: sizes.margin * 6,
              borderRadius: 20,
            }}
            source={{uri: photoPath}}
          />
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={false}
            backgroundStyle={{backgroundColor: '#1f2021'}}>
            <BottomSheetView style={styles.contentContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '90%',
                  paddingHorizontal: sizes.padding * 2,
                  paddingVertical: sizes.padding,
                  backgroundColor: '#2c2e30',
                  borderRadius: 20,
                  marginTop: 18,
                }}>
                <CustomIcon size={sizes.icon['md'].size} icon="google-logo" />
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginLeft: sizes.margin * 2,
                  }}
                  source={{uri: photoPath}}
                />
                <Text
                  style={{
                    color: '#cccaca',
                    marginLeft: sizes.margin * 4,
                    fontSize: sizes.fontSize.md,
                  }}>
                  Add to Search
                </Text>
              </View>
              {/* <View style={{flexDirection: 'row'}}>

              </View> */}
              <ScrollView
                style={{
                  maxHeight: 30,
                  flexDirection: 'row',
                  width: '95%',
                  marginTop: sizes.margin * 4,
                }}
                horizontal={true}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: '600',
                    textDecorationLine: 'underline',
                    marginRight: sizes.margin * 5,
                  }}>
                  All
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#cccaca',
                    marginRight: sizes.margin * 5,
                  }}>
                  Products
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#cccaca',
                    marginRight: sizes.margin * 5,
                  }}>
                  Homework
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#cccaca',
                    marginRight: sizes.margin * 5,
                  }}>
                  Visual matches
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#cccaca',
                    marginRight: sizes.margin * 5,
                  }}>
                  About this image
                </Text>
              </ScrollView>
              <RowView
                width="100%"
                justifyContent={'space-around'}
                alignItems="flex-start"
                marginTop={sizes.margin * 4}>
                <Image
                  style={{height: 200, width: 150, borderRadius: 10}}
                  source={images.m1}
                />
                <Image
                  style={{height: 200, width: 150, borderRadius: 10}}
                  source={images.m2}
                />
              </RowView>
              <RowView
                width="100%"
                justifyContent={'space-around'}
                alignItems="flex-start"
                marginTop={sizes.margin * 6}>
                <Image
                  style={{height: 200, width: 150, borderRadius: 10}}
                  source={images.m3}
                />
                <Image
                  style={{height: 200, width: 150, borderRadius: 10}}
                  source={images.m4}
                />
              </RowView>
              <RowView
                width="100%"
                justifyContent={'space-around'}
                alignItems="flex-start"
                marginTop={sizes.margin * 6}>
                <Image
                  style={{height: 200, width: 150, borderRadius: 10}}
                  source={images.m5}
                />
                <Image
                  style={{height: 200, width: 150, borderRadius: 10}}
                  source={images.m1}
                />
              </RowView>
            </BottomSheetView>
          </BottomSheet>
        </View>
      ) : (
        <>
          <Camera
            photo={true}
            ref={camera}
            style={[StyleSheet.absoluteFill, styles.camera]}
            device={device}
            isActive={true}
          />

          <View style={styles.overlay}>
            <View style={styles.focusContainer}>
              <Focus />
            </View>

            <View style={styles.headerRow}>
              <CustomIcon
                onPress={() => navigation.goBack()}
                size={sizes.icon['lg'].size}
                icon="back"
              />
              <CustomIcon size={sizes.icon['md'].size} icon="flash-off" />
              <Text style={styles.titleText}>Google Lens</Text>
              <CustomIcon size={sizes.icon['md'].size} icon="clock" />
              <CustomIcon size={sizes.icon['md'].size} icon="more-vert" />
            </View>

            <View style={styles.searchRow}>
              <Pressable
                onPress={handleGallery}
                style={styles.galleryContainer}>
                <Image style={styles.galleryImage} source={images.gallery} />
              </Pressable>

              <View style={styles.searchIconContainer}>
                <CustomIcon
                  onPress={clickPicture}
                  icon="search"
                  iconColor="#333131"
                  size={sizes.icon['lg'].size * 2}
                  containerSize={sizes.icon['lg'].containerSize * 1.5}
                />
              </View>
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.translateButton}>
                <CustomIcon
                  icon="translate"
                  size={sizes.icon['sm'].size}
                  containerSize={sizes.icon['sm'].containerSize / 2}
                />
                <Text style={styles.buttonText}>Translate</Text>
              </View>

              <View style={styles.searchButton}>
                <CustomIcon
                  iconColor={'#7faff7'}
                  icon="search"
                  size={sizes.icon['sm'].size}
                  containerSize={sizes.icon['sm'].containerSize / 2}
                />
                <View style={styles.searchTextContainer}>
                  <Text style={styles.searchButtonText}>Search</Text>
                </View>
              </View>

              <View style={styles.homeworkButton}>
                <CustomIcon
                  icon="school"
                  size={sizes.icon['sm'].size}
                  containerSize={sizes.icon['sm'].containerSize / 2}
                />
                <View style={styles.homeworkTextContainer}>
                  <Text style={styles.buttonText}>HomeWork</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default CameraBoard;
