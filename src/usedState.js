import React, {useState} from 'react'

const UsedState = () => {
    const [text, setText] = useState('')
    
    const handleClick = () => {
        alert(`${text} submitted`)
    }
    return (
        <div>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default UsedState
