import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className="login-container">
            <div className='wrapper'>
                <form action="">
                    <h1>Sisradoc</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Usuário' required/>
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Senha' required/>
                        <FaLock className='icon'/>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Lembre de mim</label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className="register-link">
                        <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;