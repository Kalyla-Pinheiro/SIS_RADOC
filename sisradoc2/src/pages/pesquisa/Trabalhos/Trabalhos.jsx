import React from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasTrabalhosBoletinsOutros from "../../../formularios/pesquisa/trabalhos-boletins-e-outros/TabelasTrabalhosBoletinsOutros";

const Trabalhos = () => {

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
          <h1>Trabalhos, Boletins Técnicos e outros</h1>
        </div>

        <form className={classes.campoSubmissaoPDF} action="" method="post" encType="multipart/form-data">
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf"/>
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>


        <div className={classes.areaPreenchimento}>

          <div className={classes.campoTabelasSemestre} id={classes.tabelasTrabalhosBoletinsOutros}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasTrabalhosBoletinsOutros />
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
        */}

        <div className={classes.buttons} id={classes.buttonTrabalhosBoletinsOutros}>
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

export default Trabalhos;
