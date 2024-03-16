import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name = 'Sayak' secondName = 'Riju'/>
      <Greet name = 'Arvind' secondName = 'Badam'/>
      <Greet name = 'Rohit'/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
