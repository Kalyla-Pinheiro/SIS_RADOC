import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../css-modules/Pesquisa.module.css";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../imagens/paisagem3.png";
import TabelasPreceptoriaOuTutoriaDeResidencia from "../../formularios/ensino/orientacao-supervisao-outros/TabelasPreceptoriaOuTutoriaDeResidencia";

const PreceptoriaOuTutoriaDeResidencia = () => {

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
          <h1>Preceptoria e/ou Tutoria de Residência</h1>
        </div>

        <form className={classesPesquisa.campoSubmissaoPDF} action="" method="post" encType="multipart/form-data">
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input type="file" accept=".pdf"/>
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classesPesquisa.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>

          <div className={classes.campoTabelasSemestre} id={classes.tabelasSupervisaoPreceptoriaTutoria}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasPreceptoriaOuTutoriaDeResidencia />
            </ChakraProvider>
          </div>

        </div>

        <div className={classes.buttonOA}>
          <a href="/SupervisaoAcademica">
            <button>Voltar</button>
          </a>
          <a href="/ChSemanalOrientacao">
            <button id={classes.buttonProximo}>Próximo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreceptoriaOuTutoriaDeResidencia;
