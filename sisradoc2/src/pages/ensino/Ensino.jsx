import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Ensino = () => {
  return (
    <div>
      <Navegacao/>

      <div className={classes.ensinoContainer}>

        <div className={classes.titulo}>
          <h1>Ensino</h1>
        </div>

        <div className={classes.opcoesEnsino}>
          <div className={classes.opcaoEnsino}>
            <a href="/disciplinas">Aulas Letivas</a>
          </div>

          <div className={classes.opcaoEnsino}>
            <a href="/pedagogicasComplementares">Pedagógicas Complementares</a>
          </div>

          <div className={classes.opcaoEnsino}>
            <a href="">Orientação, Supervisão e Outros</a>
          </div>

          <div className={classes.opcaoEnsino}>
            <a href="">Bancas Examinadoras</a>
          </div>

          <div className={classes.opcaoEnsino} id={classes.ultimaOpcao}>
            <a href="">Avaliação Discente</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ensino;