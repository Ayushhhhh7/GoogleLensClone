import {StyleSheet} from 'react-native';

import {sizes} from 'Theme';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.padding * 2,
    paddingVertical: sizes.padding * 2,
    gap: sizes.padding * 2,
  },
  card: {
    borderWidth: 2,
    borderColor: '#2e3133',
    borderRadius: sizes.borderRadius * 4,
    paddingLeft: sizes.padding * 3,
    paddingVertical: sizes.padding,
    width: 160,
    justifyContent: 'space-around',
  },
  title: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: sizes.fontSize.md,
  },
  subtitle: {
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: sizes.fontSize.md,
  },
});
