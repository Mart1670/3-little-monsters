import React, { createContext, useState, children } from "react";

const GridContext = createContext({
    gridContent: [],
    setGrid: (grid) => {}
});

export default function GridContextProvider(){

    const [gridContent, setGridContent] = useState([]);

    function setGrid(grid){
        setGridContent(grid);
    }

    const value={gridContent:gridContent, setGrid:setGrid}

    return (
        <GridContext.Provider value={value}>
            {children}
        </GridContext.Provider>
    )
};
