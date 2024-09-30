import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginStyle} from '../css/LoginStyle.jsx'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (username === 'admin' && password === 'admin') {
            
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        } else {
            alert('Usuário ou Senha Incorretos');
        }
    };

    return (
        <LoginStyle>
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="E-mail"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
        </LoginStyle>
    );
};

export default Login;
