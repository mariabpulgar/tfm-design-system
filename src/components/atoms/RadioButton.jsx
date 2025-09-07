import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({
  id,
  name,
  label,
  value,
  checked,
  onChange,
  disabled,
  ...props
}) => {

return (
  <div className="radioButton-container">
    <input
      type="radio"
      className="radioButton-input"
      id={id}
      name={name}
      value={value}      
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
    {label && (
      <label htmlFor={id} className="radioButton-label">
        {label}
      </label>
    )}
  </div>
);
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default RadioButton;