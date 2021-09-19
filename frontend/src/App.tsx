import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './component/TestComponent';
import { StyledBaru } from './TestStyle';

function App() {

  const [shouldChangeColor, setShouldChangeColor] = useState<boolean>(false)

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <TestComponent dataSource="string" counter="string juga" />
    

      <TestComponent dataSource="string" counter="string juga" isComplete={true}/> */}
      <button style={{marginTop: '20px'}} onClick={() => setShouldChangeColor(!shouldChangeColor)}>Toggle color</button>
      <StyledBaru 
        shouldChangeColor={shouldChangeColor}
      > 
        Ini dari styled component
      </StyledBaru>
    </div>
  );
}

export default App;
