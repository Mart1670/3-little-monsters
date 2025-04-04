import React, {useState} from "react"
import Cell from "./Cell"

export default function Grid(props){

    const gridSize = {
        rowSize: props.rowSize,
        colSize: props.colSize
    };

    console.log(props);
    let rows = [];
    for(let i = 1; i < gridSize.rowSize + 1; i++){
        rows.push(i);
    };
    console.log(rows);

    let cols = [];
    for(let y = 1; y < gridSize.colSize + 1; y++){
        cols.push(y);
    };
    console.log(cols);

    const numbers = [1,2,3,4,5,6,7,8,9]; // Rows
    const alphas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // Cols

    return (<div className = "">
        {rows.map((row) => (
            <div className = "margin-col grid-col" key={row}>
                {cols.map((col) => (
                    <div className="margin-cell size-cell fill-yellow d-flex" key={col + row}>
                        <Cell rowIndex={row} colIndex={col}/>
                    </div>
                ))}
            </div>
        ))}
    </div>
    )
}