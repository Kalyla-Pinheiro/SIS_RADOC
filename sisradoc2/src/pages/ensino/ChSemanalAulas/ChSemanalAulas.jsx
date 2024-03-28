import React from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasChSemanalAulas from "../../../formularios/ensino/aulas-letivas/TabelasChSemanalAulas";

const ChSemanalAulas = () => {
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
          overflow: "hidden",
        },
      },
    },
  });

  return (
    <div>
      <Navegacao />

      <div className={classes.ensinoContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Cálculo do Ch semanal de aulas</h1>
        </div>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasChSemanalAulas}
          >
            <div className={classes.semestre} id={classes.primeiroSemestre}>
              <div className={classes.tituloSemestre}>
                <p>1º Semestre</p>
              </div>
              <div className={classes.camposTabela}>
                <input type="text" placeholder="Graduação (CH)" required />{" "}
                <input type="text" placeholder="Pós-Graduação (CH)" required />{" "}
                <input
                  type="text"
                  className={classes.ultimoCampoInput}
                  placeholder="CH Total"
                  required
                />{" "}
              </div>
            </div>

            <div className={classes.semestre}>
              <div className={classes.tituloSemestre}>
                <p>2º Semestre</p>
              </div>
              <div className={classes.camposTabela}>
                <input type="text" placeholder="Graduação (CH)" required />{" "}
                <input type="text" placeholder="Pós-Graduação (CH)" required />{" "}
                <input
                  type="text"
                  className={classes.ultimoCampoInput}
                  placeholder="CH Total"
                  required
                />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.buttonCh}>
          <a href="/disciplinas">
            <button>Voltar</button>
          </a>
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default ChSemanalAulas;
