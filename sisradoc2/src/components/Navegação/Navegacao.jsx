import React from "react";
import classes from "../../css-modules/Navegacao.module.css";
// import global from "../../css-modules/Global.module.css";

const Navegacao = () => {
  return (
    <div className={classes.navegacaoContainer}>
      <ul className={classes.listaNavegacao}>
        <li className={classes.itemNavegacao}>
          <a href="/ensino">Ensino</a>
        </li>
        <li className={classes.itemNavegacao}>
          <a href="/pesquisa">Pesquisa</a>
        </li>
        <li className={classes.itemNavegacao}>
          <a href="/extensao">Extensão</a>
        </li>
        <li className={classes.itemNavegacao}>
          <a href="/gestao">Gestão</a>
        </li>
        <li className={classes.itemNavegacao}>
          <a href="/outros">Outros</a>
        </li>
      </ul>
    </div>
  );
};

export default Navegacao;