import './calculator.css';
import React from 'react';
// import PropTypes from 'prop-types';
import ButtonRow from './buttons-rows';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { name } = this.props;
    return (
      <>
        <ButtonRow />
      </>
    );
  }
}

// Calculator.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Calculator;
