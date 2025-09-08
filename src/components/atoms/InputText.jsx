import React from 'react';
import PropTypes from 'prop-types';
import './InputText.css';
import '../../styles/tokens.css'

const InputText = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  type = 'text',
  maxLength,
  minLength,
  id,
  name,
  label,
  className = '',
  ...props
}) => {
  const inputId = id || name;
  const hasError = Boolean(error);

  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        className={`input-text ${hasError ? 'error' : ''}`}
        {...props}
      />
      
      {hasError && (
        <span className="input-error-message visible">
          {error}
        </span>
      )}
    </div>
  );
};

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'url']),
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default InputText;