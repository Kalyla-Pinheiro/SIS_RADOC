import React from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const Trabalhos = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.pesquisaContainer}>
        <div className={classes.titulo}>
          <h1>Trabalhos, Boletins Técnicos e outros</h1>
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
        </form>

        <div className={classes.conteiner2}>
          <div className={classes.tituloCampoOA}>
            <p> Informações do Projeto</p>
          </div>

          <div className={classes.campoTeoricasPraticas}>
            <div className={classes.camposTabelaTitulo}>
              <div className={classes.tituloSemestre}>
                <p>Titulo</p> <BsQuestionCircleFill className={classes.icon} />
              </div>
              <input type="text" placeholder="Titulo" required />
            </div>
          </div>
          <div className={classes.conteiner3}>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Cadastro Proped</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Cadastro" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Situação</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Situação" required />
              </div>
            </div>

            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaCheckbox}>
                <div className={classes.tituloSemestre}>
                  <p>Função:</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.tabelasCheckbox}>
                  <div>
                    <input type="checkbox" id="" name="" />
                    <label for="">Coordenador</label>
                  </div>
                  <div>
                    <input type="checkbox" id="" name="" />
                    <label for="">Colaborador</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.buttonsD}>
          <div>
            <a href="/pesquisa">
              <button>Salvar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabalhos;
