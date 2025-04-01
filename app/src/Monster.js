import React, {useState} from "react"

export default function Monster(){

    const [level, setLevel] = useState(1);

    return (
        <div className="level-1">
            L{level}
        </div>);
}