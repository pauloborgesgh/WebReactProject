import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const username = localStorage.getItem('username'); // Obtém o nome do usuário do localStorage

  return (
    <header className="header">
      <Link to="/">
        <span className='logo'>DengueZero</span>
      </Link>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/Lista">Lista</Link>
        <Link to="/fazerdenuncia">Fazer Denuncia</Link>
        <Link to="/informacao">Informações</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/">Sair</Link>
        {username && <span className="username">Olá, {username}</span>} {/* Exibe o nome do usuário */}
      </nav>
    </header>
  );
}

export default Header;
