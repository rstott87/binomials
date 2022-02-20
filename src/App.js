
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [number,setNumber] = useState({
    first: 2,
    second:4
  })

  const handleChange =(e)=>{
    setNumber({
      ...number,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }
  console.log(number);
  return (
    <div className="App">
          <div className='quadriaticFormula'>
        x<sup>2</sup> {`+ ${Number.isNaN(parseInt(number.first)+parseInt(number.second)) ? ' ' : parseInt(number.first)+parseInt(number.second)}x + ${number.first*number.second}`} 
      </div>
      <div className="squareContainer">
        <div className="topX display"> X</div>
        <div className="topNumber display">{number.first > 0 ? `+${number.first}` : number.first}</div>
        <div className="bottomX display">X</div>
        <div className="bottomNumber display">{number.second > 0 ? `+${number.second}` : number.second}</div>
        <div className="squareTL square"> X <sup>2</sup> </div>
        <div className="squareTR square"> {`${number.first}X`}</div>
        <div className="squareBL square"> {`${number.second}X`}</div>
        <div className="squareBR square"> {number.first*number.second}</div>
      </div>
      <h1>Binomials</h1>
      <div>
        <form className='binomialsForm'>
          <label> {`(X + `}    
            <input 
              type="number" 
              min={-99}
              max={99}
              name="first"
              value={number.first}  
              onChange={handleChange}  />
            )
          </label>
          <label> {`(X + `}
            <input 
              type="number"
              min={-99}
              max={99}
              name="second"
              value={number.second} 
              onChange={handleChange}/>
            )
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
