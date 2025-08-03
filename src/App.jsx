import './App.css'
import IconSelector from './components/IconSelector'
import StatusLabel from './components/StatusLabel';
import Badge from './components/Badge';

function App() {

  return (
    <div>
      <IconSelector name="checkedIcon"/>
      <StatusLabel/>
      <Badge count={23} showIcon></Badge>
    </div>    
  );
}

export default App
 
