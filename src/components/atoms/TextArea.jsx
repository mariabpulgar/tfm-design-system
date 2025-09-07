import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

const TextArea = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  maxLength,
  minLength,
  id,
  name,
  label,
  className = '',
  rows = 4,
  cols,
  ...props
}) => {
  const textareaId = id || name;
  const hasError = Boolean(error);

  return (
    <div className={`textarea-group ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="textarea-label">
          {label}
        </label>
      )}
      
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
        cols={cols}
        className={`textarea-input ${hasError ? 'error' : ''}`}
        {...props}
      />
      
      {hasError && (
        <span className="textarea-error-message visible">
          {error}
        </span>
      )}
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

export default TextArea;