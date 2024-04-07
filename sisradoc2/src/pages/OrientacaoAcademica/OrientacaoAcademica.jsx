import apiUrls from "../../apis/apiUrls";
import React, { useContext, useState, useEffect } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../css-modules/Pesquisa.module.css";
import { useDisclosure, ChakraProvider, extendTheme } from "@chakra-ui/react";
import TabelasOrientacaoCoorientacaoAcademica from "../../formularios/ensino/orientacao-supervisao-outros/TabelasOrientacaoCoorientacaoAcademica";
import ModalOrientacaoCoorientacaoAcademica from "../../components/Modal/ensino/orientacao-supervisao-outros/ModalOrientacaoCoorientacaoAcademica";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import { ToastContainer, toast } from "react-toastify";
import TokenFunctions from "../../utils/Token";
import { AnoContext } from "../../utils/AnoContext";

const OrientacaoAcademica = () => {
  const { ano } = useContext(AnoContext);

  const [pdfOrientacaoAcademica, setPdfOrientacaoAcademica] = useState(null);
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = JSON.parse(localStorage.getItem(ano))?.orientacao_academica || [];

    setData(db_costumer);
  }, [setData]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfOrientacaoAcademicaChange = (event) => {
    setPdfOrientacaoAcademica(event.target.files[0]);
  };

  const handleOrientacaoAcademica = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfOrientacaoAcademica);

    if (pdfOrientacaoAcademica === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }

    try {
      const response = await fetch(apiUrls.orientacao_academica, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        ToastifyMessages.success("PDF submetido com sucesso");

        setTimeout(() => {
          onOpen();
        }, 2000);

        TokenFunctions.set_orientacao_academica(data);
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

      <div className={classes.orientacaoAcademicaContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Orientação/Coorientação Acadêmica</h1>
        </div>

        <form
          className={classesPesquisa.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleOrientacaoAcademica}
        >
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input 
              type="file" 
              accept=".pdf"
              onChange={handlepdfOrientacaoAcademicaChange}
              />
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classesPesquisa.buttonSubmeterPDF}>
              <button>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasOrientacaoCoorientacaoAcademica}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasOrientacaoCoorientacaoAcademica />
            </ChakraProvider>
          </div>
        </div>

        {/*
        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>Informações do Orientando</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Nome Completo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Nome" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Matrícula</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Matrícula" required />
                <input type="text" placeholder="Matrícula" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Curso</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Curso" required />
                <input type="text" placeholder="Curso" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Tipo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Tipo" required />
                <input type="text" placeholder="Tipo" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Nível</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nível" required />
                <input type="text" placeholder="Nível" required />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>CH Semanal por Orientando</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>1º Semestre</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="CH" required />
                <input type="text" placeholder="CH" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>2º Semestre</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="CH" required />
                <input type="text" placeholder="CH" required />
              </div>
            </div>
          </div>
        </div>
        */}

        <div className={classes.buttonOA}>
          <div>
          <a href="/SupervisaoAcademica">
            <button>Próximo</button>
          </a>
        </div>
      </div>
    </div>

      {isOpen && (
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalOrientacaoCoorientacaoAcademica
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

export default OrientacaoAcademica;
