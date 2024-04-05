import React, { useContext, useState, useEffect } from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useDisclosure, ChakraProvider, extendTheme } from "@chakra-ui/react";
import apiUrls from "../../../apis/apiUrls";
import TabelasProjetos from "../../../formularios/pesquisa/projetos/TabelasProjetos";
import { AnoContext } from "../../../utils/AnoContext";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import TokenFunctions from "../../../utils/Token";
import ModalProjetos from "../../../components/Modal/pesquisa/projetos/ModalProjetos";
import { ToastContainer, toast } from "react-toastify";

const Projetos = () => {
  const { ano } = useContext(AnoContext);

  const [pdfProjetosPesquisa, setPdfProjetosPesquisa] = useState(null);
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = JSON.parse(localStorage.getItem(ano))?.projetos || [];

    setData(db_costumer);
  }, [setData]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfProjetosPesquisaChange = (event) => {
    setPdfProjetosPesquisa(event.target.files[0]);
  };

  const handleProjetosPesquisa = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("file", pdfProjetosPesquisa);

    if (pdfProjetosPesquisa === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }

    try {
      const response = await fetch(apiUrls.projetos_pesquisa, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        ToastifyMessages.success("PDF submetido com sucesso");

        setTimeout(() => {
          onOpen();
        }, 2000);

        TokenFunctions.set_projetos_pesquisa(data);
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

      <div className={classes.pesquisaContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Projetos</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleProjetosPesquisa}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input
                type="file"
                accept=".pdf"
                onChange={handlepdfProjetosPesquisaChange}
              />
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasProjetos}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasProjetos />
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
              <div className={classes.camposTabelaAutor}>
                <div className={classes.tituloSemestre}>
                  <p>Autor(es)</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Cadastro" required />
              </div>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Nº Volume</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Número" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Nº Fasciculo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Número" required />
              </div>
            </div>
          </div>
          <div className={classes.conteiner3}>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Página Inicial</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Página" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>Página Final</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Página" required />
              </div>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabela}>
                <div className={classes.tituloSemestre}>
                  <p>Ano</p> <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Ano" required />
              </div>

              <div
                className={classes.camposTabela}
                id={classes.camposTabelaPraticaNCH}
              >
                <div className={classes.tituloSemestre}>
                  <p>ISSN</p> <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="ISSN" required />
              </div>
            </div>
          </div>
        </div>
        */}

        <div className={classes.buttons} id={classes.buttonProjetos}>
          <div>
            <a href="#">
              <button>Salvar</button>
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalProjetos
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
