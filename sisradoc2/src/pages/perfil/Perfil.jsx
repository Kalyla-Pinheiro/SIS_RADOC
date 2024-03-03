import React from "react";
import "./Perfil.css";
import TokenFunctions from "../../utils/Token";
import { jwtDecode } from "jwt-decode";

const Perfil = () => {

  const token = TokenFunctions.getToken();

  console.log("TOKEN NOSSO: " + token);

  // const decoded = jwtDecode(token);

  // const nomeUsuario = decoded.nomeUsuario;
  // // const emailUsuario = decoded.email;

  
  // console.log("Nome usuário: " + nomeUsuario);
  //const nomeUsuario = TokenFunctions.getNomeUsuario();

  return (
    <div className="perfil-container">
      <div className="wrapper-perfil">
        <h1>Tela de Perfil</h1>      

        <div>
          {/* <p>Bem vindo, {nomeUsuario}</p><br /> */}
          {/* <p>Este é seu email: {emailUsuario}</p> */}
        </div>  

      </div>
    </div>
  );
};

export default Perfil;
