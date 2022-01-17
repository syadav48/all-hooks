import React, { useCallback, useState } from 'react'
import Child from './Child'
const UseCallback = () => {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState('NA NANA NANANANA NANANANNANANNANANANANANA NA')

    const returnComment = useCallback(() => {
        return data;
    },[data])
    return (
        <div>
            <Child returnComment={returnComment} />
            <button 
            onClick={() => setToggle(!toggle)
            }>
            {''}
            Toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </div>
    )
}

export default UseCallback

//useCallback return its function when the dependencies changes.
// while useMemo call its function and returns the result when the dependencies changes.
