import logo from './logo.svg';
import './App.css';
import Flow from './components/Flow';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='teste'>
          <Flow />
        </div>
        
      </header>

    </div>
  );
}

export default App;
