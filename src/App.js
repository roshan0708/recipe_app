import React from 'react';
import './App.css';
import Cover from "./components/Cover/cover.component";
import Navbar from "./components/Navbar/navbar.component";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
    </div>
  );
}

export default App;
