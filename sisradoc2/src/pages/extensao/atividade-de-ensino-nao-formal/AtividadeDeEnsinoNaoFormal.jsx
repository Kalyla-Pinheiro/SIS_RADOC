import React from "react";
import classes from "../../../css-modules/Extensao.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasAtividadeDeEnsinoNaoFormal from "../../../formularios/extensao/atividade-de-ensino-nao-formal/TabelasAtividadeDeEnsinoNaoFormal";

const AtividadeDeEnsinoNaoFormal = () => {

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

      <div className={classes.extensaoContainer}>
        <div className={classes.titulo}>
          <h1>Atividades de Ensino Não Formais</h1>
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

          <div className={classes.campoTabelasSemestre} id={classes.tabelasProjetosExtensao}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasAtividadeDeEnsinoNaoFormal />
            </ChakraProvider>
          </div>

        </div>

        <div className={classes.buttons} id={classes.buttonProjetosDeExtensao}>
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

export default AtividadeDeEnsinoNaoFormal;
