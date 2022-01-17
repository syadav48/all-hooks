import React from 'react'
import { useReducer } from 'react'


const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': 
            return{
                count: state.count + 1,
                showText: state.showText
            }
        case 'toggleShowText':
            return{
                count: state.count,
                showText: !state.showText
            }
        default: 
            return state
    }
}
//1.  when the state depends on the previous one.
//2. when the object is very complex and we need to update only few things not the whole state
function UseReducer() {
    
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})
    return (
        <div>
            <h2>{state.count}</h2>
            <button
            onClick={() => {
                dispatch({type: 'INCREMENT'}) 
                dispatch({type: 'toggleShowText'})
            }}          
            >Click Here</button>

        {state.showText && <p>This is a text</p>}

        </div>
    )
}

export default UseReducer





