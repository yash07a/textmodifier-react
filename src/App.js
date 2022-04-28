import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
   {/* if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#495057'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }*/}
    var ele = document.getElementsByName("inlineRadioOptions");
    for(var i = 0; i < ele.length; i++) 
    {
      if(ele[i].checked)
      {
        var col = ele[i].value;
        setMode(col);
        document.body.style.backgroundColor = col
      } 
    }
  }
  return(
    <div>
      <Navbar title="TextBased" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text below" mode={mode}/>
      </div>
      <div className="container my-3">
        {/*<TextForm heading="Enter the text below"/> <About/>*/}
      </div>
    </div>
  );
}

export default App;
