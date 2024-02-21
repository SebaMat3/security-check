import React from 'react';
import { UseState } from './Components/UseState';
import { ClassState } from './Components/ClassState/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
    </div>
  );
}

export default App;