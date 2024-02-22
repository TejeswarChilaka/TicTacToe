// import logo from './logo.svg';
import './App.css';

function Square ({value}){
  return(
    
    <>
    <button className='square'>{value}</button>
    </>
  )
}

function Board() {
  return(
    <>
<div className='board-row'>
  <Square value ="1"></Square>
  <Square value ="1"></Square>
  <Square value ="1"></Square>
</div>
<div className='board-row'>
  <Square value ="1"></Square>
  <Square value ="1"></Square>
  <Square value ="1"></Square>
</div>
<div className='board-row'>
  <Square value ="1"></Square>
  <Square value ="1"></Square>
  <Square value ="1"></Square>
</div>

    </>
  )
}



function App() {
  return (
    <div className='App'>
    <Board></Board>
    </div>
  );
}

export default App;
