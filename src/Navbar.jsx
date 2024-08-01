import React from 'react';
import './Navbar.css';
import logo from './images/Branding.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
        </div>
    );
}
