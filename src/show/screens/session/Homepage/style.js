import {StyleSheet} from 'react-native';
import {sizes} from 'Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2125',
  },
  googleTitle: {
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: sizes.fontSize.xxl,
    textAlign: 'center',
    width: '100%',
  },
});

export {STICKY_HEADER_HEIGHT};
