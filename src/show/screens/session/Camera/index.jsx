import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Pressable,
  AppState,
  Image,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {sizes} from 'Theme';
import {CustomIcon} from 'Components';
import {ColumnView} from 'Containers';

import styles from './styles';
import images from '../../../images';
import {Focus} from '../../../components/CustomIcon/icons';

const CameraBoard = ({navigation}) => {
  const camera = useRef(null);
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
    // console.log('Photo', photo);
    const {path} = photo;
    console.log('Path', path);

    setPhotoPath(path);
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
    <View style={styles.mainContainer}>
      {photoPath ? (
        <View style={{flex:1,paddingTop:sizes.padding*18}}>
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

          <Image style={{height:450,width:300,alignSelf:'center',marginTop:sizes.margin*6,borderRadius:20}} source={{uri: photoPath}} />

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
              <View style={styles.galleryContainer}>
                <Image style={styles.galleryImage} source={images.gallery} />
              </View>

              <View style={styles.searchIconContainer}>
                <CustomIcon
                  // onPress={() => console.log('search')}
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
