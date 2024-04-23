import React, { useState, useContext } from "react";
import { useEffect } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import PopUp from "../../components/popUp/popUp";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import apiUrls from "../../apis/apiUrls";
import { ToastContainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import TabelasDisciplinasMinistradas from "../../formularios/ensino/aulas-letivas/TabelasDisciplinasMinistradas";
import TokenFunctions from "../../utils/Token";
import { useDisclosure, ChakraProvider, extendTheme } from "@chakra-ui/react";
import ModalDisciplinasMinistradas from "../../components/Modal/ensino/aulas-letivas/ModalDisciplinasMinistradas";
import { AnoContext } from "../../utils/AnoContext";

const DisciplinasMinistradas = () => {

  const { ano } = useContext(AnoContext);

  const [pdfDisciplinas, setPdfDisciplinas] = useState(null);
  // Variável de estado para armazenar o arquivo PDF de diários de turma
  const [pdfDiarios, setPdfDiarios] = useState(null);
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  const [ch, setCH] = useState("");
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  //const anoContext = useAnoContext();
  //const ano = anoContext.ano;

  //console.log("Valor do ano em disciplinas:", ano);

  useEffect(() => {
    // const db_costumer = localStorage.getItem("disciplinas_ministradas")
    //   ? JSON.parse(localStorage.getItem("disciplinas_ministradas"))
    //   : [];

    const db_costumer = JSON.parse(localStorage.getItem(ano))?.disciplinas_ministradas || [];

    setData(db_costumer);
  }, [setData]);

  const { isOpen, onOpen, onClose } = useDisclosure(); // useDisclosure

  // funcões referentes as operacões no localStorage
  const armazenarNaSessionStorage = (chave, valor) => {
    sessionStorage.setItem(chave, valor);
  };
  const apagarNaSessionStorage = (chave) => {
    sessionStorage.removeItem(chave);
  };

  const handlepdfDisciplinasChange = (event) => {
    setPdfDisciplinas(event.target.files[0]);
  };

  const handlepdfDiariosChange = (event) => {
    setPdfDiarios(event.target.files[0]);
  };

  const handleDisciplinasMinistradas = async (event) => {
    
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfDisciplinas);

    if (pdfDisciplinas === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }

    try {

      const response = await fetch(apiUrls.disc_ministradas, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        ToastifyMessages.success("PDF submetido com sucesso");
      }
    } catch (error) {
      ToastifyMessages.error("Erro ao submeter PDF");
    }
  };

  const handleDiarioDeTurma = async (event) => {
    event.preventDefault(); // Evitar que a página recarregue durante a submissão do formulário

    const formData = new FormData(); // Criação de um objeto FormData para enviar um arquivo PDF

    formData.append("file", pdfDiarios); // Adicionando o arquivo PDF ao objeto FormData

    // Validação de campos vazios
    if (pdfDiarios === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }

    // Requisição POST para a submissão do PDF para a API
    try {
      const response = await fetch(apiUrls.aulas_letivas, {
        method: "POST",
        body: formData,
      });

      // Se a resposta da requisição for bem sucedida (200)
      if (response.ok) {
        // Aguarde a resolução da promessa retornada por response.json()
        const data = await response.json();

        // Exibir a mensagem de sucesso
        ToastifyMessages.success("PDF submetido com sucesso");

        // Aguardar 2 segundos para executar a função onOpen
        setTimeout(() => {
          onOpen();
        }, 2000);

        TokenFunctions.set_diario_turma(data);
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

      <div className={classes.disciplinasMinistradasConteiner}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Disciplinas Ministradas</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleDisciplinasMinistradas}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs} id={classes.primeiroInput}>
              <input
                type="file"
                accept=".pdf"
                onChange={handlepdfDisciplinasChange}
              />
              <p>Declaração de disciplinas ministradas (PDF)</p>
            </div>
          </div>
          <div className={classes.buttonSubmeterPDF}>
            <button type="submit">Submeter PDF</button>
          </div>
        </form>

        <form
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleDiarioDeTurma}
          className={classes.campoSubmissaoPDF}
          id={classes.segundoCampoSubmissao}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs} id={classes.segundoInput}>
              <input
                type="file"
                accept=".pdf"
                onChange={handlepdfDiariosChange}
              />
              <p>Diario de turma (PDF)</p>
            </div>
          </div>
          <div
            className={`${classes.buttonSubmeterPDF} ${classes.secondButton}`}
          >
            <button>Submeter PDF</button>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasDisciplinasMinistradas}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasDisciplinasMinistradas />
            </ChakraProvider>
          </div>
        </div>

        {/*
        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.tituloSemestre}>
            <p>1º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input className="nomePrimeiroSemestre" type="text" placeholder="Nome" value={sessionStorage.getItem("nome")} readOnly/>{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input className="siglaPrimeiroSemestre" type="text" value={sessionStorage.getItem("sigla")} placeholder="Sigla do curso" readOnly />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input className="chPrimeiroSemestre" type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input className={classes.ultimoCampoInput} type="text" value={sessionStorage.getItem("ch")} placeholder="CH total" readOnly/>{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="CH total" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>
        
        <div className={classes.semestre}>
          <div className={classes.tituloSemestre}>
            <p>2º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="CH total" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="CH total" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>
        */}

        <div
          className={classes.buttons}
          id={classes.buttonDisciplinaMinistrada}
        >
          <a href="/ensino/ChSemanalAulas">
            <button>Próximo</button>
          </a>
        </div>
      </div>
      {isOpen && (
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalDisciplinasMinistradas
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

export default DisciplinasMinistradas;
