import React, {useState} from "react"

export default function Monster(){

    const [level, setLevel] = useState(1);

    return (
        <div className={`d-flex cursor monster level-${level}`}>
            <div> 
                L{level}
            </div>
        </div>);
}