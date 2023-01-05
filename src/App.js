import { useState } from "react";

function Square({ value, onSquareClick }) {
  // <!------------------- Square()
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
} // <!------------------------------------------------------------ Square()

export default function Board() {
  // <!----------------------------- Board()
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  let loser;
  let instructLineOne;
  let instructLineTwo;
  let instructLineThree;
  let instructLineFour;
  let bufficornBrigade;

  function handleClick(i) {
    // <!----------------------------- handleClick()
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (XisNext) {
      nextSquares[i] = "🦬";
    } else {
      nextSquares[i] = "🦙";
    }
    setSquares(nextSquares);
    setXisNext(!XisNext);
  } // <!--------------------------------------------------- handleClick()
  if (winner) {
    status = winner + winner + winner + "'s Win!";
    loser = (XisNext ? "🦬" : "🦙") + (XisNext ? "🦬" : "🦙") + "'s SUCK!";
  } else {
    status = "Next player: " + (XisNext ? "🦬" : "🦙");
    loser = "FIGHT! FIGHT!";
  }
  instructLineOne = "Take turns clicking on";
  instructLineTwo = "squares. The 1st player";
  instructLineThree = "to get all 3-in-row will";
  instructLineFour = "be declared the winner!";
  bufficornBrigade = "🦬 Buffaloes vs llamas 🦙";

  return (
    <>
      <p>
        Frankenmiller's Tic-Tac-Toe game
        <br />
        Created January 2023 in ReactJS
      </p>
      <div className="bufficorns">{bufficornBrigade}</div>
      <div className="gamebox">
        <div className="status">{status}</div>
        <div className="loser_box">{loser}</div>
        <div className="instructions" id="line_one">
          {instructLineOne}
        </div>
        <div className="instructions" id="line_two">
          {instructLineTwo}
        </div>
        <div className="instructions" id="line_three">
          {instructLineThree}
        </div>
        <div className="instructions" id="line_four">
          {instructLineFour}
        </div>
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
} // <!------------------------------------------------------------- Board()

function calculateWinner(squares) {
  // <!------------------ calculateWinner()
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} // <!---------------------------------------------------- calculateWinner()
