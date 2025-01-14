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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalPressable: {
    paddingVertical: sizes.padding*4,
    width: '85%',
    backgroundColor:'#2d3034',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
  modalImage: {
    width: 600,
    height: 600,
    borderRadius: 8,
    resizeMode: 'contain',
  },
});
