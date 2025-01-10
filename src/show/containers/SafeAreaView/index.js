import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView as SafeAreaViewRN } from 'react-native-safe-area-context';

import { useTheme } from 'Containers';

const SafeAreaView = props => {
  const [keyboardShowing, setKeyboardShowing] = useState(false);

  const { colors } = useTheme();
  const { bottom, children, style, top } = props;

  const defaultStyle = {
    backgroundColor: colors.whiteOnly,
    flex: 1
  };

  const edges = ['right', 'left'];

  if (top) {
    edges.push('top');
  }
  if (bottom && !keyboardShowing) {
    edges.push('bottom');
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardWillShow',
      setKeyboardShowing.bind(null, true)
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      setKeyboardShowing.bind(null, false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaViewRN style={[defaultStyle, style]} edges={edges}>
      {children}
    </SafeAreaViewRN>
  );
};

SafeAreaView.defaultProps = {
  bottom: true,
  children: null,
  style: {},
  top: true
};

SafeAreaView.propTypes = {
  bottom: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.any,
  top: PropTypes.bool
};

export default SafeAreaView;
