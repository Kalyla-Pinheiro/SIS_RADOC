import React, { useState, useContext } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../css-modules/Pesquisa.module.css";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasPreceptoriaOuTutoriaDeResidencia from "../../formularios/ensino/orientacao-supervisao-outros/TabelasPreceptoriaOuTutoriaDeResidencia";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";
import { AnoContext } from "../../utils/AnoContext";

const PreceptoriaOuTutoriaDeResidencia = () => {

  const { ano } = useContext(AnoContext);

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

    try {
      const chaveDocumentoComprobatorio = ano + " - Preceptoria_Ou_Tutoria";
  
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
      reader.readAsDataURL(pdfPreceptoriaOuTutoriaDeResidencia);
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
