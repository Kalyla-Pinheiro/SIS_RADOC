import React from "react";
import classes from "../../../css-modules/Outros.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasMotivacaoDoAfastamento from "../../../formularios/outros/motivacao-do-afastamento/TabelasMotivacaoDoAfastamento";

const Afastamentos = () => {
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

      <div className={classes.outrosContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Afastamentos</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" />
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasMotivacaoDoAfastamento}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasMotivacaoDoAfastamento />
            </ChakraProvider>
          </div>
        </div>

        <div
          className={classes.buttons}
          id={classes.buttonMotivacaoDoAfastamento}
        >
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

export default Afastamentos;
