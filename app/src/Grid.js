import React, {useState, useContext, useEffect} from "react"
import Cell from "./Cell"
import { IndexContext, GridContext } from "./Game";

export default function Grid(props){

    const gridSize = {
        rowSize: props.rowSize,
        colSize: props.colSize
    };

    const [indexClicked, setIndexClicked] = useContext(IndexContext);
    const [gridContent, setGridContent] = useContext(GridContext);
    // console.log(indexClicked);
    // console.log(gridContent);

    let cols = [];
    
    for(let y = 1; y < gridSize.colSize + 1; y++){
        cols.push(y);
    };

    let rows = [];
    for(let i = 1; i < gridSize.rowSize + 1; i++){
        rows.push(i);

    };

    useEffect(() => {
        let grid = [];

        for(let z = 0; z < rows.length; z++){
            let cellsContent = [];
            for (let a = 0; a < cols.length; a++){
                cellsContent.push(null);
            }
            grid.push(cellsContent);
            // console.log(grid);
        }
        setGridContent(grid);
    }, [gridSize.rowSize, gridSize.colSize]);

    function handleClick(col, row, gridContent, indexClicked){
        const nextGridContent = [...gridContent];
        const nextIndexClicked = [...indexClicked];
        nextGridContent[row-1][col-1] = 1;
        nextIndexClicked[0] = col;
        nextIndexClicked[1] = row;
        setGridContent(nextGridContent);
        setIndexClicked(nextIndexClicked);
        getAdjacent(col, row);
    };

    function getAdjacent(col, row){
        // console.log("getAdjacent");
        // console.log(gridContent[col-1][row-1]);
    }
        // console.log(gridContent);

    return (<div className = "">
        {rows.map((row) => (
            <div className = "margin-col grid-col" key={row}>
                {cols.map((col) => (
                    <div className="margin-cell size-cell fill-yellow d-flex" key={col + row} onClick = {() => handleClick(col, row, gridContent, indexClicked)}>
                        <Cell rowIndex={row} colIndex={col}/>
                    </div>
                ))}
            </div>
        ))}
        
    </div>
    )
}