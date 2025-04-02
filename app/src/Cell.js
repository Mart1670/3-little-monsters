import React, {useState} from "react"
import Monster from "./Monster"

export default function Cell(props) {

    const cellIndex =  {
        rowIndex: props.rowIndex,
        colIndex: props.colIndex
    }

    const [monster, setMonster] = useState();
    

    function handleClick(){
        setMonster(<Monster />);
    };

    return (
        <div className="cursor fill-yellow size-cell" onClick={handleClick}>
            {monster}
        </div>);
}