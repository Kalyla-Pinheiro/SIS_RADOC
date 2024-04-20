import React, { useState } from "react";
import classes from "../../../css-modules/Outros.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasOutrasInformacoes from "../../../formularios/outros/outras-informacoes/TabelasOutrasInformacoes";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const OutrasInformacoes = () => {

  const [pdfOutrasInformacoes, setPdfOutrasInformacoes] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfOutrasInformacoesChange = (event) => {
    setPdfOutrasInformacoes(event.target.files[0]);
  };

  const handleOutrasInformacoes = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfOutrasInformacoes);
    
    if (pdfOutrasInformacoes === null) {
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
          <h1>Outras Informações</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method=""
          encType="multipart/form-data"
          onSubmit={handleOutrasInformacoes}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfOutrasInformacoesChange}/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleOutrasInformacoes}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasOutrasInformacoes}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasOutrasInformacoes />
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

export default OutrasInformacoes;
