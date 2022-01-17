import React, { useContext } from 'react'
import { BioData } from './ComponentA'

const ComponentK = () => {
    const channelName = useContext(BioData)

    return (
        <h1>
            Hello ComponentK {channelName}
        </h1>
    )
}

export default ComponentK
