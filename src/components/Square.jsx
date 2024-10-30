/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Square({ value, onSquareClick }) {
    const className = value === "X" ? "red-text" : value === "O" ? "blue-text" : "";

    return (
        <button className={`square ${className}`} onClick={onSquareClick}>
            {value}
        </button>
    );
}
