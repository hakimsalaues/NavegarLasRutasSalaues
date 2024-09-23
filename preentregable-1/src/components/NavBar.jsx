import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">¡Bienvenido a Fish&CO!</div>
            <ul className='all-links'>  
                <li><a href="/home" className="navbar-link">Inicio</a></li>
                <li><a href="/productos" className="navbar-link">Productos</a></li>
                <li><a href="/contacto" className="navbar-link">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;