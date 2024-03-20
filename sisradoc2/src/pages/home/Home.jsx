import React from "react";
import classes from "../../css-modules/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import TokenFunctions from "../../utils/Token";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.titulo}>
        <h1>Bem Vindo!</h1>
      </div>
      <div>
        <h2 className={classes.paragrafos}>
          O processo do Relatório Anual de Atividades Docente - RADOC tem seu
          início a partir do Docente interessado, visando a comprovação e a
          aprovação de suas atividades perante a UFRA.
        </h2>
        <div className={classes.conteinerRadoc}>
          <div className={classes.botao}>
            <div>
              <a href="/formularios">
                <button>Cadastrar Radoc</button>
              </a>
            </div>
            <div>
              <a href="#">
                <button>Continuar</button>
              </a>
            </div>
          </div>

          <div
            className={classes.tabelaRadoc}
            id={classes.tabelasDisciplinasMinistradas}
          ></div>
        </div>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Home;
