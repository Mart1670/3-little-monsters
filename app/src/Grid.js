import React, {useState, useContext} from "react"
import Cell from "./Cell"
import { IndexContext } from "./Game";

export default function Grid(props){

    const gridSize = {
        rowSize: props.rowSize,
        colSize: props.colSize
    };

    const [indexClick, setIndexClick] = useContext(IndexContext);

    console.log(indexClick);
    let rows = [];
    for(let i = 1; i < gridSize.rowSize + 1; i++){
        rows.push(i);
    };

    let cols = [];
    for(let y = 1; y < gridSize.colSize + 1; y++){
        cols.push(y);
    };

    return (<div className = "">
        {rows.map((row) => (
            <div className = "margin-col grid-col" key={row}>
                {cols.map((col) => (
                    <div className="margin-cell size-cell fill-yellow d-flex" key={col + row} onClick = {() => setIndexClick(col.toString()+"-"+row.toString())}>
                        <Cell rowIndex={row} colIndex={col}/>
                    </div>
                ))}
            </div>
        ))}
    </div>
    )
}