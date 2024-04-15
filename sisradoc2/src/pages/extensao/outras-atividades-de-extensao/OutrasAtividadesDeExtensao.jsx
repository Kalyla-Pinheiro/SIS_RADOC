import React, { useState, useContext, useEffect } from "react";
import classes from "../../../css-modules/Extensao.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasOutrasAtividadesDeExtensao from "../../../formularios/extensao/outras-atividades-de-extensao/TabelasOutrasAtividadesDeExtensao";

import { AnoContext } from "../../../utils/AnoContext";

const OutrasAtividadesDeExtensao = () => {

  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const Outras_Atividades_Extensao = localStorageData.outras_atividades_de_extensao;


  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));


  let outrasAtividadesExtensaoSemestre1 = 0;
  let outrasAtividadesExtensaoSemestre2 = 0;


  if (
    Array.isArray(Outras_Atividades_Extensao) &&
    Outras_Atividades_Extensao.length > 0
  ) {

    for (let i = 0; i < Outras_Atividades_Extensao.length; i++) {
      var dados = Outras_Atividades_Extensao[i];

      if (dados.outrasAtividadesExtensaoSemestre1 != "") {
        outrasAtividadesExtensaoSemestre1 += parseFloat(dados.chSemanalSemestre1);
      } else {
        outrasAtividadesExtensaoSemestre1 = 0;
      }

    }

    for (let i = 0; i < Outras_Atividades_Extensao.length; i++) {
      var dados = Outras_Atividades_Extensao[i];

      if (dados.chSemanalSemestre2 != "") {
        outrasAtividadesExtensaoSemestre2 += parseFloat(dados.chSemanalSemestre2);
      } else {
        outrasAtividadesExtensaoSemestre2 = 0;
      }

    }
  }

  useEffect(() => {
    const updatedLocalStorageData = {
      ...localStorageData,
      ExtensaoChOutrasAtividades: {
        "1Semestre": outrasAtividadesExtensaoSemestre1,
        "2Semestre": outrasAtividadesExtensaoSemestre2,
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
          <h1>Outras Atividades de Extensão</h1>
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
              <TabelasOutrasAtividadesDeExtensao />
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

export default OutrasAtividadesDeExtensao;
