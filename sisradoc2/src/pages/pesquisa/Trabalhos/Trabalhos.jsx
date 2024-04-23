import apiUrls from "../../../apis/apiUrls";
import React, { useContext, useState, useEffect } from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme, useDisclosure } from "@chakra-ui/react";
import TabelasTrabalhosBoletinsOutros from "../../../formularios/pesquisa/trabalhos-boletins-e-outros/TabelasTrabalhosBoletinsOutros";
import ModalTrabalhosBoletinsOutros from "../../../components/Modal/pesquisa/trabalhos-boletins-e-outros/ModalTrabalhosBoletinsOutros";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer, toast } from "react-toastify";
import TokenFunctions from "../../../utils/Token";
import { AnoContext } from "../../../utils/AnoContext";

const Trabalhos = () => {
  const { ano } = useContext(AnoContext);

  const [pdfTrabalhosBoletins, setPdfTrabalhosBoletins] = useState(null);
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = JSON.parse(localStorage.getItem(ano))?.trabalhos_boletins || [];

    setData(db_costumer);
  }, [setData]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfTrabalhosBoletinsChange = (event) => {
    setPdfTrabalhosBoletins(event.target.files[0]);
  };

  const handleTrabalhosBoletins = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfTrabalhosBoletins);

    if (pdfTrabalhosBoletins === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }

    try {
      const response = await fetch(apiUrls.trabalhos_boletins, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        ToastifyMessages.success("PDF submetido com sucesso");

        setTimeout(() => {
          onOpen();
        }, 2000);

        TokenFunctions.set_trabalhos_boletins(data);
      } else {
        const errorMessage = await response.text();
        const erro = JSON.parse(errorMessage);
        ToastifyMessages.error(`${erro.erro}`);
      }
    } catch (error) {
      console.log(error);
      ToastifyMessages.error(`${error.message}`);
    }

    try {
      const chaveDocumentoComprobatorio = ano + " - Trabalhos_Boletins_e_Outros";
  
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
      reader.readAsDataURL(pdfTrabalhosBoletins);
    } catch (error) {
      console.error("Erro ao processar o PDF:", error);
      ToastifyMessages.error("Erro ao processar o PDF!");
    }
  };

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
          <h1>Trabalhos, Boletins Técnicos e outros</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleTrabalhosBoletins}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input 
              type="file" 
              accept=".pdf"
              onChange={handlepdfTrabalhosBoletinsChange} 
              />
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasTrabalhosBoletinsOutros}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasTrabalhosBoletinsOutros />
            </ChakraProvider>
          </div>
        </div>

        {/*
        <div className={classes.conteiner2}>
          <div className={classes.tituloCampoOA}>
            <p> Informações do Projeto</p>
          </div>

          <div className={classes.campoTeoricasPraticas}>
            <div className={classes.camposTabelaTitulo}>
              <div className={classes.tituloSemestre}>
                <p>Titulo</p> <BsQuestionCircleFill className={classes.icon} />
              </div>
              <input type="text" placeholder="Titulo" required />
            </div>
          </div>
          <div className={classes.conteiner3}>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Cadastro Proped</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Cadastro" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Situação</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Situação" required />
              </div>
            </div>

            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaCheckbox}>
                <div className={classes.tituloSemestre}>
                  <p>Função:</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.tabelasCheckbox}>
                  <div>
                    <input type="checkbox" id="" name="" />
                    <label for="">Coordenador</label>
                  </div>
                  <div>
                    <input type="checkbox" id="" name="" />
                    <label for="">Colaborador</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        <div
          className={classes.buttons}
          id={classes.buttonTrabalhosBoletinsOutros}>
          <div>
            <a href="#">
              <button>Salvar</button>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalTrabalhosBoletinsOutros
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
          />
        </ChakraProvider>
      )}

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Trabalhos;
