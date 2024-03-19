import React from "react";
import classes from "../../css-modules/Extensao.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Extensao = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.extensaoContainer}>
        <div className={classes.titulo}>
          <h1>Extensão</h1>
        </div>

        <nav className={classes.opcoesExtensao}>
          <a className={classes.opcaoExtensao} type="button" href="/extensao/projetos-de-extensao">
            Projetos de Extensão
          </a>
          <a className={classes.opcaoExtensao} type="button" href="/extensao/estagio-de-extensao">
            Estágio de Extensão
          </a>
          <a className={classes.opcaoExtensao} type="button" href="/extensao/atividades-de-ensino-nao-formais">
            Atividade de Ensino Não Formal
          </a>
          <a className={classes.opcaoExtensao} type="button" href="/extensao/outras-atividades-de-extensao">
            Outras Atividades de Extensão
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Extensao;
