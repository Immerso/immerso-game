import React from 'react';
import './App.css';
import InteractiveScene from './components/three/InteractiveScene';
import Menu from './components/ui/Menu';

function App() {
  return (
    <div className="app">
      <InteractiveScene />
      <Menu />
    </div>
  );
}

export default App;