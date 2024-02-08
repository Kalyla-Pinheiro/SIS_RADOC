import React from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const onSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    navigate("/home");
  }

  const onFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <div className="login-container">
      <div className="wrapper-login">
        <form action="">
          <h1>Sisradoc</h1>
          <div className="input-box">
            <input type="text" placeholder="Usuário" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Senha" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit">Login</button>

          <GoogleOAuthProvider clientId="381659571656-9pknbk9qfofg71optmff34r57d6l09me.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={onSuccess}
              onError={onFailure}
            />
          </GoogleOAuthProvider>

          <div className="register-link">
            <p>
              Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
