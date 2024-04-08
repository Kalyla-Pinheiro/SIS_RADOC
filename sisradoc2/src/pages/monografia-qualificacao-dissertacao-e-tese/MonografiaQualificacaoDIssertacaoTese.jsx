import React, { useState, useContext, useEffect } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../css-modules/Pesquisa.module.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasQualificacaoDissertacaoTese from "../../formularios/ensino/bancas-examinadoras/TabelasQualificaoDissertacaoTese";

import { AnoContext } from "../../utils/AnoContext";

const MonografiaQualificacaoDIssertacaoTese = () => {

  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const Monografia_Qualificacao = localStorageData.monografia_qualificacao_dissertacao_tese;


  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  let list_MonografiaQualificacao_Semestre1 = 0;
  let list_MonografiaQualificacao_Semestre2 = 0;

  if (
    Array.isArray(Monografia_Qualificacao) &&
    Monografia_Qualificacao.length > 0
  ) {


    // For de orientação

    for (let i = 0; i < Monografia_Qualificacao.length; i++) {
      var dados = Monografia_Qualificacao[i];

      if (
        // dados.participacao === "ORIENTAÇÃO"
        true
      ) {
        list_MonografiaQualificacao_Semestre1 += parseInt(
          dados.chSemanalSemestre1
        );
      }

    }

    for (let i = 0; i < Monografia_Qualificacao.length; i++) {
      var dados = Monografia_Qualificacao[i];

      if (
        // dados.participacao === "ORIENTAÇÃO"
        true
      ) {
        list_MonografiaQualificacao_Semestre2 += parseInt(
          dados.chSemanalSemestre2
        );
      }

    }

  }

  const [totalMonografiaSemestre1, setTotalMonografiaSemestre1] = useState(list_MonografiaQualificacao_Semestre1);
  const [totalMonografiaSemestre2, setTotalMonografiaSemestre2] = useState(list_MonografiaQualificacao_Semestre2);


  useEffect(() => {
    setTotalMonografiaSemestre1(list_MonografiaQualificacao_Semestre1);
    setTotalMonografiaSemestre2(list_MonografiaQualificacao_Semestre2);




    const updatedLocalStorageData = {
      ...localStorageData,
      ChTotalMonografia: {
        "1Semestre": list_MonografiaQualificacao_Semestre1,
        "2Semestre": list_MonografiaQualificacao_Semestre2,
      }
    };
  
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));


  }, [
    list_MonografiaQualificacao_Semestre1,
    list_MonografiaQualificacao_Semestre1,
  ]);



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
          <h1>Monografia, Qualificação, Dissertação e Tese</h1>
        </div>

        <form
          className={classesPesquisa.campoSubmissaoPDF}
          action=""
          method="post"
          encType="multipart/form-data"
        >
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input type="file" accept=".pdf" />
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classesPesquisa.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasQualificacaoDissertacaoTese}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasQualificacaoDissertacaoTese />
            </ChakraProvider>
          </div>
        </div>

        {/*
        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>Descrição da Banca</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Candidato</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Nome" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Trabalho</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Título" required />
                <input type="text" placeholder="Título" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>IES</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="IES" required />
                <input type="text" placeholder="IES" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Tipo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Tipo" required />
                <input type="text" placeholder="Tipo" required />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>CH Semanal por Banca</p>
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
          <a href="#">
            <button>Salvar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MonografiaQualificacaoDIssertacaoTese;
