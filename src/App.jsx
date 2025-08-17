import React from 'react';
import './App.css'
import AlertBox from './components/AlertBox';
import ButtonGroup from './components/ButtonGroup'


function App() {
  return (
    <div>
      <ButtonGroup></ButtonGroup>
      <AlertBox
        dismissible
        message="This is an informational alert. Toggle dismissible to show/hide the close button."
        onClose={() => {}}
        title="Information"
        variant="info"
      />
    </div>    
  );
}

export default App
 
