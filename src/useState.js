import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(true)


    return (
        <div>
            <h2>{count}</h2>
            <button
            onClick={() => {
                setCount(count + 1)
                setShowText(!showText)
            }}          
            >Click Here</button>

        {showText && <p>This is a text</p>}

        </div>
    )
}

export default UseState

//if we want to manage two state in a single event then we should use useReducer.
//Or, the state depends on the previous one. It will give you a more predictable state transition.
