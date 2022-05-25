import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.value = this.props;
    this.position = this.props;
  }

  render() {
    const { value } = this.props;
    const { className } = this.props;
    const { type } = this.props;
    return (
      <>
        <input type={type} value={type === 'text' ? null : value} className={className} />
      </>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
