import React from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasProjetos from "../../../formularios/pesquisa/projetos/TabelasProjetos";

const Projetos = () => {

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${paisagem3})`,
          fontFamily: "Poppins, sans-serif",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden"
        },
      },
    },
  });

  return (
    <div>
      <Navegacao />

      <div className={classes.pesquisaContainer}>
        <div className={classes.titulo}>
          <h1>Projetos</h1>
        </div>

        <form className={classes.campoSubmissaoPDF} action="" method="post" encType="multipart/form-data">
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf"/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>

          <div className={classes.campoTabelasSemestre} id={classes.tabelasProjetos}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasProjetos />
            </ChakraProvider>
          </div>

        </div>


        {/*
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
        */}

        <div className={classes.buttons} id={classes.buttonProjetos}>
          <div>
            <a href="#">
              <button>Salvar</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projetos;
