import React, { useEffect } from 'react'

const Child = ({returnComment}) => {
    useEffect(() => {
        console.log('Function was called')
    }, [returnComment])


    return (
        <div>
            {returnComment('Surya')}
        </div>
    )
}

export default Child
