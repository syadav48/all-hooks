import React from 'react' 
import { FirstName, LastName } from './ParentComp'

const ComponentZ = () => {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return(
                <LastName.Consumer>
                    {(lname) => {
                        return (
                            <h1>My Name is {fname} {lname}</h1>
                        )
                    }}
                </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
            
        </div>
    )
}

export default ComponentZ

//here consumer will accept only the function not the value. so you have to pass a function whereas

//when youu use useContext hook then that callback function will be omitted and useContext hook will accept the 
// createcontext generator as an argument.