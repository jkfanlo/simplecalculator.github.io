import React, { useRef, useState } from 'react'
import './App.css';

function App() {
  const [result, setResult] = useState(0)
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  function plus(e) {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result + Number(inputRef.current.value);
    })
  }

  function minus(e) {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result - Number(inputRef.current.value)
    })
  }

  function multiply(e) {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result * Number(inputRef.current.value);
    })
  }
  function divide(e) {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result / Number(inputRef.current.value);
    })
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  // reset result 
  function restResult(e) {
    e.preventDefault();
    setResult((result) => result * 0);
    inputRef.current.value = 0;
  }

  return (

    <>
    <h1>Simplest Working Calculator</h1>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          id="number"
          pattern="[0-9]"
          placeholder="Type a number"
        />
        <br />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput} className="btn1">reset input</button>
        <button onClick={restResult} className="btn2">reset result</button>
      </form>
    </>
  );
}

export default App;
