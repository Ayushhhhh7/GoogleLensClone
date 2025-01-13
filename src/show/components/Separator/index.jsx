import React from 'react';
import { View } from 'react-native';

import { sizes } from 'Theme';

const Separator = ({
  color = '#2e3133',
  paddingHorizontal,
  marginVertical,
}) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: color,
        marginVertical: marginVertical || sizes.margin,
        marginHorizontal: paddingHorizontal || 0,
      }}
    />
  );
};

export default Separator;