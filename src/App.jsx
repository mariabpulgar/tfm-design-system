import React from 'react';
import './App.css'
import Divider from './components/Divider'
import Button from './components/Button'
import InputText from './components/InputText';
import Tooltip from './components/Tooltip'
import Avatar from './components/Avatar'
import ButtonGroup from './components/ButtonGroup';


function App() {
  return (
    <div>
      <ButtonGroup
        ariaLabel="Button group"
        items={[
          {
            id: 'left',
            text: 'Left'
          },
          {
            id: 'middle',
            text: 'Middle'
          },
          {
            id: 'right',
            text: 'Right'
          }
        ]}
        onItemClick={() => {}}
        size="medium"
        variant="btn-primary"
      />
    </div>    
  );
}

export default App
 
