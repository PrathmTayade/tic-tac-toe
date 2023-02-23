import { useState } from "react";
import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="h-20 w-20 ring ring-slate-600 hover:bg-slate-300  dark:text-white dark:ring-slate-400     dark:hover:bg-slate-600 "
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Game() {
  const [whosNext, setWhosNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(clickedSquare) {
    setHistory([...history, clickedSquare]);
    setWhosNext(!whosNext);
  }

  return (
    <div className="">
      <div className="">
        <Board
          whosNext={whosNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

export function Board({ whosNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const clickedSquare = squares.slice();

    if (whosNext) {
      clickedSquare[i] = "X";
    } else {
      clickedSquare[i] = "O";
    }

    onPlay(clickedSquare);
  }

  const winner = calculateWinner(squares);
  let message;

  if (winner) {
    message = "Winner is " + winner;
  } else {
    message = "Next Player is " + (whosNext ? "X" : "O");
  }

  return (
    <div className="flex-auto p-4 dark:bg-slate-800">
      <div className="container  flex flex-col items-center  justify-center">
        <div className="  grid-row-3 grid  grid-cols-3  gap-1   ">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className="p-5 text-2xl font-semibold dark:text-slate-100 ">
          {message}
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const winningSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningSet.length; i++) {
    const [a, b, c] = winningSet[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
