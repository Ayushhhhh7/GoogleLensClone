import React from 'react';
import PropTypes from 'prop-types';

import ColumnRowView from './ColumnRowView';

const RowView = props => (
  <ColumnRowView {...props} flexDirection={'row'}>
    {props.children}
  </ColumnRowView>
);

RowView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default RowView;
