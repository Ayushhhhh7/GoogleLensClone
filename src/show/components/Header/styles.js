import {StyleSheet} from 'react-native';

import {sizes} from 'Theme';

export default StyleSheet.create({
  profileIcon: {
    alignItems:'center',
    backgroundColor: '#77919d',
    borderRadius: 50,
    height: 32,
    justifyContent:"center",
    width: 32,
  },
  search: {
    color: '#fff',
    fontSize: sizes.fontSize.sm,
    fontWeight: 'bold',
    marginRight: sizes.margin*2
  },
});
