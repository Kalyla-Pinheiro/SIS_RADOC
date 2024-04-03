import React, { useState, useContext, useEffect} from "react";
import classes from "../../../css-modules/Ensino.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import paisagem3 from "../../imagens/paisagem3.png";
//import TabelasChSemanalAulas from "../../../formularios/ensino/aulas-letivas/TabelasChSemanalAulas";
import { AnoContext } from "../../../utils/AnoContext";

const ChSemanalAulas = () => {

  // 1 - obter o json do local storage
  // 2 - encontrar dentro dele o json de "disciplinas_ministradas"
  // 3 - percorrer todos os itens presentes em "disciplinas_ministradas"
  // 4 - verificar em cada item de disciplinas_ministradas o "semestre" e o "nivel"
  // 5 - aplicar as regras e realizar o cálculo corretamente

  // o ch de graduacão não vai poder ser inferior a 8 em ambos os semestres e nem pode ultrapassar o valor de 20

  const { ano } = useContext(AnoContext);

  const [ graduacaoSemestre1, setGraduacaoSemestre1 ] = useState("");
  const [ graduacaoSemestre2, setGraduacaoSemestre2 ] = useState("");
  const [ posGraduacaoSemestre1, setPosGraduacaoSemestre1 ] = useState("");
  const [ posGraduacaoSemestre2, setPosGraduacaoSemestre2 ] = useState("");

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
  const disciplinas_ministradas = localStorageData.disciplinas_ministradas;

  // if (Array.isArray(disciplinas_ministradas)) {
  //   totalChDocenteEnvolvidoGraduacaoSemestre1 = disciplinas_ministradas.reduce((total, disciplina) => {
  //     if (disciplina.semestre === "1º SEMESTRE" && disciplina.nivel === "GRADUAÇÃO") {
  //       const chDocenteEnvolvido = parseInt(disciplina.chDocenteEnvolvido);
  //       if (!isNaN(chDocenteEnvolvido) && (chDocenteEnvolvido % 15 === 0 || chDocenteEnvolvido % 17 === 0)) {
  //         total += chDocenteEnvolvido;
  //       }
  //     }
  //     return total;
  //   }, 0);
  // } else {
  //   console.log('disciplinas_ministradas não é um array');
  // }

  let totalChDocenteEnvolvidoGraduacaoSemestre1 = 0;

  if (Array.isArray(disciplinas_ministradas) && disciplinas_ministradas.length > 0) {
    for (let i = 0; i < disciplinas_ministradas.length; i++) {
      var disciplina = disciplinas_ministradas[i];
      if (disciplina.semestre === "1º SEMESTRE" && disciplina.nivel === "GRADUAÇÃO") {
        const chDocenteEnvolvido = parseInt(disciplina.chDocenteEnvolvido);
        if (!isNaN(chDocenteEnvolvido) && (chDocenteEnvolvido % 15 === 0 || chDocenteEnvolvido % 17 === 0)) {
          totalChDocenteEnvolvidoGraduacaoSemestre1 += chDocenteEnvolvido;
        }
      }
    }
  } else {
    console.log('disciplinas_ministradas não é um array ou está vazio'); // Exibe uma mensagem de erro se 'disciplinas_ministradas' não for um array ou estiver vazio
  }

  useEffect(() => {
    setGraduacaoSemestre1(totalChDocenteEnvolvidoGraduacaoSemestre1);
  }, [totalChDocenteEnvolvidoGraduacaoSemestre1]);


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

  const salvar_diarios_turmas = () => {
    alert("cala a boca rodrigo")
  }

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
                    <input type="text" placeholder="CH" value={graduacaoSemestre1} onChange={(e) => setGraduacaoSemestre1(e.target.value)} required />
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.ConteinerTabelaNCHteste}>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.tituloSemestre}>
                  <p>Total:</p>
                </div>
                <input type="text" placeholder="" required />
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
                      <p>Graduação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required />
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.ConteinerTabelaNCHteste}>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.tituloSemestre}>
                  <p>Total:</p>
                </div>
                <input type="text" placeholder="" required />
              </div>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.buttonTotal}>
                  <button type="button">Calcular</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.buttonCh}>
          <a href="/disciplinas">
            <button>Voltar</button>
          </a>
          <button
          onClick={salvar_diarios_turmas()}
          >Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default ChSemanalAulas;
