import './App.css'
import IconSelector from './components/IconSelector'
import StatusLabel from './components/StatusLabel';
import Badge from './components/Badge';
import Divider from './components/Divider';
import Button from './components/Button';
import IconButton from './components/IconButton';
import InputText from './components/InputText'
import TextArea from './components/TextArea';
import React, { useState } from 'react';


function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <IconSelector name="checkedIcon"/>
      <StatusLabel/>
      <Badge count={23} showIcon></Badge>
      <Divider variant="fullWidth"></Divider>
      <Divider variant="center" text="hola"></Divider>
      <Divider variant="chip" text="hola"></Divider>
      <Button text="Button" variant="btn-text" size="small"></Button>
      <IconButton></IconButton>
      <InputText
          label="Teléfono"
          type="tel"
          placeholder="(555) 123-4567"
          id="phone"
          name="phone"
          maxLength={15}
        />
      <TextArea
        label="Escribe tu mensaje"
        placeholder="Escribe aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={200}
        minLength={10}
        name="mensaje"
        error={text.length > 0 && text.length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : ''}
      />
    </div>    
  );
}

export default App
 
