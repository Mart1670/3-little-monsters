import React, {useState, createContext, useContext} from "react"
import Grid from "./Grid"

export const IndexContext = createContext(null);


export default function Game(){

    const [indexClicked, setIndexClicked] = useState();

    return (
        <div>
                <IndexContext.Provider value={[indexClicked, setIndexClicked]}>
                    <Grid colSize={8} rowSize={8}/>
                </IndexContext.Provider>

            <p>You clicked on: {indexClicked}</p>
        </div>
   );
}