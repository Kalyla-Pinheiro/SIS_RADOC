import React from "react";
import "./Perfil.css";
import TokenFunctions from "../../utils/Token";
import { jwtDecode } from "jwt-decode";
import { AiOutlineUser } from "react-icons/ai";
const Perfil = () => {
  const token = TokenFunctions.getToken();

  const nomeUsuario = TokenFunctions.getName(token);
  const emailUsuario = TokenFunctions.getEmail(token);

  // const nomeUsuario = decodedToken.nomeUsuario;

  return (
    <div className="perfil-container">
      <div className="wrapper-perfil">
        <h1>Perfil</h1>
        <div className="ajusteAvatar">
          <AiOutlineUser className="Avatar" />
          <button className="alterarFoto">Alterar Foto</button>
        </div>
        <div className="titulo">
          <h2>DADOS DO DOCENTE</h2>
        </div>

        <div className="areaPreenchimento">
          <div className="campoTabelasSemestre">
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
                <h2>Vinculo:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>SIAPE:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{}</h2>
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
            <div className="displayFlex">
              <div id="">
                <h2>Regime de Trabalho:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>Titulação:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>Instituto:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>Campus:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{}</h2>
              </div>
            </div>
            <div className="divEditar">
              <button className="btnEditar">EDITAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
