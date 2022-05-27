import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { updateCalc } = this.props;
    updateCalc(event.target.outerText);
    // const convertToNum = parseInt(event.target.outerText, 10);
    // console.log(convertToNum);
  }

  render() {
    const { text } = this.props;
    return (
      <button onClick={this.handleClick} type="button">
        {text}
      </button>
    );
  }
}
Button.propTypes = {
  updateCalc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
