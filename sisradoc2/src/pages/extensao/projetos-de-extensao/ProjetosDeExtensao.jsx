import apiUrls from "../../../apis/apiUrls";
import React, { useContext, useState, useEffect } from "react";
import classes from "../../../css-modules/Extensao.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme, useDisclosure } from "@chakra-ui/react";
import TabelasProjetosDeExtensao from "../../../formularios/extensao/projetos-de-extensao/TabelasProjetosDeExtensao";
import ModalProjetosDeExtensao from "../../../components/Modal/extensao/projetos-de-extensao/ModalProjetosDeExtensao";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer, toast } from "react-toastify";
import TokenFunctions from "../../../utils/Token";
import { AnoContext } from "../../../utils/AnoContext";

const Projetos = () => {
  const { ano } = useContext(AnoContext);

  const [pdfProjetosExtensao, setPdfProjetosExtensao] = useState(null);
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = JSON.parse(localStorage.getItem(ano))?.projetos_extensao || [];

    setData(db_costumer);
  }, [setData]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfProjetosExtensaoChange = (event) => {
    setPdfProjetosExtensao(event.target.files[0]);
  };

  const handleProjetosExtensao = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfProjetosExtensao);

    if (pdfProjetosExtensao === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }

    try {
      const response = await fetch(apiUrls.projetos_extensao, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        ToastifyMessages.success("PDF submetido com sucesso");

        setTimeout(() => {
          onOpen();
        }, 2000);

        TokenFunctions.set_projetos_extensao(data);
      } else {
        const errorMessage = await response.text();
        const erro = JSON.parse(errorMessage);
        ToastifyMessages.error(`${erro.erro}`);
      }
    } catch (error) {
      console.log(error);
      ToastifyMessages.error(`${error.message}`);
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

      <div className={classes.extensaoContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Projetos de Extensão</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleProjetosExtensao}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input 
              type="file" 
              accept=".pdf"
              onChange={handlepdfProjetosExtensaoChange}
              />
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasProjetosExtensao}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasProjetosDeExtensao />
            </ChakraProvider>
          </div>
        </div>

        <div className={classes.buttons} id={classes.buttonProjetosDeExtensao}>
          <div>
            <a href="#">
              <button>Salvar</button>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalProjetosDeExtensao
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

export default Projetos;
