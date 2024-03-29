// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";


function Square({ value, onClick }) {
  return (
    <>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className = "board-row">
        <Square value = {squares[0]} onClick = {() => handleClick(0)}></Square>
        <Square value = {squares[1]} onClick = {() => handleClick(1)}></Square>
        <Square value = {squares[2]} onClick = {() => handleClick(2)}></Square>
      </div>
      <div className = "board-row">
        <Square value = {squares[3]} onClick = {() => handleClick(3)}></Square>
        <Square value = {squares[4]} onClick = {() => handleClick(4)}></Square>
        <Square value = {squares[5]} onClick = {() => handleClick(5)}></Square>
      </div>
      <div className = "board-row">
        <Square value = {squares[6]} onClick = {() => handleClick(6)}></Square>
        <Square value = {squares[7]} onClick = {() => handleClick(7)}></Square>
        <Square value = {squares[8]} onClick = {() => handleClick(8)}></Square>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

export default App;
