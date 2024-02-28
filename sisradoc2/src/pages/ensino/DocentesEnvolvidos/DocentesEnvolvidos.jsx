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

        <div className={classes.Docente}>
          <div className={classes.tituloSemestreD}>
            <h2>1º Semestre</h2>
          </div>
          <div className={classes.tituloSemestreD}>
            <h3>Referente a disciplina: xxxxxxxxxxx</h3>
          </div>
          <div className={classes.camposTabelaD}>
            <input type="text" placeholder="Nome" required />{" "}
            <input type="text" placeholder="CH" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.tituloDividiu}>
            <h1>Dividiu a disciplina com outro Docente?</h1>
          </div>
          <div className={classes.tituloCheckbox}>
            <div>
              <input type="checkbox" id="Sim1" name="Sim1" />
              <label for="Sim1">Sim</label>
            </div>
            <div>
              <input type="checkbox" id="Nao1" name="Nao1" />
              <label for="Nao1">Não</label>
            </div>
          </div>
        </div>

        <div className={classes.Docente}>
          <div className={classes.tituloSemestreD}>
            <h2>2º Semestre</h2>
          </div>
          <div className={classes.tituloSemestreD}>
            <h3>Referente a disciplina: xxxxxxxxxxx</h3>
          </div>
          <div className={classes.camposTabelaD}>
            <input type="text" placeholder="Nome" required />{" "}
            <input type="text" placeholder="CH" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.tituloDividiu}>
            <h1>Dividiu a disciplina com outro Docente?</h1>
          </div>
          <div className={classes.tituloCheckbox}>
            <div>
              <input type="checkbox" id="Sim2" name="Sim2" />
              <label for="Sim2">Sim</label>
            </div>
            <div>
              <input type="checkbox" id="Nao2" name="Nao2" />
              <label for="Nao2">Não</label>
            </div>
          </div>
        </div>
        <div className={classes.outroDocente}>
          <input type="text" placeholder="Nome do outro docente" required />{" "}
        </div>
        <div className={classes.buttonsDV}>
          <a href="/numeroDeTurmasCHporTurma">
            <button>Voltar</button>
          </a>
        </div>
        <div className={classes.buttonsD}>
          <a href="/ensino/ChSemanalAulas">
            <button>Próximo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocentesEnvolvidos;
