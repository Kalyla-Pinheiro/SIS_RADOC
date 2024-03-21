import React from "react";
import classes from "../../css-modules/Gestao.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Gestao = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.gestaoContainer}>
        <div className={classes.titulo}>
          <h1>Gestão</h1>
        </div>

        <nav className={classes.opcoesGestao}>
          <a className={classes.opcaoGestao} type="button" href="/gestao/atividades-de-gestao-e-representacao">
            Atividade de Gestão e Representação
          </a>
          <a className={classes.opcaoGestao} type="button" href="#">
            CH Semanal de Atividades de Gestão e Representação
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Gestao;
