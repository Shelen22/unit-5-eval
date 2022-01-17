import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext"


function PrivateRoutes({children}) {
    const { token } = useContext(AuthContext);

    if(!token){
        return <Navigate to = "/login" />
    }
    return children;
}


export default PrivateRoutes
