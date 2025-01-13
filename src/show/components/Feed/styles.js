import {StyleSheet} from 'react-native';
import {sizes} from 'Theme';

export default StyleSheet.create({
  mainImage: {
    borderRadius: sizes.image.borderRadius,
    height: sizes.image.height * 3,
    width: '100%',
  },
  title: {
    marginTop: sizes.spacing.md,
    fontSize: sizes.fontSize.lg,
    textAlign: 'left',
    color: '#fff',
    fontWeight: '600',
  },
  profileImage: {
    height: sizes.icon.md.size,
    width: sizes.icon.md.size,
    borderRadius: sizes.icon.md.size,
  },
  sourceName: {
    fontSize: sizes.fontSize.sm,
    color: '#fff',
  },
  sourceTime: {
    fontSize: sizes.fontSize.xs,
    color: '#b5aeae',
  },
});
