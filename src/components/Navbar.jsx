import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
        }
    }
    return (
        <nav>
            <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
            <NavLink style={navLinkStyles} to='/registration'>Register</NavLink>
            <NavLink style={navLinkStyles} to='/enrollment'>Enrollment</NavLink>
            <NavLink style={navLinkStyles} to='/info'>Share info</NavLink>
        </nav>
    )
}
