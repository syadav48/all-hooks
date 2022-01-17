import React, { createContext } from 'react'
import ComponentX from './ComponentX'

const FirstName = createContext()
const LastName = createContext()

const ParentComp = () => {
    return (
        <div>
            <FirstName.Provider value={'Abhishek'}>
                <LastName.Provider value={'Kummmar'}>
                    <ComponentX />
                </LastName.Provider>
            </FirstName.Provider>
            
        </div>
    )
}

export default ParentComp
export {FirstName, LastName}
