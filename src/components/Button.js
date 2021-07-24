import React from 'react';
import PropTypes from 'prop-types';
import './_Button.css';
const Button = (props) => {
  return <button id={props.id}  disabled={props.disabled} onClick={props.onClick}>{props.text}</button>;
};

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  className: 'btn'
};

export default Button;
