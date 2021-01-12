import React from 'react';
import PropTypes from 'prop-types';
import ControlButton from '../ControlButton/ControlButton';
import './ControlButtons.scss';

const ControlButtons = (
  { clear,
    EqualAction,
    onSetSymbol,
    setMinus,
    persentHandler,
    action,
    isActive,
    isClear },
) => (
  <>
    <div className="controls__top">
      <ControlButton
        NumberHandleClick={clear}
        value={isClear ? 'C' : 'AC'}
      />
      <ControlButton
        NumberHandleClick={setMinus}
        value="+/-"
      />
      <ControlButton
        NumberHandleClick={persentHandler}
        value="%"
      />
      <ControlButton
        isActive={isActive}
        action={action}
        NumberHandleClick={onSetSymbol}
        value="/"
      />
    </div>

    <div className="controls__right">
      <ControlButton
        isActive={isActive}
        action={action}
        NumberHandleClick={onSetSymbol}
        name="X"
        value="*"
      />
      <ControlButton
        isActive={isActive}
        action={action}
        NumberHandleClick={onSetSymbol}
        value="-"
      />
      <ControlButton
        isActive={isActive}
        action={action}
        NumberHandleClick={onSetSymbol}
        value="+"
      />
      <ControlButton
        NumberHandleClick={EqualAction}
        value="="
      />
    </div>
  </>
);

ControlButtons.propTypes = {
  clear: PropTypes.func.isRequired,
  EqualAction: PropTypes.func.isRequired,
  isClear: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  onSetSymbol: PropTypes.func.isRequired,
  setMinus: PropTypes.func.isRequired,
  persentHandler: PropTypes.func.isRequired,
};

export default ControlButtons;
