import React from "react";
import "./Perfil.css";
import TokenFunctions from "../../utils/Token";
import { jwtDecode } from "jwt-decode";

const Perfil = () => {

  const token = TokenFunctions.getToken();

  const nomeUsuario = TokenFunctions.getName(token);
  const emailUsuario = TokenFunctions.getEmail(token);

  // const nomeUsuario = decodedToken.nomeUsuario;

  return (
    <div className="perfil-container">
      <div className="wrapper-perfil">
        <h1>Tela de Perfil</h1>      

        <div>
          <p>Bem vindo, {nomeUsuario}</p><br/>
          <p>Seu email é {emailUsuario} </p>
        </div>  
      </div>
    </div>
  );
};

export default Perfil;
