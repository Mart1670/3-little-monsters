import React, {useState, createContext} from "react"
import Grid from "./Grid"
import GridContextProvider from "./context/GridContext.js"

export const IndexContext = createContext([]);
export const GridContext = createContext([]);

export default function Game(){

    const [indexClicked, setIndexClicked] = useState([]);
    const [gridContent, setGridContent] = useState([]);

    return (
        <div>
            <GridContext.Provider value={[gridContent, setGridContent]}>
                <IndexContext.Provider value={[indexClicked, setIndexClicked]}>
                    <Grid colSize={8} rowSize={8}/>
                </IndexContext.Provider>
            </GridContext.Provider>

            <p>You clicked on: <span className="font-yellow">{indexClicked[0]}-{indexClicked[1]}</span></p>
            <div className="">
                <p>The adjacent <span className="font-yellow">index</span> cells are:</p>
                <div className="d-flex-left"> 
                    <div>
                        <div className="margin-cell size-cell fill-lite-yellow d-flex"></div>
                        <div className="margin-cell size-cell fill-yellow d-flex font-white">{indexClicked[0]}-{isNaN(indexClicked[1]-1) ? "" : indexClicked[1]-1}</div>
                        <div className="margin-cell size-cell fill-lite-yellow d-flex"></div>
                    </div>
                    <div>
                        <div className="margin-cell size-cell fill-yellow d-flex font-white">{isNaN(indexClicked[0]-1) ? "" : indexClicked[0]-1}-{indexClicked[1]}</div>
                        <div className="margin-cell size-cell level-1 d-flex font-white">X</div>
                        <div className="margin-cell size-cell fill-yellow d-flex font-white">{isNaN(indexClicked[0]+1) ? "" : indexClicked[0]+1}-{indexClicked[1]}</div>
                    </div>
                    <div>
                        <div className="margin-cell size-cell fill-lite-yellow d-flex"></div>
                        <div className="margin-cell size-cell fill-yellow d-flex font-white">{indexClicked[0]}-{isNaN(indexClicked[1]+1) ? "" : indexClicked[1]+1}</div>
                        <div className="margin-cell size-cell fill-lite-yellow d-flex"></div>
                    </div>
                    
                </div>
            </div> 
        </div>
   );
}