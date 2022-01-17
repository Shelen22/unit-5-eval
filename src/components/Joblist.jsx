import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { addJob , getJob} from "../features/action"

const Joblist = () => {
    const [text , setText] = useState("");
    const { lists } = useSelector((state) =>{
        lists : state.lists
    })
    const dispatch = useDispatch()
    const handleinput = (e) =>{
        setText(e.target.value)
    };
    const handleList = () =>{
        fetch("http://localhost:3006/lists",{
            method: "POST",
            body : JSON.stringify({}),
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
          <input type="text" value = {text} placeholder="Enter Company Name"></input>
          <input type="text" value = {text} placeholder="Job Title"></input>
          <input type="text" value = {text} placeholder="Salary"></input>
          <input type="text" value = {text} placeholder="JoB Discription"></input>
          <input type="text" value = {text} placeholder="Location"></input>
          <input type="text" value = {text} placeholder="Job Type"></input>
        </div>
    )
}

export default Joblist
