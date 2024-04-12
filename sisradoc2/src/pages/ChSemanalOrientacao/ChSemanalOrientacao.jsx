import React, { useState, useContext, useEffect } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import paisagem3 from "../imagens/paisagem3.png";
import TabelasCalculoChSemanal from "../../formularios/ensino/orientacao-supervisao-outros/TabelasCalculoChSemanal";

import { AnoContext } from "../../utils/AnoContext";

const ChSemanalOrientacao = () => {

  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};


  const orientacao_coorientacao = localStorageData.orientacao_coorientacao_academica;
  const supervisao_academica = localStorageData.supervisao_academica;
  const preceptoria_tutoria = localStorageData.preceptoria_e_ou_tutoria_de_residencia;


  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  let list_Orientacao_Semestre1 = 0;
  let list_Coorientacao_Semestre1 = 0;
  let list_Supervisao_Semestre1 = 0;
  let list_Preceptoria_Semestre1 = 0;

  let list_Orientacao_Semestre2 = 0;
  let list_Coorientacao_Semestre2 = 0;
  let list_Supervisao_Semestre2 = 0;
  let list_Preceptoria_Semestre2 = 0;

  

  if (
    Array.isArray(orientacao_coorientacao) &&
    orientacao_coorientacao.length > 0
  ) {


    // For de orientação

    for (let i = 0; i < orientacao_coorientacao.length; i++) {
      var dados = orientacao_coorientacao[i];

      if (dados.chSemanalSemestre1 != "" && dados.participacao === "ORIENTAÇÃO") {
        list_Orientacao_Semestre1 += parseInt(dados.chSemanalSemestre1);
      } else {
        list_Orientacao_Semestre1 = 0;
      }

    }

    for (let i = 0; i < orientacao_coorientacao.length; i++) {
      var dados = orientacao_coorientacao[i];

      if (dados.chSemanalSemestre2 != "" && dados.participacao === "ORIENTAÇÃO") {
        list_Orientacao_Semestre2 += parseInt(dados.chSemanalSemestre2);
      } else {
        list_Orientacao_Semestre2 = 0;
      }

    }

    // For de coorientação

    for (let i = 0; i < orientacao_coorientacao.length; i++) {
      var dados = orientacao_coorientacao[i];

      if (dados.chSemanalSemestre1 != "" && dados.participacao === "CO-ORIENTAÇÃO") {
        list_Coorientacao_Semestre1 += parseInt(dados.chSemanalSemestre1);
      } else{
        list_Coorientacao_Semestre1 = 0;
      }

    }

    for (let i = 0; i < orientacao_coorientacao.length; i++) {
      var dados = orientacao_coorientacao[i];

      if (dados.chSemanalSemestre2 != "" && dados.participacao === "CO-ORIENTAÇÃO") {
        list_Coorientacao_Semestre2 += parseInt(dados.chSemanalSemestre2);
      } else {
        list_Coorientacao_Semestre2 = 0;
      }

    }

  }



  if (
    Array.isArray(supervisao_academica) &&
    supervisao_academica.length > 0
  ) {

    // For de Supervisao

    for (let i = 0; i < supervisao_academica.length; i++) {
      var dados = supervisao_academica[i];

      if (dados.chSemanalSemestre1 != "") {
        list_Supervisao_Semestre1 += parseInt(dados.chSemanalSemestre1);
      } else {
        list_Supervisao_Semestre1 = 0;
      }

    }

    for (let i = 0; i < supervisao_academica.length; i++) {
      var dados = supervisao_academica[i];

      if (dados.chSemanalSemestre2 != "") {
        list_Supervisao_Semestre2 += parseInt(dados.chSemanalSemestre2);
      } else {
        list_Supervisao_Semestre2 = 0;
      }

    }

  }

  if (
    Array.isArray(preceptoria_tutoria) &&
    preceptoria_tutoria.length > 0
  ) {

    // For de Preceptoria

    for (let i = 0; i < preceptoria_tutoria.length; i++) {
      var dados = preceptoria_tutoria[i];

      if (dados.chSemanalSemestre1 != 0) {
        list_Preceptoria_Semestre1 += parseInt(dados.chSemanalSemestre1);
      } else {
        list_Preceptoria_Semestre1 = 0;
      }

    }

    for (let i = 0; i < preceptoria_tutoria.length; i++) {
      var dados = preceptoria_tutoria[i];

      if (dados.chSemanalSemestre2 != "") {
        list_Preceptoria_Semestre2 += parseInt(dados.chSemanalSemestre2);
      } else {
        list_Preceptoria_Semestre2 = 0;
      }

    }
  
  }


  // variaveis


  // const [totalOrientacaoSemestre1, setTotalOrientacaoSemestre1] = useState(list_Orientacao_Semestre1);
  // const [totalOrientacaoSemestre2, setTotalOrientacaoSemestre2] = useState(list_Orientacao_Semestre2);

  // const [totalCoorientacaoSemestre1, setTotalCoorientacaoSemestre1] = useState(list_Coorientacao_Semestre1);
  // const [totalCoorientacaoSemestre2, setTotalCoorientacaoSemestre2] = useState(list_Coorientacao_Semestre2);

  // const [totalSupervisaoSemestre1, setTotalSupervisaoSemestre1] = useState(list_Supervisao_Semestre1);
  // const [totalSupervisaoSemestre2, setTotalSupervisaoSemestre2] = useState(list_Supervisao_Semestre2);

  // const [totalPreceptoriaSemestre1, setTotalPreceptoriaSemestre1] = useState(list_Preceptoria_Semestre1);
  // const [totalPreceptoriaSemestre2, setTotalPreceptoriaSemestre2] = useState(list_Preceptoria_Semestre2);

  const [totalOrientacaoSemestre1, setTotalOrientacaoSemestre1] = useState(0);
  const [totalOrientacaoSemestre2, setTotalOrientacaoSemestre2] = useState(0);

  const [totalCoorientacaoSemestre1, setTotalCoorientacaoSemestre1] = useState(0);
  const [totalCoorientacaoSemestre2, setTotalCoorientacaoSemestre2] = useState(0);

  const [totalSupervisaoSemestre1, setTotalSupervisaoSemestre1] = useState(0);
  const [totalSupervisaoSemestre2, setTotalSupervisaoSemestre2] = useState(0);

  const [totalPreceptoriaSemestre1, setTotalPreceptoriaSemestre1] = useState(0);
  const [totalPreceptoriaSemestre2, setTotalPreceptoriaSemestre2] = useState(0);

  const [totalSemestre1, setTotalSemestre1] = useState(list_Orientacao_Semestre1+list_Coorientacao_Semestre1+list_Supervisao_Semestre1+list_Preceptoria_Semestre1);
  const [totalSemestre2, setTotalSemestre2] = useState(list_Orientacao_Semestre2+list_Coorientacao_Semestre2+list_Supervisao_Semestre2+list_Preceptoria_Semestre2);

  
  useEffect(() => {
    setTotalOrientacaoSemestre1(list_Orientacao_Semestre1);
    setTotalOrientacaoSemestre2(list_Orientacao_Semestre2);

    setTotalCoorientacaoSemestre1(list_Coorientacao_Semestre1);
    setTotalCoorientacaoSemestre2(list_Coorientacao_Semestre2);

    setTotalSupervisaoSemestre1(list_Supervisao_Semestre1);
    setTotalSupervisaoSemestre2(list_Supervisao_Semestre2);

    setTotalPreceptoriaSemestre1(list_Preceptoria_Semestre1);
    setTotalPreceptoriaSemestre2(list_Preceptoria_Semestre2);




    const updatedLocalStorageData = {
      ...localStorageData,
      ChTotalOrientacaoSupervisao: {
        "1Semestre": totalSemestre1,
        "2Semestre": totalSemestre2,
      }
    };
  
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));


  }, [
    list_Orientacao_Semestre1,
    list_Orientacao_Semestre2,

    list_Coorientacao_Semestre1,
    list_Coorientacao_Semestre2,

    list_Supervisao_Semestre1,
    list_Supervisao_Semestre2,

    list_Preceptoria_Semestre1,
    list_Preceptoria_Semestre2,
  ]);

  // console.log(list_Graduacao_Semestre1);

  






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
          <h1>Calculo do CH Semanal</h1>
        </div>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasCalculoChSemanalOrientacao}
          >
            <div className={classes.camposInlineOA}>
              <div
                className={classes.semestreNCH}
                id={classes.primeiroSemestreNCH}
              >
                <div className={classes.tituloCampoOA}>
                  <p>1º Semestre</p>
                </div>
                <div className={classes.campoTeoricasPraticas}>
                  <div className={classes.camposTabelaNCH}>
                    <div className={classes.tituloSemestre}>
                      <p>Orientação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalOrientacaoSemestre1}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Co-Orientação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalCoorientacaoSemestre1}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Supervisão</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalSupervisaoSemestre1}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Preceptoria</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalPreceptoriaSemestre1}/>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.ConteinerTabelaNCHteste}>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.tituloSemestre}>
                  <p>Total:</p>
                </div>
                <input type="text" placeholder="" required value={totalSemestre1}/>
              </div>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.buttonTotal}>
                  <button type="button">Calcular</button>
                </div>
              </div>
            </div>

            <div className={classes.camposInlineOA}>
              <div
                className={classes.semestreNCH}
                id={classes.primeiroSemestreNCH}
              >
                <div className={classes.tituloCampoOA}>
                  <p>2º Semestre</p>
                </div>
                <div className={classes.campoTeoricasPraticas}>
                  <div className={classes.camposTabelaNCH}>
                    <div className={classes.tituloSemestre}>
                      <p>Orientação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalOrientacaoSemestre2}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Co-Orientação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalCoorientacaoSemestre2}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Supervisão</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalSupervisaoSemestre2}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Preceptoria</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalPreceptoriaSemestre2}/>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.ConteinerTabelaNCHteste}>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.tituloSemestre}>
                  <p>Total:</p>
                </div>
                <input type="text" placeholder="" required value={totalSemestre2}/>
              </div>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.buttonTotal}>
                  <button type="button">Calcular</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.buttonOA}>
          <a href="/PreceptoriaOuTutoriaDeResidencia">
            <button>Voltar</button>
          </a>
          <a href="#">
            <button id={classes.buttonProximo}>Salvar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChSemanalOrientacao;
