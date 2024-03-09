import React from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const Projetos = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.pesquisaContainer}>
        <div className={classes.titulo}>
          <h1>Projetos</h1>
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
              <div className={classes.camposTabelaAutor}>
                <div className={classes.tituloSemestre}>
                  <p>Autor(es)</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Cadastro" required />
              </div>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Nº Volume</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Número" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Nº Fasciculo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Número" required />
              </div>
            </div>
          </div>
          <div className={classes.conteiner3}>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Página Inicial</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Página" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Página Final</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Página" required />
              </div>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Ano</p> <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Ano" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>ISSN</p> <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="ISSN" required />
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

export default Projetos;
