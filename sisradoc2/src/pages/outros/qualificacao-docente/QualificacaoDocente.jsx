import React, { useState } from "react";
import classes from "../../../css-modules/Outros.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasQualificacaoDocente from "../../../formularios/outros/qualificacao-docente/TabelasQualificacaoDocente";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const QualificacaoDocente = () => {

  const [pdfQualificacaoDocente, setPdfQualificacaoDocente] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfQualificacaoDocenteChange = (event) => {
    setPdfQualificacaoDocente(event.target.files[0]);
  };

  const handleQualificacaoDocente = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfQualificacaoDocente);
    
    if (pdfQualificacaoDocente === null) {
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

      <div className={classes.outrosContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Qualificação Docente</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleQualificacaoDocente}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfQualificacaoDocenteChange}/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleQualificacaoDocente}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasQualificacaoDocente}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasQualificacaoDocente />
            </ChakraProvider>
          </div>
        </div>

        <div className={classes.buttons} id={classes.buttonQualificaoDocente}>
          <div>
            <a href="#">
              <button>Salvar</button>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default QualificacaoDocente;
