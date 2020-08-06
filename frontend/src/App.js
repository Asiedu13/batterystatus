import React from "react";
import "./App.css";
import Header from './components/Header'
import Main from './components/Main'
import Batdet from './components/BatDet'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <Header label="Battery Manager" />
      <Main />
      <Batdet />
      <About />
    </div>
  );
}

export default App;
