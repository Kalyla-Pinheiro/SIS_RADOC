import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const MonografiaQualificacaoDIssertacaoTese = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.orientacaoAcademicaContainer}>
        <div className={classes.titulo}>
          <h1>Monografia, Qualificação, Dissertação e Tese</h1>
        </div>

        <form className={classes.anexarPdfs} action="" method="post" enctype="multipart/form-data">
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
              <p>Descrição da Banca</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Candidato</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Nome" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Trabalho</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Título" required />
                <input type="text" placeholder="Título" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>IES</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="IES" required />
                <input type="text" placeholder="IES" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Tipo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Tipo" required />
                <input type="text" placeholder="Tipo" required />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>CH Semanal por Banca</p>
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

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
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
          <a href="#">
            <button>Salvar</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default MonografiaQualificacaoDIssertacaoTese;
