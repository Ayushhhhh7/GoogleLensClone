import React from 'react';
import PropTypes from 'prop-types';

import ColumnRowView from './ColumnRowView';

const ColumnView = props => (
  <ColumnRowView {...props} flexDirection={'column'}>
    {props.children}
  </ColumnRowView>
);

ColumnView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default ColumnView;
