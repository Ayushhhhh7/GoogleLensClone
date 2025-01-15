import {StyleSheet} from 'react-native';
import {sizes} from 'Theme';

const STICKY_HEADER_HEIGHT = sizes.layout.headerHeight + sizes.padding * 4;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2125',
  },
  searchContainer: {
    position: 'absolute',
    top: STICKY_HEADER_HEIGHT,
    left: 0,
    right: 0,
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
