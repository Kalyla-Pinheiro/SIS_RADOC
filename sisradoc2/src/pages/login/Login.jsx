import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import TokenFunctions from "../../utils/Token";
import { tainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";
import AuthFunctions from "../../utils/Auth";
import apiurls from "../../apis/apiUrls";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const googleOAuthSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const decodedToken = jwtDecode(token);

    try{
      const result = await AuthFunctions.verificar_usuario(decodedToken.email);

      if(result.message === "User exists"){
        TokenFunctions.setToken(token);
        navigate("/formularios");
        return;
      } else if (result.message === "User not exists"){
        TokenFunctions.setToken(token);

        ToastifyMessages.warning("Realize o cadastro para continuar");
    
        setTimeout(() => {
          navigate("/cadastro");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const googleOAuthFailure = (error) => {
    console.error("Login failed:", error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bodyArgs = {
      email: user,
      senha: password,
    };

    if (!user || !password) {
      ToastifyMessages.warning("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch(apiurls.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyArgs),
      });

      if (response.status === 200) {
        ToastifyMessages.success("Login efetuado com sucesso");

        response.json().then((data) => {
          console.log(JSON.stringify(data));
          TokenFunctions.setToken(data.token);
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      ToastifyMessages.error("Erro ao efetuar login");
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper-login">
        <form action="" onSubmit={handleSubmit} autoComplete="off">
          <h1>Sisradoc</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="E-mail"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
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
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Login;
