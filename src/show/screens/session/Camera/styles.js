import { StyleSheet } from "react-native";

import {sizes} from 'Theme'

export default  styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1f2125',
    },
    camera: {
      bottom: 90,
    },
    container: {
      flex: 1,
      backgroundColor: '#1f2125',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 1,
      backgroundColor: 'transparent',
    },
    focusContainer: {
      position: 'absolute',
      top: 50,
    },
    headerRowPicClicked: {
      alignSelf: 'center',
      width: '90%',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerRow: {
      alignSelf: 'center',
      position: 'absolute',
      top: 80,
      width: '90%',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    titleText: {
      color: '#fff',
      fontSize: sizes.fontSize.lg,
      fontWeight: '600',
      marginBottom: sizes.margin * 2,
    },
    searchRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      marginBottom: sizes.margin * 15,
    },
    galleryContainer: {
      position: 'absolute',
      left: 10,
    },
    galleryImage: {
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#fff',
      height: 60,
      width: 60,
    },
    searchIconContainer: {
      backgroundColor: '#fff',
      borderRadius: 50,
      paddingLeft: sizes.padding * 4,
      paddingTop: sizes.padding * 4,
    },
    bottomRow: {
      flexDirection: 'row',
      marginBottom: sizes.margin * 10,
      gap: 15,
    },
    translateButton: {
      borderColor: '#4e535c',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: sizes.padding * 2,
      borderWidth: 1,
      paddingVertical: sizes.padding,
      borderRadius: 20,
    },
    searchButton: {
      backgroundColor: '#2c3c54',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: sizes.padding * 2,
      paddingRight: sizes.padding * 3,
      paddingVertical: sizes.padding,
      borderRadius: 20,
    },
    homeworkButton: {
      borderColor: '#4e535c',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: sizes.padding * 2,
      borderWidth: 1,
      paddingVertical: sizes.padding,
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 12,
    },
    searchButtonText: {
      color: '#7faff7',
      fontSize: 12,
    },
    searchTextContainer: {
      marginBottom: sizes.margin,
    },
    homeworkTextContainer: {
      marginBottom: sizes.margin,
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
    text: {
      color: '#ffffff',
      fontSize: 16,
      marginBottom: 12,
      textAlign: 'center',
    },
  });