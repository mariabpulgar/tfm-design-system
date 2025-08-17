import React, { useState } from 'react';
import IconSelector from './IconSelector';
import './Dropdown.css';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null); // guarda la opción seleccionada

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="button-text">
          {selected ? selected.label : title}
        </span>
        <IconSelector
          name={isOpen ? 'dropTopIcon' : 'dropDownIcon'}
          size="medium"
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
          color="currentColor"
        />
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;