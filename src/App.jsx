import './App.css'
import IconSelector from './components/IconSelector'
import StatusLabel from './components/StatusLabel';
import Badge from './components/Badge';
import Divider from './components/Divider';

function App() {

  return (
    <div>
      <IconSelector name="checkedIcon"/>
      <StatusLabel/>
      <Badge count={23} showIcon></Badge>
      <Divider variant="fullWidth"></Divider>
      <Divider variant="center" text="hola"></Divider>
      <Divider variant="chip" text="hola"></Divider>
    </div>    
  );
}

export default App
 
