import React from 'react'
import { createContext , useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({childern}) =>{
    const [token , setToken] = useState("");

    const handleToken = (token) =>{
        setToken(token);
    };
    return(
        <AuthContext.Provider value = {{token , handleToken }}>
            {childern}
        </AuthContext.Provider>
    )
}
