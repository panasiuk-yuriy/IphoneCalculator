import React, { useState } from 'react';
import ControlButtons from './ControlButtons/ControlButtons';
import Numbers from './Numbers/Numbers';
import './styles/general.scss';
import { functions } from './helpers/helpers';

const App = () => {
  const [visibleValue, setVisibleValue] = useState('0');
  const [firstValue, setfirstValue] = useState('0');
  const [action, setAction] = useState('');
  const [secondValue, setSecondValue] = useState('0');
  const [isNewValue, setIsNewValue] = useState(false);
  const [isNewCalculation, setIsNewCalculation] = useState(false);
  const [isClear, setIsClear] = useState(false);

  const setVisibleAndSecondValue = (arg) => {
    setVisibleValue(arg);
    setSecondValue(arg);
  };

  // eslint-disable-next-line consistent-return
  const NumberHandleClick = (number) => {
    if (isNewCalculation && isClear) {
      setAction('');
    }

    if (visibleValue === '0' && number === '.') {
      setVisibleAndSecondValue(prev => prev + number);
    } else if (isNewValue && number === '.') {
      setVisibleAndSecondValue(`${0 + number}`);
      setIsNewValue(false);
    } else if (visibleValue.split('.').length === 2 && number === '.') {
      return null;
    } else if (isNewValue || visibleValue === '0') {
      setVisibleAndSecondValue(number);
      setIsNewValue(false);
      setIsNewCalculation(false);
      setIsClear(true);
    } else if (visibleValue === '-0' && number !== '.') {
      setVisibleAndSecondValue(`-${number}`);
    } else {
      setVisibleAndSecondValue(prev => prev + number);
      setIsClear(true);
    }
  };

  const onSetAction = (symbol) => {
    setfirstValue(visibleValue);

    if (!isNewValue && !isNewCalculation) {
      calculate();
    }

    setIsClear(true);
    setIsNewCalculation(false);
    setIsNewValue(true);
    setSecondValue(visibleValue);
    setAction(symbol);
  };

  const EqualAction = () => {
    if (action.length < 1) {
      return;
    }

    setfirstValue(visibleValue);
    calculate();
    setIsNewValue(true);
    setIsNewCalculation(true);

    if (!isClear && secondValue !== '0') {
      setVisibleValue(secondValue);
      setfirstValue(secondValue);
      setIsClear(true);
    } else {
      // eslint-disable-next-line consistent-return
      return null;
    }
  };

  const choosingAction = (func, first, second) => {
    const value = functions[func](first, second);

    setVisibleValue(`${value}`);
    setfirstValue(`${value}`);
  };

  // eslint-disable-next-line consistent-return
  const calculate = () => {
    if (action === '') {
      return null;
    }

    const firstNumber = parseFloat(firstValue);
    const secondNumber = parseFloat(secondValue);

    choosingAction(action, firstNumber, secondNumber);
  };

  const clear = () => {
    if (isClear) {
      setVisibleValue('0');
      setIsClear(false);
    } else {
      setVisibleAndSecondValue('0');
      setAction('');
      setIsNewCalculation(false);
    }
  };

  const setMinus = () => {
    if (isNewValue && !isNewCalculation) {
      setVisibleValue(`-0`);
    } else if (!visibleValue.includes('-')) {
      setVisibleAndSecondValue(prev => `-${prev}`);
      setIsNewCalculation(true);
    } else {
      setVisibleAndSecondValue(visibleValue.slice(1));
      setIsNewCalculation(true);
    }

    setIsNewValue(false);
  };

  const persentHandler = () => {
    const firstNumber = parseFloat(firstValue);
    const secondNumber = parseFloat(secondValue);

    if (firstNumber === 0) {
      setVisibleAndSecondValue(`${1 * secondNumber / 100}`);
    } else {
      setVisibleAndSecondValue(`${firstNumber * secondNumber / 100}`);
    }

    setIsNewValue(true);
    setIsNewCalculation(true);
  };

  return (
    <div className="calculator">
      <h1>calculator</h1>
      <p className="value">{visibleValue.slice(0, 12)}</p>
      <div className="buttons">
        <Numbers
          clickHandler={NumberHandleClick}
        />
        <ControlButtons
          isClear={isClear}
          isActive={isNewValue}
          action={action}
          clear={clear}
          EqualAction={EqualAction}
          onSetSymbol={onSetAction}
          setMinus={setMinus}
          persentHandler={persentHandler}
        />
      </div>
    </div>
  );
};

export default App;
