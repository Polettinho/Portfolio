import React, { useState } from 'react';
import './App.css';
import Siderbar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <Siderbar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
