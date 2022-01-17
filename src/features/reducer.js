import { ADD_JOB, GET_JOB } from "./actionType"



const init = {lists: []}
export const reducer = (state = init, {type, payload}) =>{
    switch(type){
        case ADD_JOB:
            return{
                ...state,
                lists:[...state.lists,payload]
            }
            case GET_JOB:
                return {
                    ...state,
                    lists : payload
                }
                default :
                return state;
    }

}