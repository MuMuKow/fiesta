import React from 'react'
import "./Navbar.css"
import {MenuList} from "./MenuList"
import { NavLink } from 'react-router-dom'
import logoImage from './fiesta.png'

function NavBar() {
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