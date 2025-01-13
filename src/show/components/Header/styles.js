import {StyleSheet} from 'react-native';

import {sizes} from 'Theme';

export default StyleSheet.create({
  profileIcon: {
    alignItems: 'center',
    backgroundColor: '#77919d',
    borderRadius: 50,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  profileIconText: {
    color: '#fff',
  },
  search: {
    color: '#fff',
    fontSize: sizes.fontSize.sm,
    fontWeight: 'bold',
    marginRight: sizes.margin * 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackgroundPressable: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#2d3034',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: sizes.padding * 4,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 2,
  },
  modalTitle: {
    marginBottom: sizes.margin * 2,
    color: '#fff',
    fontWeight: '700',
    fontSize: sizes.fontSize.lg,
  },
  profileInfoContainer: {
    paddingHorizontal: sizes.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  profileDetailContainer: {
    flex: 1,
    marginLeft: sizes.margin * 2,
  },
  profileName: {
    color: '#fff',
  },
  profileEmail: {
    color: '#77919d',
  },
  manageAccountContainer: {
    margin: sizes.margin * 2,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#474a4e',
    paddingHorizontal: sizes.padding * 4,
    paddingVertical: sizes.padding * 2,
  },
  manageAccountText: {
    color: '#fff',
  },
  separator: {
    height: 1,
    marginVertical: sizes.margin * 2,
    width: '100%',
    backgroundColor: '#77919d',
  },
});
