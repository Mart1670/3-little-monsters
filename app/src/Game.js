import React, {useState, createContext, useContext} from "react"
import Grid from "./Grid"

export const IndexContext = createContext(null);

export default function Game(){

    const [indexClick, setIndexClick] = useState();

    return (
        <div>
            <IndexContext.Provider value={[indexClick, setIndexClick]}>
                <Grid colSize={8} rowSize={8}/>
            </IndexContext.Provider>
            <p>You clicked on: {indexClick}</p>
        </div>
   );
}