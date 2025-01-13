import React from 'react';
import PropTypes from 'prop-types';
import Svg from 'react-native-svg';
import {Pressable} from 'react-native';

import * as Icons from './icons';

const ICON_SIZES = {
  sm: {
    size: 20,
    containerSize: 44,
  },
  md: {
    size: 24,
    containerSize: 44,
  },
  lg: {
    size: 28,
    containerSize: 44,
  },
};

const formatIconName = name => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const CustomIcon = ({
  bgColor = 'transparent',
  borderRadius,
  containerSize,
  disabled = false,
  filled = false,
  icon = null,
  iconColor = '#FFFFFF',
  onLongPress = () => {},
  onPress = () => {},
  pointer= false,
  position = null,
  rounded = true,
  size,
  sizePreset = 'md',
}) => {
  const finalSize = size || ICON_SIZES[sizePreset].size;
  const finalContainerSize =
    containerSize || ICON_SIZES[sizePreset].containerSize;

  const IconComp = icon ? Icons[formatIconName(icon)] : null;

  if (!IconComp) return null;

  return (
    <Pressable
      disabled={disabled}
      {...(pointer && {pointerEvents: ' none'})}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
        height: finalContainerSize,
        width: finalContainerSize,
        ...(rounded && {borderRadius: borderRadius || finalContainerSize / 2}),
        ...(position && position),
      }}
      onLongPress={onLongPress}
      onPress={onPress}>
      <Svg
        fill="none"
        height={finalSize}
        viewBox="0 0 32 32"
        width={finalSize}
        xmlns="http://www.w3.org/2000/svg">
        <IconComp filled={filled} iconColor={iconColor} />
      </Svg>
    </Pressable>
  );
};

CustomIcon.propTypes = {
  bgColor: PropTypes.string,
  borderRadius: PropTypes.number,
  containerSize: PropTypes.number,
  disabled: PropTypes.bool,
  filled: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  position: PropTypes.object,
  rounded: PropTypes.bool,
  size: PropTypes.number,
  sizePreset: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default CustomIcon;
