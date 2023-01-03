import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
} // Square()

export default function Board() {
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // <!--handleClick()
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (XisNext) {
      nextSquares[i] = "O";
    } else {
      nextSquares[i] = "X";
    }
    setSquares(nextSquares);
    setXisNext(!XisNext);
  } // <!-------------------------handleClick()

  return (
    <>
      <p>
        Frankenmiller's Tic-Tac-Toe game
        <br />
        Created January 2023 in ReactJS
      </p>
      <div className="gamebox">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <br />
      <div className="footer">
        <p>linkedin.com/in/frankenmiller</p>
        <p>github.com/frankenmiller</p>
      </div>
    </>
  );
} // Board()
