import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Main/Home/Home";
import AboutMe from "./components/Main/AboutMe/AboutMe";
import Skills from "./components/Main/Skills/Skills";
import Portfolio from "./components/Main/Portfolio/Portfolio";
import YouTube from './components/Main/Youtube/YouTube';
import Contacts from "./components/Main/Contacts/Contacts";

const App: React.FC = () => {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        <YouTube />
        <Contacts />
    </div>
  );
}

export default App;
