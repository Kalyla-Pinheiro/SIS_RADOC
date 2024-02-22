import React from "react";
import classes from "../../css-modules/Formulario.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Formulario = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.formularioContainer}>
        <div className={classes.titulo}>
          <h1>Bem vindo, preencha seus formulários!</h1>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
