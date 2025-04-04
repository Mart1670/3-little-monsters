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

            <p>You clicked on: {indexClicked[0]}-{indexClicked[1]}</p>
            <div>
                <p>The adjacent index cells are:</p>
                <p>Up: {indexClicked[0]}-{indexClicked[1]-1}</p>
                <p>Right: {indexClicked[0]-1}-{indexClicked[1]}</p>
                <p>Down: {indexClicked[0]}-{indexClicked[1]+1}</p>
                <p>Left: {indexClicked[0]+1}-{indexClicked[1]}</p>
            </div> 
        </div>
   );
}