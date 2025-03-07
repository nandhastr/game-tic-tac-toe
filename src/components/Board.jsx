/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Square from "./Square";
import calculateWinner from "./CalculateWinner";


export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquare = squares.slice();
        nextSquare[i] = xIsNext ? "X" : "O";

        onPlay(nextSquare);
    }

    const winner = calculateWinner(squares);
    let status = "";
    if (winner) {
        status = "Winner : " + winner;
    } else {
        status = <span className={xIsNext ? "red-text" : "blue-text"}>Next Player : {xIsNext ? "X" : "O"}</span>;
    }
    return (
        <>
            <div className="status">{status}</div>
            <div className="board">
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
        </>
    );
}
