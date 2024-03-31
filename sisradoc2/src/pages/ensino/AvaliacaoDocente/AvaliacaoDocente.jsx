import React, { useState, useEffect } from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../../css-modules/Pesquisa.module.css";
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasAvaliacaoDiscente from "../../../formularios/ensino/avaliacao-discente/TabelasAvaliacaoDiscente";
import TokenFunctions from "../../../utils/Token";
import { useDisclosure, ChakraProvider, extendTheme } from "@chakra-ui/react";
import ModalAvaliacaoDiscente from "../../../components/Modal/ensino/avaliacao-discente/ModalAvaliacaoDiscente";
import apiUrls from "../../../apis/apiUrls";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const AvaliacaoDocente = () => {
  const [pdfAvaliacao, setPdfAvaliacao] = useState(null);
  const [codigoDisciplina, setCodigoDisciplina] = useState("");
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("avaliacao_discente")
      ? JSON.parse(localStorage.getItem("avaliacao_discente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const { isOpen, onOpen, onClose } = useDisclosure(); // useDisclosure

  const handlepdfAvaliacaoChange = (event) => {
    setPdfAvaliacao(event.target.files[0]);
  };

  const handleAvaliacaoDiscente = async (event) => {
    event.preventDefault(); // Evitar que a página recarregue durante a submissão do formulário

    const formData = new FormData(); // Criação de um objeto FormData para enviar um arquivo PDF

    formData.append("file", pdfAvaliacao); // Adicionando o arquivo PDF ao objeto FormData

    // Validação de campos vazios
    if (pdfAvaliacao === null){
      ToastifyMessages.warning("Campo vazio, por favor selecione um PDF para submeter!")
    }

    // Requisição POST para a submissão do PDF para a API
    try {    
      const response = await fetch(apiUrls.avaliacao_discente, {
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

        TokenFunctions.set_avaliacao_discente_codigo(data);
      } else{
        const errorMessage = await response.text();
        const erro = JSON.parse(errorMessage);
        ToastifyMessages.error(`${erro.erro}`);
      }
    } catch (error) {
      ToastifyMessages.error(`${error.message}`);
    }
  };    

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${paisagem3})`,
          fontFamily: "Poppins, sans-serif",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden"
        },
      },
    },
  });

  return (
    <div>
      <Navegacao />

      <div className={classes.orientacaoAcademicaContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Avaliação Discente</h1>
        </div>

        <form  action="" method="post" encType="multipart/form-data"
          onSubmit={handleAvaliacaoDiscente} className={classesPesquisa.campoSubmissaoPDF}>
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfAvaliacaoChange} />
              <p>Relatório de Avaliação Docência (PDF)</p>
            </div>
            <div className={classesPesquisa.buttonSubmeterPDF}>
              <button>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div className={classes.campoTabelasSemestre} id={classes.tabelasAvaliacaoDiscente}>
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasAvaliacaoDiscente />
            </ChakraProvider>
          </div>
        </div>

        {/*
        <div className={classes.AvaliacaoD}>
          <div className={classes.camposInlineOA}>
            <div
              className={classes.semestreNCH}
              id={classes.primeiroSemestreNCH}
            >
              <div className={classes.tituloCampoOA}>
                <p>1 Semestre</p>
              </div>

              <div className={classes.campoTeoricasPraticas}>
                <div className={classes.camposTabelaNCH}>
                  <div className={classes.tituloSemestre}>
                    <p>Cod. Disciplina</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="Código" required />
                  <input type="text" placeholder="Código" required />
                </div>

                <div
                  className={classes.camposTabelaNCH}
                  id={classes.camposTabelaPraticaNCH}
                >
                  <div className={classes.tituloSemestre}>
                    <p>Média</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="CH" required />
                  <input type="text" placeholder="CH" required />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.camposInlineOA}>
            <div
              className={classes.semestreNCH}
              id={classes.primeiroSemestreNCH}
            >
              <div className={classes.tituloCampoOA}>
                <p>2 Semestre</p>
              </div>

              <div className={classes.campoTeoricasPraticas}>
                <div className={classes.camposTabelaNCH}>
                  <div className={classes.tituloSemestre}>
                    <p>Cod. Disciplina</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="Código" required />
                  <input type="text" placeholder="Código" required />
                </div>

                <div
                  className={classes.camposTabelaNCH}
                  id={classes.camposTabelaPraticaNCH}
                >
                  <div className={classes.tituloSemestre}>
                    <p>Média</p>{" "}
                    <BsQuestionCircleFill className={classes.icon} />
                  </div>
                  <input type="text" placeholder="CH" required />
                  <input type="text" placeholder="CH" required />
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        <div className={classes.buttonAD}>
          <a href="#">
            <button id={classes.buttonProximo}>Salvar</button>
          </a>
        </div>
      </div>
      {isOpen && (
        <ChakraProvider theme={theme} resetCSS={false}> 
          <ModalAvaliacaoDiscente
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

export default AvaliacaoDocente;
