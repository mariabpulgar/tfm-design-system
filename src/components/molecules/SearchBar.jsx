import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import InputText from '../atomos/InputText';
import IconButton from './IconButton';

function SearchBar({ placeholder = 'Search' }) {
  return (
    <div className="search-bar">
      <InputText
        id="no-label-input"
        name="noLabelInput"
        onChange={() => {}}
        placeholder={placeholder}   // ← ahora viene por prop
        value=""
      />
      <IconButton
        iconName="searchIcon"
        onClick={() => {}}
        size="extraLarge"
        variant="primary"
      />
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
