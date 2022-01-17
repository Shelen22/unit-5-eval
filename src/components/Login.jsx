import React from 'react';
import { useContext, useState } from 'react';


const Login = () => {
    const [form , setForm] = useState({});
    const handlechange = ({target : {name,value}}) =>{
        setForm({
            ...form,
            [name]:value
        });
    };
    const getToken = () =>{
        try{
            fetch("h")
        }
    }
    return (
        <div>
            
        </div>
    )
}

export default Login
