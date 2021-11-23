import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../firebase'
import { Avatar } from '@mui/material'

import "./Navbar.css"
import logoImage from './fiesta.png'


function NavBar() {
    const currentUser = useAuth()
    const MenuList = [
        {
            title:"Map",
            url: "/"
        },
        {
            title:"List",
            url: "/list"
        },
        {
            title:"Add",
            url: "/add"
        }
    ]

    const menuList = MenuList.map(({url, title}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url}>
                    {title}
                </NavLink>
            </li>
        )
    })
    
    return (
        <nav>
            <NavLink exact to="/">
                <img src={logoImage} alt="logo" className="logo"/>
            </NavLink>
            <ul className="menu-list">
                {menuList}
                <NavLink exact to="/login">
                <Avatar
                sx={{ bgcolor: "gray" }}>
                {currentUser?.email?.charAt(0).toUpperCase()}    
                </Avatar>
                </NavLink>
            </ul>
            
        </nav>
    )
}

export default NavBar