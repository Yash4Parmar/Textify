import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from './components/About';
import Navbar from './components/Navbar';
import ShowAlert from './components/ShowAlert';
import TextForm from './components/TextForm';
import Contact from './components/Contact';
import SpeedTest from './components/SpeedTest';

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("dark mode enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled", "success");
    }
  }

  return (
    <Router>
      <div>
        <Navbar title="Textify" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <ShowAlert alert={alert} />
        <Routes>
          <Route exact path="/" element={
            <TextForm heading="Enter text below" mode={mode} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode} />} />
          <Route exact path="/SpeedTest" element={<SpeedTest mode={mode} />} />
        </Routes>
      </div>
    </ Router>
  );
}
export default App;