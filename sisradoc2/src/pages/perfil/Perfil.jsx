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

        <div className="displayFlex">
          <div className="displayColumn">
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>Nome:</h2> 
              </div>
              <div id="efeitoH2">
                <h2>{nomeUsuario}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>E-mail:</h2> 
              </div>
              <div id="efeitoH2">
                <h2>{emailUsuario}</h2>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Perfil;
