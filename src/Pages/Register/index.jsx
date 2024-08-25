import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user', { email, name, cpf, password });
      if (response.status === 201) {
        Swal.fire({
          title: 'Cadastro realizado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          title: 'Falha no cadastro',
          text: response.data.error || 'Erro desconhecido',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Falha no cadastro',
        text: error.message || 'Erro desconhecido',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="center">
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome de usuario"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        maxLength={11}
        onChange={(e) => setCpf(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Cadastrar</button>
      <button onClick={() => navigate('/')}>Voltar ao Login</button>
    </div>
  );
};

export default Register;
