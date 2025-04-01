import React, {useState} from "react"
import Monster from "./Monster.js"

export default function Cell(props) {

    const cellIndex =  {
        rowIndex: props.rowIndex,
        colIndex: props.colIndex
    }

    return (
        <div>
            <Monster />
        </div>);
}