import React, { useState, useContext, useEffect } from "react";
import classes from "../../../css-modules/Extensao.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasEstagioDeExtensao from "../../../formularios/extensao/estagio-de-extensao/TabelasEstagioDeExtensao";

import { AnoContext } from "../../../utils/AnoContext";

const EstagioDeExtensao = () => {


  const { ano } = useContext(AnoContext);

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
          method="post"
          encType="multipart/form-data"
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" />
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
    </div>
  );
};

export default EstagioDeExtensao;
