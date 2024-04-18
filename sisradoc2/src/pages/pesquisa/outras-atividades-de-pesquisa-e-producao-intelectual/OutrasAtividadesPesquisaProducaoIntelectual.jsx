import React, { useState } from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasOutrasAtividadesProducaoIntelectual from "../../../formularios/pesquisa/outras-atividades-de-pesquisa-e-producao-intelectual/TabelasOutrasAtividadesPesquisaProducaoIntelectual";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const OutrasAtividadesPesquisaProducaoIntelectual = () => {

  const [pdfOutrasAtividadesPesquisaProducaoIntelectual, setPdfOutrasAtividadesPesquisaProducaoIntelectual] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfOutrasAtividadesPesquisaProducaoIntelectualChange = (event) => {
    setPdfOutrasAtividadesPesquisaProducaoIntelectual(event.target.files[0]);
  };

  const handleOutrasAtividadesPesquisaProducaoIntelectual = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfOutrasAtividadesPesquisaProducaoIntelectual);
    
    if (pdfOutrasAtividadesPesquisaProducaoIntelectual === null) {
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

      <div className={classes.pesquisaContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Outras Atividades de Pesquisa e Produção Intelectual</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method=""
          encType="multipart/form-data"
          onSubmit={handleOutrasAtividadesPesquisaProducaoIntelectual}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfOutrasAtividadesPesquisaProducaoIntelectualChange}/>
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleOutrasAtividadesPesquisaProducaoIntelectual}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasResumosPublicadosApresentados}
          >
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
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default OutrasAtividadesPesquisaProducaoIntelectual;
