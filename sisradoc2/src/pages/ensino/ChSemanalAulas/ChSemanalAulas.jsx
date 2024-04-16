import React, { useState, useContext, useEffect } from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import paisagem3 from "../../imagens/paisagem3.png";
//import TabelasChSemanalAulas from "../../../formularios/ensino/aulas-letivas/TabelasChSemanalAulas";
import { AnoContext } from "../../../utils/AnoContext";
import TokenFunctions from "../../../utils/Token";
import apiUrls from "../../../apis/apiUrls";
import { type } from "@testing-library/user-event/dist/type";

const ChSemanalAulas = () => {
  // 1 - obter o json do local storage
  // 2 - encontrar dentro dele o json de "disciplinas_ministradas"
  // 3 - percorrer todos os itens presentes em "disciplinas_ministradas"
  // 4 - verificar em cada item de disciplinas_ministradas o "semestre" e o "nivel"
  // 5 - aplicar as regras e realizar o cálculo corretamente

  // o ch de graduacão não vai poder ser inferior a 8 em ambos os semestres e nem pode ultrapassar o valor de 20

  const { ano } = useContext(AnoContext);

  const [graduacaoSemestre1, setGraduacaoSemestre1] = useState("");
  const [graduacaoSemestre2, setGraduacaoSemestre2] = useState("");
  const [posGraduacaoSemestre1, setPosGraduacaoSemestre1] = useState("");
  const [posGraduacaoSemestre2, setPosGraduacaoSemestre2] = useState("");

  // const [totalSemestre1, setTotalSemestre1] = useState(totalChDocenteEnvolvidoGraduacaoSemestre1+totalChDocenteEnvolvidoPosGraduacaoSemestre1);
  // const [totalSemestre2, setTotalSemestre2] = useState(0);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const disciplinas_ministradas = localStorageData.disciplinas_ministradas;

  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));


  let list_Graduacao_Semestre1 = 0;
  let list_PosGraduacao_Semestre1 = 0;
  let list_Graduacao_Semestre2 = 0;
  let list_PosGraduacao_Semestre2 = 0;

  if (
    Array.isArray(disciplinas_ministradas) &&
    disciplinas_ministradas.length > 0
  ) {
    for (let i = 0; i < disciplinas_ministradas.length; i++) {
      var disciplina = disciplinas_ministradas[i];

      if ( disciplina.semestre === "1º SEMESTRE") {

        if (disciplina.nivel === "GRADUAÇÃO") {
          if (typeof disciplinas_ministradas[i].chDocenteEnvolvido === 'string' && disciplinas_ministradas[i].chDocenteEnvolvido.includes(',')) {
            const numeros = disciplinas_ministradas[i].chDocenteEnvolvido.split(',').map(Number); // Converter os valores para números
            const soma2ch = numeros.reduce((a, b) => a + b, 0); // Somar os valores
            list_Graduacao_Semestre1 += parseInt(soma2ch);
            
          } else {
            list_Graduacao_Semestre1 += parseInt(
              disciplinas_ministradas[i].chDocenteEnvolvido
            );
          }
        }

        if (disciplina.nivel === "PÓS-GRADUAÇÃO") {
          if (typeof disciplinas_ministradas[i].chDocenteEnvolvido === 'string' && disciplinas_ministradas[i].chDocenteEnvolvido.includes(',')) {
            const numeros = disciplinas_ministradas[i].chDocenteEnvolvido.split(',').map(Number); // Converter os valores para números
            const soma2ch = numeros.reduce((a, b) => a + b, 0); // Somar os valores
            list_PosGraduacao_Semestre1 += parseInt(soma2ch);
            
          } else {
            list_PosGraduacao_Semestre1 += parseInt(
              disciplinas_ministradas[i].chDocenteEnvolvido
            );
          }
        }

        
      }

      if ( disciplina.semestre === "2º SEMESTRE") {

        if (disciplina.nivel === "GRADUAÇÃO") {
          alert("2s")
          if (typeof disciplinas_ministradas[i].chDocenteEnvolvido === 'string' && disciplinas_ministradas[i].chDocenteEnvolvido.includes(',')) {
            const numeros = disciplinas_ministradas[i].chDocenteEnvolvido.split(',').map(Number); // Converter os valores para números
            const soma2ch = numeros.reduce((a, b) => a + b, 0); // Somar os valores
            list_Graduacao_Semestre2 += parseInt(soma2ch);
            
          } else {

          list_Graduacao_Semestre2 += parseInt(
            disciplinas_ministradas[i].chDocenteEnvolvido 
          );}
        }

        if (disciplina.nivel === "PÓS-GRADUAÇÃO") {
          if (typeof disciplinas_ministradas[i].chDocenteEnvolvido === 'string' && disciplinas_ministradas[i].chDocenteEnvolvido.includes(',')) {
            const numeros = disciplinas_ministradas[i].chDocenteEnvolvido.split(',').map(Number); // Converter os valores para números
            const soma2ch = numeros.reduce((a, b) => a + b, 0); // Somar os valores
            list_PosGraduacao_Semestre2 += parseInt(soma2ch);
            
          } else {
            list_PosGraduacao_Semestre2 += parseInt(
            disciplinas_ministradas[i].chDocenteEnvolvido
          );}
        }
      }
    }
  } else {
    console.log("disciplinas_ministradas não é um array ou está vazio");
  }

  // console.log(list_Graduacao_Semestre1);

  let totalChDocenteEnvolvidoGraduacaoSemestre1 = 0;
  let totalChDocenteEnvolvidoPosGraduacaoSemestre1 = 0;
  let totalChDocenteEnvolvidoGraduacaoSemestre2 = 0;
  let totalChDocenteEnvolvidoPosGraduacaoSemestre2 = 0;

  

  const chDocenteEnvolvido = parseInt(list_Graduacao_Semestre1);

    if (!isNaN(chDocenteEnvolvido)) {
      if (chDocenteEnvolvido % 15 == 0) {
        totalChDocenteEnvolvidoGraduacaoSemestre1 +=
          chDocenteEnvolvido / 15;
      }

      if (chDocenteEnvolvido % 17 == 0) {
        totalChDocenteEnvolvidoGraduacaoSemestre1 +=
          chDocenteEnvolvido / 17;
      }

      console.log(totalChDocenteEnvolvidoGraduacaoSemestre1);
    }
      

  const chDocenteEnvolvido2 = parseInt(list_PosGraduacao_Semestre1);

    if (!isNaN(chDocenteEnvolvido2)) {
      if (chDocenteEnvolvido2 % 15 == 0) {
        totalChDocenteEnvolvidoGraduacaoSemestre2 +=
        chDocenteEnvolvido2 / 15;
      }

      if (chDocenteEnvolvido2 % 17 == 0) {
        totalChDocenteEnvolvidoGraduacaoSemestre2 +=
        chDocenteEnvolvido2 / 17;
      }

      console.log(totalChDocenteEnvolvidoGraduacaoSemestre2);
    }

  const chDocenteEnvolvido3 = parseInt(list_Graduacao_Semestre2);

    if (!isNaN(chDocenteEnvolvido3)) {
      if (chDocenteEnvolvido3 % 15 == 0) {
        totalChDocenteEnvolvidoPosGraduacaoSemestre1 +=
        chDocenteEnvolvido3 / 15;
      }

      console.log(totalChDocenteEnvolvidoPosGraduacaoSemestre1);
    }

  const chDocenteEnvolvido4 = parseInt(list_PosGraduacao_Semestre2);

    if (!isNaN(chDocenteEnvolvido4)) {
      if (chDocenteEnvolvido4 % 15 == 0) {
        totalChDocenteEnvolvidoPosGraduacaoSemestre2 +=
        chDocenteEnvolvido4 / 15;
      }

      console.log(totalChDocenteEnvolvidoPosGraduacaoSemestre2);
    }
      
    

    // Finalização da variaveis

    // Graduação Semestre 1

    if (totalChDocenteEnvolvidoGraduacaoSemestre1 > 20) {
      totalChDocenteEnvolvidoGraduacaoSemestre1 = 20;
    }

    if (totalChDocenteEnvolvidoGraduacaoSemestre1 < 8) {
      totalChDocenteEnvolvidoGraduacaoSemestre1 = 0;
    }

    // Graduação Semestre 2

    if (totalChDocenteEnvolvidoGraduacaoSemestre2 > 20) {
      totalChDocenteEnvolvidoGraduacaoSemestre2 = 20;
    }

    if (totalChDocenteEnvolvidoGraduacaoSemestre2 < 8) {
      totalChDocenteEnvolvidoGraduacaoSemestre2 = 0;
    }

    // Pos-Graduação Semestre 1

    // Pos-Graduação Semestre 2
  

  const [totalSemestre1, setTotalSemestre1] = useState(totalChDocenteEnvolvidoGraduacaoSemestre1+totalChDocenteEnvolvidoPosGraduacaoSemestre1);
  const [totalSemestre2, setTotalSemestre2] = useState(totalChDocenteEnvolvidoGraduacaoSemestre2+totalChDocenteEnvolvidoPosGraduacaoSemestre2);

  useEffect(() => {
    setGraduacaoSemestre1(totalChDocenteEnvolvidoGraduacaoSemestre1);
    setGraduacaoSemestre2(totalChDocenteEnvolvidoGraduacaoSemestre2);

    setPosGraduacaoSemestre1(totalChDocenteEnvolvidoPosGraduacaoSemestre1);
    setPosGraduacaoSemestre2(totalChDocenteEnvolvidoPosGraduacaoSemestre2);

    const updatedLocalStorageData = {
      ...localStorageData,
      disciplinas_ministradas: disciplinas_ministradas,
      ChTotalAulasLetivas: {
        "1Semestre": totalSemestre1,
        "1SemestreGraduacao": totalChDocenteEnvolvidoGraduacaoSemestre1,
        "1SemestrePosGraduacao": totalChDocenteEnvolvidoPosGraduacaoSemestre1,
        "2Semestre": totalSemestre2,
        "2SemestreGraduacao": totalChDocenteEnvolvidoGraduacaoSemestre2,
        "2SemestrePosGraduacao": totalChDocenteEnvolvidoPosGraduacaoSemestre2,
      }
    };
  
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));

    
  }, [
    totalChDocenteEnvolvidoGraduacaoSemestre1,
    totalChDocenteEnvolvidoGraduacaoSemestre2,
    totalChDocenteEnvolvidoPosGraduacaoSemestre1,
    totalChDocenteEnvolvidoPosGraduacaoSemestre2,
    totalSemestre1,
    totalSemestre2
  ]);

  const somaChTotalSemestre1 = () => {
    const resultado = totalChDocenteEnvolvidoGraduacaoSemestre1 + totalChDocenteEnvolvidoPosGraduacaoSemestre1;
    setTotalSemestre1(resultado);
  };

  const somaChTotalSemestre2 = () => {
    const resultado = totalChDocenteEnvolvidoGraduacaoSemestre2 + totalChDocenteEnvolvidoPosGraduacaoSemestre2;
    setTotalSemestre2(resultado);
  };

  var itensExistentes = JSON.parse(localStorage.getItem(localStorageKey));
  console.log(itensExistentes)

  const guardaJSON = () => {
    window.location.reload();
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
          overflow: "hidden",
        },
      },
    },
  });

  const salvar_diarios_turmas = async () => {
    const bodyArgs = TokenFunctions.get_tabela();
    console.log(bodyArgs);

    try {
      const response = await fetch(apiUrls.salvar_diarios_turmas, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyArgs),
      });
      if (response.ok) {
        alert("Diários de turmas salvos com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar diários de turmas: ", error);
    }
  };

  return (
    <div>
      <Navegacao />

      <div className={classes.ensinoContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Cálculo do Ch semanal de aulas</h1>
        </div>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasChSemanalAulas}
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
                      <p>Graduação</p>{" "}
                    </div>
                    <input
                      type="text"
                      placeholder="CH"
                      value={graduacaoSemestre1}
                      onChange={(e) => setGraduacaoSemestre1(e.target.value)}
                      required
                    />
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    <input
                      type="text"
                      placeholder="CH"
                      value={posGraduacaoSemestre1}
                      onChange={(e) => setPosGraduacaoSemestre1(e.target.value)}
                      required
                    />
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
              {/* <div className={classes.camposTabelaNCHteste}>
                <div className={classes.buttonTotal}>
                  <button type="button" onClick={somaChTotalSemestre1}>
                    Calcular
                  </button>
                </div>
              </div> */}
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
                      <p>Graduação</p>{" "}
                    </div>
                    <input
                      type="text"
                      placeholder="CH"
                      value={graduacaoSemestre2}
                      onChange={(e) => setGraduacaoSemestre2(e.target.value)}
                      required
                    />
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    <input
                      type="text"
                      placeholder="CH"
                      value={posGraduacaoSemestre2}
                      onChange={(e) => setPosGraduacaoSemestre2(e.target.value)}
                      required
                    />
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
              {/* <div className={classes.camposTabelaNCHteste}>
                <div className={classes.buttonTotal}>
                  <button type="button" onClick={somaChTotalSemestre2}>
                    Calcular
                  </button>
                </div>
              </div> */}
            </div>

          </div>
        </div>

        <div className={classes.buttonCh}>
          <a href="/disciplinas">
            <button>Voltar</button>
          </a>
          <button onClick={salvar_diarios_turmas}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default ChSemanalAulas;
