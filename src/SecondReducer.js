import React, {useReducer} from 'react'

const fetchUsersReducer = (state, action) => {
    switch(action.type){
        case 'SUBSCRIBED':
            return{
                users: state.users.subscribed ? state.users.name : 'Surya'
            }
        default: return state
    }
}


function SecondReducer() {
    const [state, dispatch] = useReducer(
        fetchUsersReducer,
        {
            users: [
                {name: 'Surya', subscribed: false}, 
                {name: 'Suryoday', subscribed: true}
            ], 
            loading: false,
            error: false
        }
        )
    return (
        <div>
           <h2>{state.users.name}</h2>
            <button
            onClick={() => dispatch({type:'SUBSCRIBED'})}
            >
            Show Name
            </button>
        </div>
    )
}
//2. when we have complex state shape
export default SecondReducer
