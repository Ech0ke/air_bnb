import React from 'react'
import "./style.css"
import logo from '../images/logo.svg'
export default function NavBar() {
    return (
        <nav>
            <img src={logo} className="logo" alt=""></img>
        </nav>
    )
}