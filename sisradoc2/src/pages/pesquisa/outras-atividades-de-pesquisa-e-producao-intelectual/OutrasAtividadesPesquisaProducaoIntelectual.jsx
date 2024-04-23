import React, { useState, useContext } from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasOutrasAtividadesProducaoIntelectual from "../../../formularios/pesquisa/outras-atividades-de-pesquisa-e-producao-intelectual/TabelasOutrasAtividadesPesquisaProducaoIntelectual";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";
import { AnoContext } from "../../../utils/AnoContext";

const OutrasAtividadesPesquisaProducaoIntelectual = () => {

  const { ano } = useContext(AnoContext);

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

    try {
      const chaveDocumentoComprobatorio = ano + " - Outras_Atividades_Pesquisa";
  
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          // Converte o PDF em uma string base64 para armazenamento
          const pdfBase64 = e.target.result.split(",")[1]; // Remover o prefixo 'data:application/pdf;base64,'
  
          // Verifica se a string base64 é válida
          if (!isValidBase64(pdfBase64)) {
            ToastifyMessages.error("Erro ao processar o PDF. A string base64 é inválida.");
            return;
          }
  
          // Obtém os dados existentes do localStorage
          const localStorageKey = "itens_documentos";
          let localStorageData = localStorage.getItem(localStorageKey);
          if (!localStorageData) {
            localStorageData = {};
          } else {
            localStorageData = JSON.parse(localStorageData);
          }
  
          // Adiciona o novo PDF ao objeto localStorageData
          localStorageData[chaveDocumentoComprobatorio] = pdfBase64;
  
          // Armazena o objeto atualizado de volta no localStorage
          localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  
          ToastifyMessages.success("PDF submetido com sucesso!");
        } catch (error) {
          console.error("Erro ao processar o PDF:", error);
          ToastifyMessages.error("Erro ao processar o PDF!");
        }
      };
  
      // Lê o arquivo PDF como uma URL de dados
      reader.readAsDataURL(pdfOutrasAtividadesPesquisaProducaoIntelectual);
    } catch (error) {
      console.error("Erro ao processar o PDF:", error);
      ToastifyMessages.error("Erro ao processar o PDF!");
    }
  }

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

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
