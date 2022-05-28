import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const handleClick = (event) => {
    const { updateCalc } = props;
    updateCalc(event.target.outerText);
  };
  const { text } = props;

  return (
    <button onClick={handleClick} type="button">
      {text}
    </button>
  );
};
Button.propTypes = {
  updateCalc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
