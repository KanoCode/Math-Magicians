import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Buttons-Rows.css';

class ButtonRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const checkBtn = (className) => {
      if (className === 'firstRow') {
        return <Button type="number" value={null} className={className} />;
      }
      if (className === 'secondRow') {
        return (
          <>
            <Button type="button" value="AC" className={className} />
            <Button type="button" value="+/-" className={className} />
            <Button type="button" value="%" className={className} />
            <Button type="button" value="÷" className={className} />
          </>
        );
      }
      if (className === 'thirdRow') {
        return (
          <>
            <Button type="button" value="7" className={className} />
            <Button type="button" value="8" className={className} />
            <Button type="button" value="9" className={className} />
            <Button type="button" value="x" className={className} />
          </>
        );
      }
      if (className === 'fourthRow') {
        return (
          <>
            <Button type="button" value="4" className={className} />
            <Button type="button" value="5" className={className} />
            <Button type="button" value="6" className={className} />
            <Button type="button" value="-" className={className} />
          </>
        );
      }
      if (className === 'fifthRow') {
        return (
          <>
            <Button type="button" value="1" className={className} />
            <Button type="button" value="2" className={className} />
            <Button type="button" value="3" className={className} />
            <Button type="button" value="+" className={className} />
          </>
        );
      }
      return (
        <>
          <Button type="button" value="0" className={className} />
          <Button type="button" value="." className={className} />
          <Button type="button" value="=" className={className} />
        </>
      );
    };
    return <li className="btn-container">{checkBtn(className)}</li>;
  }
}

ButtonRow.propTypes = {
  className: PropTypes.string.isRequired,
};
export default ButtonRow;
