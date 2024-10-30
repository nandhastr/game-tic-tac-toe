
import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
}

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  const moves = history.map((squares, move) => {
    let desc = '';
    if (move > 0) {
      desc = 'Go to move #' + move;
    } else {
      desc = 'Go to game start'
    }

    return (
      <li key={move}>
        <button className="jumTo" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  });


  return (
    <>
      <div className="container">
        <div className="game">
          <div className="game-board">
            <Board xIsNext={ xIsNext } squares= {currentSquare} onPlay = {handlePlay} />
          </div>
          <div className="game-info">
            <ol>{ moves }</ol>
          </div>
        </div>
      </div>
    </>
  )
}

