import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink style={{ fontSize: '20px' }}
            to={to}
            className={({ isActive }) => isActive ? "active" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;