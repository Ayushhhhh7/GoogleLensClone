import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated, ScrollView } from 'react-native';

const ColumnRowView = ({
  alignItems = 'center',
  animated = false,
  animatedStyle = null,
  backgroundColor,
  borderColor,
  borderRadius = 0,
  borderWidth = 0,
  children = null,
  flex = 0,
  flexDirection = 'column',
  flexWrap = 'nowrap',
  gap = 0,
  height = null,
  justifyContent = 'center',
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  maxHeight,
  minHeight = 0,
  overflow,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  scrollable = false,
  width = '100%',
  zIndex
}) => {
  const composedStyles = {
    backgroundColor: backgroundColor
  };

  const composeScrollableStyles = {
    alignItems,
    borderColor,
    borderRadius,
    borderWidth,
    justifyContent,
    flex,
    flexDirection,
    flexWrap,
    width,
    height,
    gap,
    marginBottom: marginBottom || marginVertical || 0,
    marginLeft: marginLeft || marginHorizontal || 0,
    marginRight: marginRight || marginHorizontal || 0,
    marginTop: marginTop || marginVertical || 0,
    maxHeight,
    minHeight,
    overflow,
    paddingBottom: paddingBottom || paddingVertical || 0,
    paddingLeft: paddingLeft || paddingHorizontal || 0,
    paddingRight: paddingRight || paddingHorizontal || 0,
    paddingTop: paddingTop || paddingVertical || 0,
    zIndex,
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
      >
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
  overflow: PropTypes.string,
  paddingBottom: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingVertical: PropTypes.number,
  scrollable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  zIndex: PropTypes.number
};

export default ColumnRowView;