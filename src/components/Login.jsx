import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AuthContext } from '../context/AuthContext';


const Login = () => {
    const [form , setForm] = useState({});

    const navigate = useNavigate();

    const  { handleToken } = useContext(AuthContext)
    const handlechange = ({target : {name,value}}) =>{
        setForm({
            ...form,
            [name]:value
        });
    };
    const getToken = () =>{
            fetch("https://reqres.in/api/login",{
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((res) => res.json())
            .then((res) =>{
                handleToken(res.token);
                navigate(-1)
            })
        }
    
    return (
        <Form>
            <div>
                <h2>user Login</h2>
                <input type="text" name="email" placeholder="Enter Email" onChange={handlechange}></input>
                <input type = "password" name="password" placeholder="Enter Password" onChange={handlechange}></input>
                <button type = "submit" onClick={getToken} >Login</button>
            </div>
        </Form>
    )
}
 
const Form = styled.form`
width:300px;
height:400px;
justify-content: space-between;
align-items:center;
margin:auto;
 input{
     margin:2%;
     font-size:12px;
 }
 button{
     border-radius:5px;
     font-size:12px;
 }
`
export default Login
