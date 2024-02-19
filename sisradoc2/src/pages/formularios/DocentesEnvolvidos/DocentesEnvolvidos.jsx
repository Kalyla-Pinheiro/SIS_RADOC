import React from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const DocentesEnvolvidos = () => {
  return (
    <div>
      <Navegacao />
      <div className={classes.DocenteContainer}>
        <div className={classes.tituloDocente}>
          <h1>Docentes Envolvidos</h1>
        </div>

        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.tituloSemestre}>
            <h2>1º Semestre</h2>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <input type="text" placeholder="CH" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.tituloSemestre}>
            <h4>Dividiu a disciplina com outro Docente?</h4>
          </div>
        </div>

        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.tituloSemestre}>
            <h2>2º Semestre</h2>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <input type="text" placeholder="CH" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.tituloSemestre}>
            <h4>Dividiu a disciplina com outro Docente?</h4>
          </div>
        </div>

        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome do outro docente" required />{" "}
            <input type="text" placeholder="Nome do outro docente" required />{" "}
          </div>
        </div>
        <div className={classes.buttons}>
          <button>Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default DocentesEnvolvidos;
