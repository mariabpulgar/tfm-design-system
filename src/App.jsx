import React from 'react';
import './App.css'
import Avatar from  './components/Avatar'



function App() {
  return (
    <div className="centrando-el-div">
      <Avatar
        fallback="initials"
        initials="auto"
        initialsCount={2}
        mode="img"
        name="Ana Álvarez"
        size="m"
      />
    </div>    
  );
}

export default App
 
