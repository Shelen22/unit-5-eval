import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <NavBar>
         <Link to="/" >Home</Link>
         <Link to="/login">Login</Link>
         <Link to="/joblist">Jobs for you</Link>
         <Link to="/dashboard">Dashboard</Link>
        </NavBar>
    )
}

const NavBar = styled.div`
display: flex;
justify-content: space-evenly;
align-items:center;
font-size: 25px;
 a {
     text-decoration: none;
     color: black;
 }`

export default Navbar
