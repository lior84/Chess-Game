import React from "react";

import './Chessboard.css';

const verticalalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard(){
    let board = [];

    //set the board squares 
    for(let i = verticalalAxis.length - 1; i >= 0 ; i--){
        for(let j = 0; j < horizontalAxis.length; j++){
            const cellPosition = i + j;
            let squareColor;
            cellPosition % 2 == 0 ? squareColor = "square black-square" : squareColor = "square white-square";
            board.push(
                <div className={squareColor}></div>
                )
        }
    }
    return <div id="chessboard">{board}</div>
}