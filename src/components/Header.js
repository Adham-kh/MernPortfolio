import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={headerH1} >Мое портфолио</h1>
            <nav>
                <Link to="/">Главная</Link> | <Link to="/about">Обо мне</Link> | <Link to="/posts">Посты</Link>
            </nav>
        </header>
    );
}

// const fontStile = {
//     fontsize: '10px',
// };


const headerStyle = {
    width: '100%',
   
    padding: '10px',
    background: '#333',
    color: 'white',
    textAlign: 'center',
};

const headerH1 = {
    padding: '0px',
    background: '#333',
};

export default Header;
