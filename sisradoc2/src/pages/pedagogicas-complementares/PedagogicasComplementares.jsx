import React, { useState, useContext, useEffect } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import paisagem3 from "../imagens/paisagem3.png";
import TabelasPedagogicasComplementares from "../../formularios/ensino/pedagogicas-complementares/TabelasPedagogicasComplementares";

//import TabelasChSemanalAulas from "../../../formularios/ensino/aulas-letivas/TabelasChSemanalAulas";
import { AnoContext } from "../../utils/AnoContext";

const PedagogicasComplementares = () => {

  const { ano } = useContext(AnoContext);

  // const [totalSemestre1, setTotalSemestre1] = useState(totalChDocenteEnvolvidoGraduacaoSemestre1+totalChDocenteEnvolvidoPosGraduacaoSemestre1);
  // const [totalSemestre2, setTotalSemestre2] = useState(0);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
  const ChAulasLetivas = localStorageData.ChTotalAulasLetivas;
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  console.log(ChAulasLetivas["1Semestre"])

  const [totalSemestre1, setTotalSemestre1] = useState(ChAulasLetivas["1Semestre"]*2);
  const [totalSemestre1Graduacao, setTotalSemestre1Graduacao] = useState(ChAulasLetivas["1SemestreGraduacao"]*2);
  const [totalSemestre1PosGraduacao, setTotalSemestre1PosGraduacao] = useState(ChAulasLetivas["1SemestrePosGraduacao"]*2);

  const [totalSemestre2, setTotalSemestre2] = useState(ChAulasLetivas["2Semestre"]*2);
  const [totalSemestre2Graduacao, setTotalSemestre2Graduacao] = useState(ChAulasLetivas["2SemestreGraduacao"]*2);
  const [totalSemestre2PosGraduacao, setTotalSemestre2PosGraduacao] = useState(ChAulasLetivas["2SemestrePosGraduacao"]*2);


  useEffect(() => {
    setTotalSemestre1(ChAulasLetivas["1Semestre"]*2);
    setTotalSemestre1Graduacao(ChAulasLetivas["1SemestreGraduacao"]*2);
    setTotalSemestre1PosGraduacao(ChAulasLetivas["1SemestrePosGraduacao"]*2);
    
    setTotalSemestre2(ChAulasLetivas["2Semestre"]*2);
    setTotalSemestre2Graduacao(ChAulasLetivas["2SemestreGraduacao"]*2);
    setTotalSemestre2PosGraduacao(ChAulasLetivas["2SemestrePosGraduacao"]*2);




    const updatedLocalStorageData = {
      ...localStorageData,
      ChTotalPedagogicasComplementares: {
        "1Semestre": totalSemestre1,
        "1SemestreGraduacao": totalSemestre1Graduacao,
        "1SemestrePosGraduacao": totalSemestre1PosGraduacao,
        "2Semestre": totalSemestre2,
        "2SemestreGraduacao": totalSemestre2Graduacao,
        "2SemestrePosGraduacao": totalSemestre2PosGraduacao,
      }
    };
  
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));

    
    
  }, [
    ChAulasLetivas["1Semestre"]*2,
    ChAulasLetivas["1SemestreGraduacao"]*2,
    ChAulasLetivas["1SemestrePosGraduacao"]*2,
    ChAulasLetivas["2Semestre"]*2,
    ChAulasLetivas["2SemestreGraduacao"]*2,
    ChAulasLetivas["2SemestrePosGraduacao"]*2
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

      <div className={classes.ensinoContainer}>
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Pedagógicas Complementares</h1>
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
                    <input type="text" placeholder="CH" required value={totalSemestre1Graduacao}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalSemestre1PosGraduacao}/>
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
                      <p>Graduação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalSemestre2Graduacao}/>
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    <input type="text" placeholder="CH" required value={totalSemestre2PosGraduacao}/>
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

        <div className={classes.buttonSalvarPC}>
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default PedagogicasComplementares;
