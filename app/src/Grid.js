import React, {useState, useContext, createContext, useEffect} from "react"
import Cell from "./Cell"
import { IndexContext } from "./Game";

export const GridContext = createContext([]);

export default function Grid(props){

    const gridSize = {
        rowSize: props.rowSize,
        colSize: props.colSize
    };

    const [indexClicked, setIndexClicked] = useContext(IndexContext);
    const [gridContent, setGridContent] = useState(GridContext);

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
            console.log(grid);
        }
        setGridContent(grid);
    }, [gridSize.rowSize, gridSize.colSize]);

    function handleClick(col, row, gridContent){
        console.log(gridContent);
        const nextGridContent = [...gridContent];
        console.log("nextGridContent:");
        console.log(nextGridContent);
        nextGridContent[row-1][col-1] = 1;
        setGridContent(nextGridContent);
        console.log("gridContent:");
        console.log(gridContent);
    };
        console.log(gridContent);

    return (<div className = "">
        <GridContext.Provider value={[gridContent, setGridContent]}>
            {rows.map((row) => (
                <div className = "margin-col grid-col" key={row}>
                    {cols.map((col) => (
                        <div className="margin-cell size-cell fill-yellow d-flex" key={col + row} onClick = {() => handleClick(col, row, gridContent)}>
                            <Cell rowIndex={row} colIndex={col}/>
                        </div>
                    ))}
                </div>
            ))}
        </GridContext.Provider>
    </div>
    )
}