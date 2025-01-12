import {StyleSheet} from 'react-native';

import {sizes} from 'Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2125',
    paddingTop: sizes.padding*5
  },
  googleTitle: {
    color: '#fff',
    fontSize: sizes.fontSize.xxl,
    fontWeight: '500',
  },
});
