import React from "react";
import "./Perfil.css";
import TokenFunctions from "../../utils/Token";
import { jwtDecode } from "jwt-decode";
import { AiOutlineUser } from "react-icons/ai";
const Perfil = () => {
  const token = TokenFunctions.getToken();
  console.log(jwtDecode(token));

  const nomeUsuario = TokenFunctions.getName(token);
  const emailUsuario = TokenFunctions.getEmail(token);
  const siapeUsuario = TokenFunctions.getSiape(token);
  const vinculoUsuario = TokenFunctions.getVinculo(token);
  const titulacaoUsuario = TokenFunctions.getTitulacao(token);
  const institutoUsuario = TokenFunctions.getInstituto(token);
  const campusUsuario = TokenFunctions.getCampus(token);
  const regimeUsuario = TokenFunctions.getRegime(token);

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
        <div></div>

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
                <h2>{vinculoUsuario}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>SIAPE:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{siapeUsuario}</h2>
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
                <h2>{regimeUsuario}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>Titulação:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{titulacaoUsuario}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>Instituto:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{institutoUsuario}</h2>
              </div>
            </div>
            <div className="displayFlex">
              <div id="efeitoH">
                <h2>Campus:</h2>
              </div>
              <div id="efeitoH2">
                <h2>{campusUsuario}</h2>
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
