import React, { useState } from 'react';
import Button from './Button';
import calculate from './logic/calculate';

const Calculator = () => {
  const [Data, setData] = useState({ total: 0, next: null, operation: null });
  const updateCalc = (btnVal) => {
    const { total, operation, next } = calculate(Data, btnVal);
    setData({ total, operation, next });
  };
  const { total, operation, next } = Data;

  return (
    <ul className="container">
      <li id="logo">𝓜𝓪𝓽𝓱 𝓜𝓪𝓰𝓲𝓬</li>
      <li className="firstRow">
        {' '}
        <p>
          {operation === 'A/C' ? null : operation}
          {' '}
          {next}
        </p>
        <p className="result">{total === null ? 0 : total}</p>
      </li>
      <li className="secondRow ">
        <Button text="A/C" updateCalc={updateCalc} />
        <Button text="+/-" updateCalc={updateCalc} />
        <Button text="%" updateCalc={updateCalc} />
        <Button text="÷" updateCalc={updateCalc} />
      </li>
      <li className="thirdRow">
        <Button text="7" updateCalc={updateCalc} />
        <Button text="8" updateCalc={updateCalc} />
        <Button text="9" updateCalc={updateCalc} />
        <Button text="x" updateCalc={updateCalc} />
      </li>
      <li className="fourthRow">
        <Button text="4" updateCalc={updateCalc} />
        <Button text="5" updateCalc={updateCalc} />
        <Button text="6" updateCalc={updateCalc} />
        <Button text="-" updateCalc={updateCalc} />
      </li>
      <li className="fifthRow">
        <Button text="1" updateCalc={updateCalc} />
        <Button text="2" updateCalc={updateCalc} />
        <Button text="3" updateCalc={updateCalc} />
        <Button text="+" updateCalc={updateCalc} />
      </li>
      <li className="lastRow">
        <Button text="0" updateCalc={updateCalc} />
        <Button text="." updateCalc={updateCalc} />
        <Button text="=" updateCalc={updateCalc} />
      </li>
    </ul>
  );
};

export default Calculator;
