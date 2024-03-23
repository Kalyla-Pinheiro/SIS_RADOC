import React from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../../css-modules/Pesquisa.module.css";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasAvaliacaoDiscente from "../../../formularios/ensino/avaliacao-discente/TabelasAvaliacaoDiscente";

const AvaliacaoDocente = () => {

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
      <div className={classes.orientacaoAcademicaContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Avaliação Discente</h1>
        </div>

        <form className={classesPesquisa.campoSubmissaoPDF} action="" method="post" encType="multipart/form-data">
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input type="file" accept=".pdf"/>
              <p>Relatório de Avaliação Docência (PDF)</p>
            </div>
            <div className={classesPesquisa.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>

          <div className={classes.campoTabelasSemestre} id={classes.tabelasAvaliacaoDiscente}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasAvaliacaoDiscente />
            </ChakraProvider>
          </div>

        </div>

        {/*
        <div className={classes.AvaliacaoD}>
          <div className={classes.camposInlineOA}>
            <div
              className={classes.semestreNCH}
              id={classes.primeiroSemestreNCH}
            >
              <div className={classes.tituloCampoOA}>
                <p>1 Semestre</p>
              </div>

              <div className={classes.campoTeoricasPraticas}>
                <div className={classes.camposTabelaNCH}>
                  <div className={classes.tituloSemestre}>
                    <p>Cod. Disciplina</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="Código" required />
                  <input type="text" placeholder="Código" required />
                </div>

                <div
                  className={classes.camposTabelaNCH}
                  id={classes.camposTabelaPraticaNCH}
                >
                  <div className={classes.tituloSemestre}>
                    <p>Média</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="CH" required />
                  <input type="text" placeholder="CH" required />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.camposInlineOA}>
            <div
              className={classes.semestreNCH}
              id={classes.primeiroSemestreNCH}
            >
              <div className={classes.tituloCampoOA}>
                <p>2 Semestre</p>
              </div>

              <div className={classes.campoTeoricasPraticas}>
                <div className={classes.camposTabelaNCH}>
                  <div className={classes.tituloSemestre}>
                    <p>Cod. Disciplina</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="Código" required />
                  <input type="text" placeholder="Código" required />
                </div>

                <div
                  className={classes.camposTabelaNCH}
                  id={classes.camposTabelaPraticaNCH}
                >
                  <div className={classes.tituloSemestre}>
                    <p>Média</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="CH" required />
                  <input type="text" placeholder="CH" required />
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        <div className={classes.buttonAD}>
          <a href="#">
            <button id={classes.buttonProximo}>Salvar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvaliacaoDocente;
