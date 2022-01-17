import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { addJob , getJob} from "../features/action"

const Joblist = () => {
    const [text , setText] = useState("");
    const lists  = useSelector((state) =>state.lists)
    console.log('lists:', lists)

    const dispatch = useDispatch()
    const handleinput = (e) =>{
        setText(e.target.value)
    };
    const handleList = () =>{
        fetch("http://localhost:3006/lists",{
            method: "POST",
            body : JSON.stringify(),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((d) => d.json())
        .then((res) =>{
            dispatch(addJob(res))
            setText("")
        })
    }
    return (
        <div>
          <input type="text" value = {text} placeholder="Enter Company Name" onChange={handleinput} ></input>
          <input type="text" value = {text} placeholder="Job Title" onChange={handleinput}></input>
          <input type="text" value = {text} placeholder="Salary" onChange={handleinput}></input>
          <input type="text" value = {text} placeholder="JoB Discription" onChange={handleinput}></input>
          <input type="text" value = {text} placeholder="Location" onChange={handleinput}></input>
          <input type="text" value = {text} placeholder="Job Type" onChange={handleinput}></input>
          <button onClick = {handleList} >Add Job</button>
        </div>
    )
}

export default Joblist
