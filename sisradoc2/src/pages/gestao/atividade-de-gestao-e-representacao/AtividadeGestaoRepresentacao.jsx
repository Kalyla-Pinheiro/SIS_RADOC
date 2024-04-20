import React, { useState, useContext, useEffect } from "react";
import classes from "../../../css-modules/Gestao.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasAtividadeGestaoRepresentacao from "../../../formularios/gestao/atividade-de-gestao-e-representacao/TabelasAtividadeGestaoRepresentacao";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";
import { AnoContext } from "../../../utils/AnoContext";

const AtividadeGestaoRepresentacao = () => {

  const { ano } = useContext(AnoContext);

  const [pdfAtividadeGestaoRepresentacao, setPdfAtividadeGestaoRepresentacao] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfAtividadeGestaoRepresentacaoChange = (event) => {
    setPdfAtividadeGestaoRepresentacao(event.target.files[0]);
  };

  const handleAtividadeGestaoRepresentacao = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfAtividadeGestaoRepresentacao);
    
    if (pdfAtividadeGestaoRepresentacao === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }
    
  }

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const Gestao_Representaçao = localStorageData.atividades_de_gestao_e_representacao;


  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));


  let CHGestãoRepresentaçãoSemestre1 = 0;
  let CHGestãoRepresentaçãoSemestre2 = 0;


  if (
    Array.isArray(Gestao_Representaçao) &&
    Gestao_Representaçao.length > 0
  ) {

    for (let i = 0; i < Gestao_Representaçao.length; i++) {
      var dados = Gestao_Representaçao[i];

      if (dados.chSemanal != "") {
        if(dados.semestre == "1º SEMESTRE") {
          CHGestãoRepresentaçãoSemestre1 += parseFloat(dados.chSemanal);
        }  else {
          CHGestãoRepresentaçãoSemestre1 += 0;
        }
        if(dados.semestre == "2º SEMESTRE") {
          CHGestãoRepresentaçãoSemestre2 += parseFloat(dados.chSemanal);
        }  else {
          CHGestãoRepresentaçãoSemestre2 += 0;
        }
        
      } else {
        CHGestãoRepresentaçãoSemestre1 = 0;
        CHGestãoRepresentaçãoSemestre1 = 0;
      }

    }
  }


  useEffect(() => {
    const updatedLocalStorageData = {
      ...localStorageData,
      GestãoChTotal: {
        "1Semestre": CHGestãoRepresentaçãoSemestre1,
        "2Semestre": CHGestãoRepresentaçãoSemestre2,
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

      <div className={classes.gestaoContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Atividades de Gestão e Representação</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleAtividadeGestaoRepresentacao}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfAtividadeGestaoRepresentacaoChange}/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleAtividadeGestaoRepresentacao}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasAtividadeGestaoRepresentacao}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasAtividadeGestaoRepresentacao />
            </ChakraProvider>
          </div>
        </div>

        <div
          className={classes.buttons}
          id={classes.buttonAtividadeGestaoRepresentacao}
        >
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

export default AtividadeGestaoRepresentacao;
