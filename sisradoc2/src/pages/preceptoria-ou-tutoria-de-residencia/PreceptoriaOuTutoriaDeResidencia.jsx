import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const PreceptoriaOuTutoriaDeResidencia = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.orientacaoAcademicaContainer}>
        <div className={classes.titulo}>
          <h1>Preceptoria e/ou Tutoria de Residência</h1>
        </div>

        <form
          className={classes.anexarPdfs}
          action=""
          method="post"
          enctype="multipart/form-data"
        >
          <div className={classes.inputsPdfs} id={classes.primeiroInput}>
            <input type="file" accept=".pdf" />
            <p>Campo para submissão (PDF)</p>
          </div>
          <div className={classes.inputsPdfs} id={classes.segundoInput}>
            <input type="file" accept=".pdf" />
            <p>Campo para submissão (PDF)</p>
          </div>
        </form>

        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>Informações do Orientando</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Nome Completo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Nome" required />
              </div>

              <div
                className={classes.camposTabelaNCH}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Matrícula</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Matrícula" required />
                <input type="text" placeholder="Matrícula" required />
              </div>

              <div
                className={classes.camposTabelaNCH}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Curso</p> <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Curso" required />
                <input type="text" placeholder="Curso" required />
              </div>

              <div
                className={classes.camposTabelaNCH}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Tipo</p> <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Tipo" required />
                <input type="text" placeholder="Tipo" required />
              </div>

              <div
                className={classes.camposTabelaNCH}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Nível</p> <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nível" required />
                <input type="text" placeholder="Nível" required />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>CH Semanal por Orientando</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>1º Semestre</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="CH" required />
                <input type="text" placeholder="CH" required />
              </div>

              <div
                className={classes.camposTabelaNCH}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>2º Semestre</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="CH" required />
                <input type="text" placeholder="CH" required />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.buttonOA}>
          <a href="/SupervisaoAcademica">
            <button>Voltar</button>
          </a>
          <a href="/ChSemanalOrientacao">
            <button id={classes.buttonProximo}>Próximo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreceptoriaOuTutoriaDeResidencia;
