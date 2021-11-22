import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../firebase'

import "./Navbar.css"
import logoImage from './fiesta.png'


function NavBar() {
    const currentUser = useAuth()
    const userName = currentUser?.displayName
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
        },
        {
            title:userName?userName:"Login",
            url: "/login"
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
            <ul className="menu-list">{menuList}</ul>
        </nav>
    )
}

export default NavBar