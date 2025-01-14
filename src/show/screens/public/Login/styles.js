import {StyleSheet} from 'react-native';

import {sizes} from 'Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f2125',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: sizes.padding * 6,
    paddingVertical: sizes.padding * 2,
    borderRadius: sizes.borderRadius * 2,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sizes.fontSize.md,
  },
});