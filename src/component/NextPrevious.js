import React from "react";


const next = (cb) => {
    return(
        <div>
            <button onClick={e => cb(e.target.value)}>Next &gt;</button>
        </div>
    )
}

const previous = (cb) => {
    return(
        <div>
            <button onClick={e => cb(e.target.value)}>&lt; Previous</button>
        </div>
    )
}
export {next, previous}
