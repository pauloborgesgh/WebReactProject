

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulando espera de 500ms

    try {
      const response = await fetch('https://app-api-prd.up.railway.app/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar usuário');
      }

      const user = await response.json();
      setIsLoading(false);

      if (user && user.id) { // Verifica se o usuário e o ID existem
        // Salva o ID do usuário no localStorage com a chave 'userId'
        localStorage.setItem('userId', user.id);
        localStorage.setItem('username', user.name);

        Swal.fire({
          title: 'Login Com Sucesso',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/home'); // Redireciona para a página home
        });
      } else {
        Swal.fire({
          title: 'Usuário ou senha incorretos',
          text: 'Verifique os campos',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Erro ao verificar login:', error);
      setIsLoading(false);

      Swal.fire({
        title: 'Erro ao verificar login',
        text: 'Verifique os campos',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="centerM">
      <div className="login-container">
        <div className="login-section">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Nome de Usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Logando...' : 'Login'}
          </button>
        </div>
        <div className="register-section">
          <h2>Novo Por Aqui?</h2>
          <a href="/register/index.jsx">Crie Sua Conta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

