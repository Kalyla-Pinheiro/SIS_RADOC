import React from "react";
import classes from "../../../css-modules/DocentesEnvolvidos.module.css";

const DocentesEnvolvidos = () => {
  return (
    <div className={classes.DocenteContainer}>
      <h1>Docentes Envolvidos</h1>
      <div className={classes.wrapperDocente}>
        <h1>Semestre 1</h1>
        <h1>Semestre 2</h1>
      </div>
    </div>
  );
};

export default DocentesEnvolvidos;
