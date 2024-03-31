import apiUrls from "../../../apis/apiUrls";
import React, { useState, useContext, useEffect} from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../../css-modules/Pesquisa.module.css";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme, useDisclosure } from '@chakra-ui/react';
import paisagem3 from "../../imagens/paisagem3.png";
import TabelasAvaliacaoDiscente from "../../../formularios/ensino/avaliacao-discente/TabelasAvaliacaoDiscente";
import ModalAvaliacaoDiscente from "../../../components/Modal/ensino/avaliacao-discente/ModalAvaliacaoDiscente";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer, toast } from "react-toastify";
import TokenFunctions from "../../../utils/Token";
import { AnoContext } from "../../../utils/AnoContext";

const AvaliacaoDocente = () => {

  const { ano } = useContext(AnoContext);

  const [pdfAvaliacaoDiscente, setPdfAvaliacaoDiscente] = useState(null);

  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = JSON.parse(localStorage.getItem(ano))?.avaliacao_discente || [];

    setData(db_costumer);
  }, [setData]);

  const { isOpen, onOpen, onClose } = useDisclosure();


  const handlepdfAvaliacaoDiscenteChange = (event) => {
    setPdfAvaliacaoDiscente(event.target.files[0]);
  }

  const handleAvaliacaoDiscente = async (event) => {
    event.preventDefault(); 
    const formData = new FormData(); 
    formData.append("file", pdfAvaliacaoDiscente); 

    if (pdfAvaliacaoDiscente === null){
      ToastifyMessages.warning("Campo vazio, por favor selecione um PDF para submeter!")
    }

    try {    
      const response = await fetch(apiUrls.avaliacao_discente, {
        method: "POST",
        body: formData,
      });
    
      if (response.ok) {
        const data = await response.json();

        ToastifyMessages.success("PDF submetido com sucesso");
        
        setTimeout(() => {
          onOpen();
        }, 2000);

        TokenFunctions.set_avaliacao_discente(data);
      } else {
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

        <form className={classesPesquisa.campoSubmissaoPDF} action="" method="post" encType="multipart/form-data" onSubmit={handleAvaliacaoDiscente}>
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfAvaliacaoDiscenteChange}/>
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
