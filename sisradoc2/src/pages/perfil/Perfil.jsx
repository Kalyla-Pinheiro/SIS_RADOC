import React from "react";
import "./Perfil.css";
import TokenFunctions from "../../utils/Token";
import { jwtDecode } from "jwt-decode";

const Perfil = () => {

  
  const token = TokenFunctions.getToken();

  const decodedToken = jwtDecode(token);

  const nomeUsuario = decodedToken.nomeUsuario;
  const emailUsuario = decodedToken.email;

  return (
    <div className="perfil-container">
      <div className="wrapper-perfil">
        <h1>Tela de Perfil</h1>      

        <div>
          <p>Bem vindo, {nomeUsuario}</p><br />
        </div>  

      </div>
    </div>
  );
};

export default Perfil;
