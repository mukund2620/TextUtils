
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert ({
      msg: message,
      type: type
    })

    setTimeout(() => {

      setAlert(null)
      
    }, 2000);
  }

  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode'
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert = {showAlert} heading="Enter text to analyze" mode={mode}/>
      </div>

      

    </>
  );
}

export default App;
