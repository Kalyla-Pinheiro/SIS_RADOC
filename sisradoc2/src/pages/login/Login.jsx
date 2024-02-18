import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import TokenFunctions from "../../utils/Token";
import AuthFunctions from "../../utils/Auth";
import apiurls from "../../apis/apiUrls";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const googleOAuthSuccess = (credentialResponse) => {
    const jwt = credentialResponse.credential;
    TokenFunctions.setToken(jwt);

    navigate("/home");
  };

  const googleOAuthFailure = (error) => {
    console.error("Login failed:", error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await AuthFunctions.apiAuthLogin(user, password);

    const bodyArgs = {
      email: user,
      senha: password
    };

    const response = await fetch(apiurls.login, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyArgs)
  });

    if (response.status === 200){
      console.log("Login efetuado com sucesso");

      response.json().then((data) => {
        TokenFunctions.setToken(data.token);
      })

      navigate("/home");
    }
    else {
      setError(response.data);
      console.log(response.data);
    }
    
  };

  return (
    <div className="login-container">
      <div className="wrapper-login">
        <form action="" onSubmit={handleSubmit} autoComplete="off">
          <h1>Sisradoc</h1>
          <div className="input-box">
            <input type="text" 
            placeholder="E-mail" 
            value={user}
            onChange={(event) => setUser(event.target.value)}
            required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" 
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="/">Esqueceu a senha?</a>
          </div>

          <div className="options-login">
            <button type="submit">Login</button>

            <GoogleOAuthProvider clientId="381659571656-9pknbk9qfofg71optmff34r57d6l09me.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={googleOAuthSuccess}
                onError={googleOAuthFailure}
              />
            </GoogleOAuthProvider>
          </div>

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
