import React from 'react';
import './Numbers.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { numbers } from '../helpers/helpers';

const Numbers = ({ clickHandler }) => (
  <>
    <div className="numbers">
      {numbers.map(item => (
        <button
          type="button"
          className={cn(
            'numbers__item',
            { 'numbers__item--zero': item === '0' },
          )}
          onClick={() => clickHandler(item)}
        >
          {item}
        </button>
      ))}
    </div>

  </>
);

Numbers.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Numbers;
