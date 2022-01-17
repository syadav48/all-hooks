import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            setData(response.data)
        });
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;
        
        let longestName = '';
        for(let i=0; i<comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName
            } 
        }
        console.log('This was Computed')
        return longestName
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])

    return (
        <div>
            {getLongestName}
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

export default UseMemo

// every time toggle button gets clicked the whole componenet rerenders again and also find longest name function recomputed again
// this is the wastage of runtime data
// so we should have a longest name ilf whenever data changes
// this can be solved by useMemo
// so using dependancy Array we can compute the data on any dependency