import React, { useState, useContext, useEffect } from "react";
import classes from "../../../css-modules/Extensao.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasAtividadeDeEnsinoNaoFormal from "../../../formularios/extensao/atividade-de-ensino-nao-formal/TabelasAtividadeDeEnsinoNaoFormal";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";
import { AnoContext } from "../../../utils/AnoContext";

const AtividadeDeEnsinoNaoFormal = () => {

  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [pdfAtividadeDeEnsinoNaoFormal, setPdfAtividadeDeEnsinoNaoFormal] = useState(null);

  const handlepdfAtividadeDeEnsinoNaoFormalChange = (event) => {
    setPdfAtividadeDeEnsinoNaoFormal(event.target.files[0]);
  };

  const handleAtividadeDeEnsinoNaoFormal = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfAtividadeDeEnsinoNaoFormal);
    
    if (pdfAtividadeDeEnsinoNaoFormal === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }

    try {
      const chaveDocumentoComprobatorio = ano + " - Atividade_De_Ensino_Não_Formal";
  
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
      reader.readAsDataURL(pdfAtividadeDeEnsinoNaoFormal);
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

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const Atividades_naoFormais = localStorageData.atividades_de_ensino_nao_formais;


  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));


  let atividadesNaoFormaisSemestre1 = 0;
  let atividadesNaoFormaisSemestre2 = 0;

  if (
    Array.isArray(Atividades_naoFormais) &&
    Atividades_naoFormais.length > 0
  ) {

    for (let i = 0; i < Atividades_naoFormais.length; i++) {
      var dados = Atividades_naoFormais[i];

      if (dados.chSemanalSemestre1 != "") {
        atividadesNaoFormaisSemestre1 += parseFloat(dados.chSemanalSemestre1);
      } else {
        atividadesNaoFormaisSemestre1 = 0;
      }

    }

    for (let i = 0; i < Atividades_naoFormais.length; i++) {
      var dados = Atividades_naoFormais[i];

      if (dados.chSemanalSemestre2 != "") {
        atividadesNaoFormaisSemestre2 += parseFloat(dados.chSemanalSemestre2);
      } else {
        atividadesNaoFormaisSemestre2 = 0;
      }

    }
  }

  useEffect(() => {
    const updatedLocalStorageData = {
      ...localStorageData,
      ExtensaoChAtividadesnaoFormais: {
        "1Semestre": atividadesNaoFormaisSemestre1,
        "2Semestre": atividadesNaoFormaisSemestre2,
      }
    };
  
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
  });

  const guardaJSON = () => {
    window.location.reload();
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

      <div className={classes.extensaoContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Atividades de Ensino Não Formais</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleAtividadeDeEnsinoNaoFormal}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfAtividadeDeEnsinoNaoFormalChange}/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleAtividadeDeEnsinoNaoFormal}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasProjetosExtensao}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasAtividadeDeEnsinoNaoFormal />
            </ChakraProvider>
          </div>
        </div>

        <div className={classes.buttons} id={classes.buttonProjetosDeExtensao}>
          <div>
            <a href="#">
              <button onClick={guardaJSON}>Salvar</button>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default AtividadeDeEnsinoNaoFormal;
