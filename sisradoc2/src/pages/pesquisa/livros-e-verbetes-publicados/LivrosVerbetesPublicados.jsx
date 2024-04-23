import React, { useState, useContext } from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme, useDisclosure } from "@chakra-ui/react";
import TabelasLivrosVerbetesPublicados from "../../../formularios/pesquisa/livros-verbetes-publicados/TabelasLivrosVerbetesPublicados";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";
import apiUrls from "../../../apis/apiUrls";
import { AnoContext } from "../../../utils/AnoContext";

const LivrosVerbetesPublicados = () => {

  const { ano } = useContext(AnoContext);

  const [pdfLivrosVerbetesPublicados, setPdfLivrosVerbetesPublicados] = useState(null);

  const handlepdfLivrosVerbetesPublicadosChange = (event) => {
    setPdfLivrosVerbetesPublicados(event.target.files[0]);
  };

  const handleLivrosVerbetesPublicados = async (event) => {
    event.preventDefault();
    
    if (!pdfLivrosVerbetesPublicados) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
      return;
    }

    const formData = new FormData();
    formData.append("pdf", pdfLivrosVerbetesPublicados);

    try {
      const response = await fetch(apiUrls.salvar_pdf, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Atualizar o estado local para exibir o PDF
        setPdfLivrosVerbetesPublicados(null);
        ToastifyMessages.success('PDF submetido com sucesso!');
      } else {
        ToastifyMessages.error('Erro ao submeter PDF');
      }
    } catch (error) {
      console.error('Erro ao submeter PDF:', error);
      ToastifyMessages.error('Erro ao submeter PDF');
    }

    try {
      const chaveDocumentoComprobatorio = ano + " - Livros_Verbetes_Publicados";
  
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
      reader.readAsDataURL(pdfLivrosVerbetesPublicados);
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
          <h1>Livros e Verbetes Publicados</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          onSubmit={handleLivrosVerbetesPublicados}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfLivrosVerbetesPublicadosChange}/>
              <p>Documentos Comprobatórios (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasLivrosVerbetesPublicados}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasLivrosVerbetesPublicados />
            </ChakraProvider>
          </div>
        </div>

        {/*
        <div className={classes.tituloCampoLVP}>
          <p>Informações dos livros, capítulos e verbetes</p>
        </div>

        <div className={classes.camposPreenchimento}>

          <div className={classes.camposPreenchimentoDivFlex}>
            <input type="text" placeholder="Título" id={classes.campoPreenchimentoTitulo}/>
            <BsQuestionCircleFill className={classes.icon} />
          </div>

          <div className={classes.camposPreenchimentoDivFlex}>

            <div className={classes.camposPreenchimentoDivColumn} id={classes.colunaMae1}>
              <div className={classes.camposPreenchimentoDivFlex}>
                <input type="text" placeholder="Subtítulo" id={classes.inputLargo}/>
                <BsQuestionCircleFill className={classes.icon} />
              </div>
              <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                <input type="text" placeholder="Autor" id={classes.inputLargo}/>
                <BsQuestionCircleFill className={classes.icon} />
              </div>

              <div className={classes.camposPreenchimentoDivFlex}>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                  <input type="text" placeholder="Página Inicial"/> 
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                  <input type="text" placeholder="Página Final"/> 
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
              </div>
            </div>

            <div className={classes.camposPreenchimentoDivFlex} id={classes.colunaMae2}>
              <div className={classes.camposPreenchimentoDivColumn}>
                <div className={classes.camposPreenchimentoDivFlex}>
                  <input type="text" placeholder="Editora"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                  <input type="text" placeholder="Nº Volume"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                  <input type="text" placeholder="Ano"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
              </div>

              <div className={classes.camposPreenchimentoDivColumn}>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD2}>
                  <input type="text" placeholder="Cidade Publicação"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                  <input type="text" placeholder="Nº Fascículo"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                  <input type="text" placeholder="ISBN"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
              </div>
            </div>

          </div>

        </div>
        */}

        <div className={classes.buttons} id={classes.buttonSalvarLVP}>
          <a href="#">
            <button>Salvar</button>
          </a>
        </div>
      </div>
      <ToastContainer position="bottom-left" />
    </div> 
  );
};

export default LivrosVerbetesPublicados;
