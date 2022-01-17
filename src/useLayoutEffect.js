import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.value = 'Hello'
    }, [])

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    return (
        <div>
            <input ref={inputRef} value='Surya' style={{height: 50, width: 400}} />
        </div>
    )
}

export default UseLayoutEffect;

// useLayoutEffect fundamentally call ahead of useEffect during the page rendering.
//Most of the time useEffect is the right choice. If your code is causing flickering, switch to useLayout see it may helps

//useEffect runs asynchronously and after a render is painted to the screen.

//on the other hand, runs synchronously after a render but before the screen is updated. That goes:

