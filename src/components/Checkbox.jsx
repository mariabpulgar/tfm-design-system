import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  disabled,
  ...props
}) => {

return (
  <div className="checkbox-container">
    <input
      type="checkbox"
      className="checkbox-input"
      id={id}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
    {label && (
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    )}
  </div>
);
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Checkbox;