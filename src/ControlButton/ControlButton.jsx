import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const ControlButton = (
  { NumberHandleClick,
    value,
    name,
    isActive,
    action },
) => (
  <button
    type="button"
    className={cn(
      'numbers__item',
      { 'numbers__item--active': isActive && action === value },
    )}
    onClick={() => {
      NumberHandleClick(value);
    }}
  >
    {name || value}
  </button>
);

ControlButton.propTypes = {
  NumberHandleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
};

export default ControlButton;
