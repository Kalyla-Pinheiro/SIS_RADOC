import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Ensino = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.ensinoContainer}>
        <div className={classes.titulo}>
          <h1>Ensino</h1>
        </div>

        <nav className={classes.opcoesEnsino}>
          <a className={classes.opcaoEnsino} type="button" href="/disciplinas">
            Aulas Letivas
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/pedagogicasComplementares"
          >
            Pedagógicas Complementares
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/OrientacaoAcademica"
          >
            Orientação, Supervisão e Outros
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/MonografiaQualificacaoDIssertacaoTese"
          >
            Bancas Examinadoras
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/ensino/AvaliacaoDocente"
          >
            Avaliação Discente
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Ensino;
