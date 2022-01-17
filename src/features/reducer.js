import { ADD_JOB, GET_JOB } from "./actionType"




export const reducer = (state ={lists:[]}, {type, payload}) =>{
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