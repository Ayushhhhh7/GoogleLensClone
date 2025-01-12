import { StyleSheet } from 'react-native';

import { sizes } from 'Theme';

export default StyleSheet.create({
  container: {
    marginVertical: sizes.margin * 2,
    paddingHorizontal: sizes.padding * 2,
  },
  input: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: sizes.fontSize.lg,
    height: sizes.icon.md.size,
    marginHorizontal: sizes.margin * 3,
    padding: 0,
  },
});