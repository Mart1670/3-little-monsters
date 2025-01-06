import React, {useState} from "react"
import Cell from "./Cell"

export default function Grid(size){
    return (<div className = "grid">
        {size.map()}
        <div className = "grid-row">
            <Cell />
            <Cell />
            <Cell />
        </div>
    </div>
    )
}