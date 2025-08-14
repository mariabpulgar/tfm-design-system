import React from 'react';
import './App.css'
import StatusLabel from './components/StatusLabel'


function App() {
  return (
    <div className="centrando-el-div">
      <StatusLabel
        text="Status default"
        variant="warningIcon"
      />
    </div>    
  );
}

export default App
 
