import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ({ cartCount, resetCartCount, showWelcome = true }) => {
    return (
        <nav>
            {showWelcome && <div className="logo">¡Bienvenido a Fish&CO!</div>}
            <ul className='all-links'>  
                <li><Link to="/" className="navbar-link">Inicio</Link></li>
                <li><Link to="/productos" className="navbar-link">Productos</Link></li>
                <li><Link to="/contacto" className="navbar-link">Contacto</Link></li>
            </ul>
            <CartWidget cartCount={cartCount} resetCartCount={resetCartCount} />
        </nav>
    );
};

export default NavBar;