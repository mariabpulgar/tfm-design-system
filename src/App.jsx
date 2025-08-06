import './App.css'
import IconSelector from './components/IconSelector'
import StatusLabel from './components/StatusLabel';
import Badge from './components/Badge';
import Divider from './components/Divider';
import Button from './components/Button';
import IconButton from './components/IconButton';
import InputText from './components/InputText'

function App() {

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
      <InputText></InputText>
    </div>    
  );
}

export default App
 
