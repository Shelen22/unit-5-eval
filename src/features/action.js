import { ADD_JOB, GET_JOB } from "./actionType";


export const addJob = (data) =>({
    type : ADD_JOB,
    payload : data
})

export const  getJob = (data) =>({
    type: GET_JOB,
    payload : data
})