import React from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasOutrasAtividadesProducaoIntelectual from "../../../formularios/pesquisa/outras-atividades-de-pesquisa-e-producao-intelectual/TabelasOutrasAtividadesPesquisaProducaoIntelectual";

const OutrasAtividadesPesquisaProducaoIntelectual = () => {

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
        <div className={classes.titulo} id={classes.tituloMargin}>
            <h1>Outras Atividades de Pesquisa e Produção Intelectual</h1>
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

          <div className={classes.campoTabelasSemestre} id={classes.tabelasResumosPublicadosApresentados}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasOutrasAtividadesProducaoIntelectual />
            </ChakraProvider>
          </div>

        </div>

        <div className={classes.buttons} id={classes.buttonSalvarTRPA}>
          <a href="#">
            <button>Salvar</button>
          </a>
        </div>

      </div>

    </div>
  );
};

export default OutrasAtividadesPesquisaProducaoIntelectual;
