import { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import TextAreaComp from './TextForm';


function App() {
// const [mode,Setmode]=useState(
//   color: green,
//   backgroundColor:black
// )
const [mode,Setmode] = useState('light');
const togglemode=()=>{
  if(mode==='light')
  {
    Setmode('dark');
    document.body.style.backgroundColor='black';
    }
  else
  {
    Setmode('light');
    document.body.style.backgroundColor='white';
    
  }
}
  return (
    <div className="App">
      <nav className="Navbar">
           <Navbar mode={mode} togglemode={togglemode}/>
      </nav>
      <div className="container">
          <TextAreaComp mode={mode} />
      </div>
    </div>
  );
}

export default App;
