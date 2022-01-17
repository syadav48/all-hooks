import React, { useRef } from 'react'

function UseRef() {
    const inputRef = useRef(null)

    const onClick = () => {
        console.log(inputRef.current.value) //just like we do in e.target.value
        inputRef.current.focus() // with the help of focus method we can highlight or focus the element
        inputRef.current.value = '' //we can empty the filled value so quickly, we dont need hook to do that
    }
    return (
        <div>
            <h1>Name</h1>
            <input type='text' ref={inputRef} />
            <button onClick={onClick}>Focus Input</button>
        </div>
    )
}

export default UseRef


//1.Manipulating the DOM/ Accessing the DOM Node