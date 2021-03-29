import React, {useState} from 'react';
import './App.css';
import CaesarCipher from './CaesarCipher'

function App() {
  const [value,setValue]= useState("");
  const [shiftValue,setShiftValue]= useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span className="TextField"> Value</span>
          <input type="text" onChange={(e)=>{
            setValue(e.target.value)
          }}/>
        </div>
        <div >
          <span className="TextField"> Shift</span>
          <input type="number" onChange={(e)=>{
            setShiftValue(e.target.value)
          }}/>
        </div>
        <span>{CaesarCipher(value, shiftValue)}</span>
      </header>
    </div>
  );
}

export default App;
