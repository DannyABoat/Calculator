
import Button from './components/button';
import Container from './components/container';
import Numbers from './components/numbers';
import Screen from './components/screen';
import React from 'react';
import './App.css';

const Math = require("mathjs");


const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {

  const [result, setResult] = React.useState([]);

  function handleClick(e) {
    setResult([...result, e.target.innerHTML])
    console.log(result)
  }

  function clear() {
    setResult([])
  }

  function getEqual() {
    const arr = result.join("");
    const equal = Math.evaluate(arr);
    console.log(equal)
    setResult(equal)
  }

  return (
    <div className="App">
      <Container>
        <Screen value={result}/>
        <Numbers>
          {
          btnValues.flat().map((item, i) => {
            return (
              <Button
                key={i}
                className={item === "=" 
                ? "equals" 
                : (item === "+/-" || item === "%" || item === "/" || item === "*" || item === "-" || item === "+") 
                ? "operator"
                : item === "C"
                ? "reset"
                : ""}
                value={item}
                onClick={item === "C" 
                ? clear 
                : item === "="
                ? getEqual
                : handleClick}
              />
            );
          })
        }
        </Numbers>
      </Container>
    </div>
  );
}

export default App;

