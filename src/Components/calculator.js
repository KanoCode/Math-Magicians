import './calculator.css';
import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      memory1: '5',
    };
    this.updateCalc = this.updateCalc.bind(this);
  }

  updateCalc(newVal) {
    const { input, memory1 } = this.state;

    // this.setState((state) => ({ input: `${state.input}${newVal}` }));
    if (newVal === '') {
      this.setState(() => ({ input: '0' }));
    } else if (newVal === '-') {
      this.setState((state) => ({ input: `-${state.input}` }));
    } else if (typeof newVal === 'number') {
      this.setState((state) => ({ input: parseInt(`${state.input}${newVal}`, 10) }));
    } else if (newVal === '÷') {
      // this.setState((state) => ({ memory1: state.input}));
      console.log(input, memory1);
      this.setState((state) => ({ memory1: parseInt(`${state.input}`, 10) }));
    }
  }

  render() {
    const { input } = this.state;
    return (
      <ul className="container">
        <li className="firstRow">
          {' '}
          <p>{input}</p>
        </li>
        <li className="secondRow">
          <Button text="A/C" updateCalc={this.updateCalc} />
          <Button text="+/-" updateCalc={this.updateCalc} />
          <Button text="%" updateCalc={this.updateCalc} />
          <Button text="÷" updateCalc={this.updateCalc} />
        </li>
        <li className="thirdRow">
          <Button text="7" updateCalc={this.updateCalc} />
          <Button text="8" updateCalc={this.updateCalc} />
          <Button text="9" updateCalc={this.updateCalc} />
          <Button text="x" updateCalc={this.updateCalc} />
        </li>
        <li className="fourthRow">
          <Button text="4" updateCalc={this.updateCalc} />
          <Button text="5" updateCalc={this.updateCalc} />
          <Button text="6" updateCalc={this.updateCalc} />
          <Button text="-" updateCalc={this.updateCalc} />
        </li>
        <li className="fifthRow">
          <Button text="1" updateCalc={this.updateCalc} />
          <Button text="2" updateCalc={this.updateCalc} />
          <Button text="3" updateCalc={this.updateCalc} />
          <Button text="+" updateCalc={this.updateCalc} />
        </li>
        <li className="lastRow">
          <Button text="0" updateCalc={this.updateCalc} />
          <Button text="." updateCalc={this.updateCalc} />
          <Button text="=" updateCalc={this.updateCalc} />
        </li>
      </ul>
    );
  }
}

export default Calculator;
