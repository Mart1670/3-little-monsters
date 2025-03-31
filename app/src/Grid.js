import React, {useState} from "react"
import Cell from "./Cell"

export default function Grid(size){

    const gridSize = {
        cellSize: size,
        rowSize: size
    };

    console.log(size);
    let cells = [];
    for(let i = 1; i < size.size + 1; i++){
        cells.push(i);
    };
    console.log(cells);

    let cols = [];
    for(let y = 1; y < size.size + 1; y++){
        cols.push(y);
    };
    console.log(cols);

    const numbers = [1,2,3,4,5,6,7,8,9]; // Cells
    const alphas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // Cols

    return (<div className = "grid">
        {cells.map((number) => (
            <div className = "grid-col margin-col">
                <div className = "grid-col">
                    {cols.map((alpha) => (
                        <div className="margin-cell">
                            {alpha}{number}
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    )
}