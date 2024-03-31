import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasPedagogicasComplementares from "../../formularios/ensino/pedagogicas-complementares/TabelasPedagogicasComplementares";

const PedagogicasComplementares = () => {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          background: "#f3ede8",
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
          <h1>Pedagógicas Complementares</h1>
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

        <div className={classes.buttonSalvarPC}>
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default PedagogicasComplementares;
