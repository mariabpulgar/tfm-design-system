import React, { useState } from 'react';
import Dropdown from '../molecules/Dropdown';
import IconButton from '../molecules/IconButton';
import './Filtres.css';


const Filtres = ({ sections = [], onChange }) => {
  // guardamos selecciones por sección (key -> Set)
  const [selections, setSelections] = useState(() => ({}));
  // usamos un "resetVersion" para forzar que cada Dropdown se remonte al hacer "Remove all"
  const [resetVersion, setResetVersion] = useState(0);

  const handleSectionChange = (sectionKey) => (idsArray) => {
    setSelections((prev) => {
      const next = { ...prev, [sectionKey]: new Set(idsArray) };
      onChange?.(Object.fromEntries(
        Object.entries(next).map(([k, set]) => [k, Array.from(set || [])])
      ));
      return next;
    });
  };

  const clearAll = () => {
    setSelections({});
    setResetVersion((n) => n + 1); // fuerza reinicio visual de cada Dropdown
    onChange?.({});                
  };

  return (
    <aside className="filters-panel">
      <div className="filters-header">
        <h3 className="filters-title">Filtres</h3>
        <IconButton
          variant="text"
          iconName="trashIcon"
          className="filters-clear-btn"
          onClick={clearAll}
        >
          Remove all
        </IconButton>
      </div>

      <div className="filters-groups">
        {sections.map((sec) => {
          const selectedIds = Array.from(selections[sec.key] || []);
          return (
            <div key={sec.key} className="filters-group">
              <Dropdown
                // forzamos remontaje cuando reseteamos
                key={`${sec.key}-${resetVersion}`}
                title={sec.title}
                items={sec.items}
                mode="multiple"
                inline
                defaultSelected={selectedIds}
                onChange={handleSectionChange(sec.key)}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Filtres;