import {StyleSheet} from 'react-native';
import {sizes} from 'Theme';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.padding * 2,
    paddingVertical: sizes.padding * 2,
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#2e3133',
    borderRadius: sizes.borderRadius * 8,
    paddingVertical: sizes.padding *1.5,
    marginHorizontal: sizes.margin,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
