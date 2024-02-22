import React from "react";
import classes from "../../css-modules/Navegacao.module.css";
// import global from "../../css-modules/Global.module.css";

const Navegacao = () => {
  return (
    <div className={classes.navegacaoContainer}>
      <nav className={classes.listaNavegacao}>
        <a className={classes.itemNavegacao} href="/ensino">
          Ensino
        </a>
        <a className={classes.itemNavegacao} href="/pesquisa">
          Pesquisa
        </a>
        <a className={classes.itemNavegacao} href="/extensao">
          Extensão
        </a>
        <a className={classes.itemNavegacao} href="/gestao">
          Gestão
        </a>
        <a className={classes.itemNavegacao} href="/outros">
          Outros
        </a>
      </nav>
    </div>
  );
};

export default Navegacao;
