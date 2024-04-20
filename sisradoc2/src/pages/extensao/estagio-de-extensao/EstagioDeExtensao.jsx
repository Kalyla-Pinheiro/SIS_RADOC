import React, { useState, useContext, useEffect } from "react";
import classes from "../../../css-modules/Extensao.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasEstagioDeExtensao from "../../../formularios/extensao/estagio-de-extensao/TabelasEstagioDeExtensao";
import { AnoContext } from "../../../utils/AnoContext";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const EstagioDeExtensao = () => {


  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [pdfEstagioDeExtensao, setPdfEstagioDeExtensao] = useState(null);

  const handlepdfEstagioDeExtensaoChange = (event) => {
    setPdfEstagioDeExtensao(event.target.files[0]);
  };

  const handleEstagioDeExtensao = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfEstagioDeExtensao);
    
    if (pdfEstagioDeExtensao === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }
    
  }

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const Estagio_Extensao = localStorageData.estagio_de_extensao;


  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));


  let EstagioExtensaoCH = 0;


  if (
    Array.isArray(Estagio_Extensao) &&
    Estagio_Extensao.length > 0
  ) {

    for (let i = 0; i < Estagio_Extensao.length; i++) {
      var dados = Estagio_Extensao[i];

      if (dados.chSemanal != "") {
        EstagioExtensaoCH += parseFloat(dados.chSemanal);
      } else {
        EstagioExtensaoCH = 0;
      }

    }
  }


  useEffect(() => {
    const updatedLocalStorageData = {
      ...localStorageData,
      ExtensaoChEstagioExtensao: {
        "ChTotal": EstagioExtensaoCH,
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
          <h1>Estágios de Extensão</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method=""
          encType="multipart/form-data"
          onSubmit={handleEstagioDeExtensao}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfEstagioDeExtensaoChange}/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleEstagioDeExtensao}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasProjetosExtensao}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasEstagioDeExtensao />
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

export default EstagioDeExtensao;
