import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink';
import Button from '../Menu/Button';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Rodiflix logo"/>
            </a>
            <Button href="/">Novo vídeo</Button>
        </nav>
    );
}

export default Menu;