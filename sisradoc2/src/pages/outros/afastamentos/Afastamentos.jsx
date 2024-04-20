import React, { useState } from "react";
import classes from "../../../css-modules/Outros.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasMotivacaoDoAfastamento from "../../../formularios/outros/motivacao-do-afastamento/TabelasMotivacaoDoAfastamento";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const Afastamentos = () => {

  const [pdfAfastamentos, setPdfAfastamentos] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfAfastamentosChange = (event) => {
    setPdfAfastamentos(event.target.files[0]);
  };

  const handleAfastamentos = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfAfastamentos);
    
    if (pdfAfastamentos === null) {
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
          <h1>Afastamentos</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method=""
          encType="multipart/form-data"
          onSubmit={handleAfastamentos}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfAfastamentosChange}/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleAfastamentos}>Submeter PDF</button>
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
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Afastamentos;
