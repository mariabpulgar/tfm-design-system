import React, { useState } from 'react';
import IconSelector from './IconSelector';
import Checkbox from './Checkbox';
import './Dropdown.css';

const Dropdown = ({ title, items, mode = 'single', defaultSelected = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null); // guarda la opción seleccionada
  const [selectedSet, setSelectedSet] = useState(() => new Set(defaultSelected));
  const keyFor = (item, index) => item.id ?? item.label ?? String(index);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  const handleToggleMultiple = (item, index) => (e) => {
  const k = keyFor(item, index);
  const next = new Set(selectedSet);
  if (e.target.checked) next.add(k);
  else next.delete(k);
  setSelectedSet(next);
  onChange?.(Array.from(next));
};

const multipleSummary = () => {
  const count = selectedSet.size;
  if (count === 0) return title;
  if (count === 1) return '1 seleccionado';
  return `${count} seleccionados`;
};

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="button-text">
          {mode === 'single' ? (selected ? selected.label : title) : multipleSummary()}
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
              onClick={mode === 'single' ? () => handleSelect(item) : undefined}
            >
              {mode === 'single' ? (
                <a href={item.link}>{item.label}</a>
              ) : (
                <div className="dropdown-checkbox-row" onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    id={`dd-opt-${keyFor(item, index)}`}
                    label={item.label}
                    checked={selectedSet.has(keyFor(item, index))}
                    onChange={handleToggleMultiple(item, index)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;