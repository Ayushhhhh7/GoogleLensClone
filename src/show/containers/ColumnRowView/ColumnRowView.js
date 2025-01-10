import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated, ScrollView } from 'react-native';

import { shadows } from 'Theme';

const ColumnRowView = ({
  alignItems,
  animated,
  animatedStyle,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  children,
  flex,
  flexDirection,
  flexGrow,
  flexWrap,
  gap,
  height,
  justifyContent,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  minHeight,
  onLayout,
  overflow,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  scrollable,
  shadow,
  shadowStyle,
  width,
  zIndex
}) => {
  const composedStyles = {
    backgroundColor: backgroundColor
  };

  const composeScrollableStyles = {
    alignItems: alignItems,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    justifyContent: justifyContent,
    flex: flex,
    flexDirection: flexDirection,
    flexGrow: flexGrow,
    flexWrap: flexWrap,
    width: width,
    height: height,
    gap: gap,
    marginBottom: marginBottom || marginVertical || 0,
    marginLeft: marginLeft || marginHorizontal || 0,
    marginRight: marginRight || marginHorizontal || 0,
    marginTop: marginTop || marginVertical || 0,
    maxHeight: maxHeight,
    minHeight: minHeight,
    overflow: overflow,
    paddingBottom: paddingBottom || paddingVertical || 0,
    paddingLeft: paddingLeft || paddingHorizontal || 0,
    paddingRight: paddingRight || paddingHorizontal || 0,
    paddingTop: paddingTop || paddingVertical || 0,
    zIndex: zIndex,
    ...(shadow && shadowStyle)
  };

  const CRWiewComponent = animated
    ? scrollable
      ? Animated.ScrollView
      : Animated.View
    : scrollable
    ? ScrollView
    : View;

  return (
    <CRWiewComponent
      keyboardShouldPersistTaps={'handled'}
      style={[
        composedStyles,
        !scrollable && composeScrollableStyles,
        animated && { ...animatedStyle }
      ]}
      contentContainerStyle={composeScrollableStyles}
      onLayout={onLayout}>
      {children}
    </CRWiewComponent>
  );
};

ColumnRowView.propTypes = {
  alignItems: PropTypes.string,
  animated: PropTypes.bool,
  animatedStyle: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  flex: PropTypes.number,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.number,
  flexWrap: PropTypes.string,
  gap: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.string,
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginHorizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginVertical: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  onLayout: PropTypes.func,
  overflow: PropTypes.string,
  paddingBottom: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingVertical: PropTypes.number,
  scrollable: PropTypes.bool,
  shadow: PropTypes.bool,
  shadowStyle: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  zIndex: PropTypes.number
};

ColumnRowView.defaultProps = {
  alignItems: 'center',
  animated: false,
  animatedStyle: null,
  borderColor: undefined,
  borderRadius: 0,
  borderWidth: 0,
  children: null,
  flex: 0,
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: 0,
  height: null,
  justifyContent: 'center',
  marginBottom: undefined,
  marginHorizontal: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  marginTop: undefined,
  marginVertical: undefined,
  maxHeight: undefined,
  minHeight: 0,
  overflow: undefined,
  paddingBottom: undefined,
  paddingHorizontal: undefined,
  paddingLeft: undefined,
  paddingRight: undefined,
  paddingTop: undefined,
  paddingVertical: undefined,
  scrollable: false,
  shadow: false,
  shadowStyle: shadows.onlyTop,
  width: '100%',
  zIndex: undefined
};

export default ColumnRowView;
