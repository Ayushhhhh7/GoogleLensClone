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
  },
  modalPressable: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  modalImage: {
    borderRadius: 8,
  },
});
