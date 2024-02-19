import React from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const ChSemanalAulas = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.ensinoContainer}>
        <div className={classes.titulo}>
          <h1>Calculo da Ch semanal de aulas</h1>
        </div>

        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.tituloSemestre}>
            <p>1º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Graduação (CH)" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Pós-Graduação (CH)" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input
              type="text"
              className={classes.ultimoCampoInput}
              placeholder="CH Total"
              required
            />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>

        <div className={classes.semestre}>
          <div className={classes.tituloSemestre}>
            <p>2º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Graduação (CH)" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Pós-Graduação (CH)" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input
              type="text"
              className={classes.ultimoCampoInput}
              placeholder="CH Total"
              required
            />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>

        <div className={classes.buttonCh}>
          <button>Voltar</button>
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default ChSemanalAulas;
