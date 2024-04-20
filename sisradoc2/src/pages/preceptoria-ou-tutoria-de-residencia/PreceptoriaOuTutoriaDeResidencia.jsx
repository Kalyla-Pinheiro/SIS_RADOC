import React, { useState } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../css-modules/Pesquisa.module.css";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasPreceptoriaOuTutoriaDeResidencia from "../../formularios/ensino/orientacao-supervisao-outros/TabelasPreceptoriaOuTutoriaDeResidencia";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const PreceptoriaOuTutoriaDeResidencia = () => {

  const [pdfPreceptoriaOuTutoriaDeResidencia, setPdfPreceptoriaOuTutoriaDeResidencia] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfPreceptoriaOuTutoriaDeResidenciaChange = (event) => {
    setPdfPreceptoriaOuTutoriaDeResidencia(event.target.files[0]);
  };

  const handlePreceptoriaOuTutoriaDeResidencia = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfPreceptoriaOuTutoriaDeResidencia);
    
    if (pdfPreceptoriaOuTutoriaDeResidencia === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }
    
  }

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

      <div className={classes.orientacaoAcademicaContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Preceptoria e/ou Tutoria de Residência</h1>
        </div>

        <form
          className={classesPesquisa.campoSubmissaoPDF}
          action=""
          method=""
          encType="multipart/form-data"
          onSubmit={handlePreceptoriaOuTutoriaDeResidencia}
        >
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfPreceptoriaOuTutoriaDeResidenciaChange}/>
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classesPesquisa.buttonSubmeterPDF}>
              <button type="submit" onClick={handlePreceptoriaOuTutoriaDeResidencia}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasSupervisaoPreceptoriaTutoria}
          >
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
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default PreceptoriaOuTutoriaDeResidencia;
