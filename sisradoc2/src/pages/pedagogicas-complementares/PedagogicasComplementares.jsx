import React, { useState, useContext, useEffect } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { AnoContext } from "../../utils/AnoContext";

const PedagogicasComplementares = () => {
  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  const localStorageData = localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : {};
  const ChAulasLetivas = localStorageData.ChTotalAulasLetivas || {};

  console.log(ChAulasLetivas["1Semestre"])



  // Constante utilizadas para pegar o dobro

  const [totalSemestre1, setTotalSemestre1] = useState(ChAulasLetivas["1Semestre"] * 2 || 0);
  const [totalSemestre1Graduacao, setTotalSemestre1Graduacao] = useState(ChAulasLetivas["1SemestreGraduacao"] * 2 || 0);
  const [totalSemestre1PosGraduacao, setTotalSemestre1PosGraduacao] = useState(ChAulasLetivas["1SemestrePosGraduacao"] * 2 || 0);

  const [totalSemestre2, setTotalSemestre2] = useState(ChAulasLetivas["2Semestre"] * 2 || 0);
  const [totalSemestre2Graduacao, setTotalSemestre2Graduacao] = useState(ChAulasLetivas["2SemestreGraduacao"] * 2 || 0);
  const [totalSemestre2PosGraduacao, setTotalSemestre2PosGraduacao] = useState(ChAulasLetivas["2SemestrePosGraduacao"] * 2 || 0);




  // Constante utilizadas para pegar os inputs

  const [valorinputSemestre1Graduação, setinputSemestre1Graduação] = useState(
    localStorageData.ChTotalPedagogicasComplementares?.["1SemestreGraduacao"] || 0
  );
  const [valorinputSemestre1PosGraduação, setinputSemestre1PosGraduação] = useState(
    localStorageData.ChTotalPedagogicasComplementares?.["1SemestrePosGraduacao"] || 0
  );
  const [SomaSemestre1, setSomaSemestre1] = useState(
    parseInt(localStorageData.ChTotalPedagogicasComplementares?.["1SemestreGraduacao"] || 0) +
      parseInt(localStorageData.ChTotalPedagogicasComplementares?.["1SemestrePosGraduacao"] || 0)
  );

  const [valorinputSemestre2Graduação, setinputSemestre2Graduação] = useState(
    localStorageData.ChTotalPedagogicasComplementares?.["2SemestreGraduacao"] || 0
  );
  const [valorinputSemestre2PosGraduação, setinputSemestre2PosGraduação] = useState(
    localStorageData.ChTotalPedagogicasComplementares?.["2SemestrePosGraduacao"] || 0
  );
  const [SomaSemestre2, setSomaSemestre2] = useState(
    parseInt(localStorageData.ChTotalPedagogicasComplementares?.["2SemestreGraduacao"] || 0) +
    parseInt(localStorageData.ChTotalPedagogicasComplementares?.["2SemestrePosGraduacao"] || 0)
  );

  useEffect(() => {
    const updatedLocalStorageData = {
      ...localStorageData,
      ChTotalPedagogicasComplementares: {
        ...localStorageData.ChTotalPedagogicasComplementares,
        "1Semestre": SomaSemestre1,
        "1SemestreGraduacao": parseInt(valorinputSemestre1Graduação),
        "1SemestrePosGraduacao": parseInt(valorinputSemestre1PosGraduação),
        "2Semestre": SomaSemestre2,
        "2SemestreGraduacao": parseInt(valorinputSemestre2Graduação),
        "2SemestrePosGraduacao": parseInt(valorinputSemestre2PosGraduação),
      },
    };
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
    setSomaSemestre1(parseInt(valorinputSemestre1Graduação) + parseInt(valorinputSemestre1PosGraduação));
    setSomaSemestre2(parseInt(valorinputSemestre2Graduação) + parseInt(valorinputSemestre2PosGraduação));
  }, [SomaSemestre1, valorinputSemestre1Graduação, valorinputSemestre1PosGraduação,
    SomaSemestre2, valorinputSemestre2Graduação, valorinputSemestre2PosGraduação]);


    const handleInputChange = (e, setInputFunction) => {
      setInputFunction(e.target.value);
      if (e.target.value < 0) {
        setInputFunction(0);
      }
    };

    const handleKeyDown = (event) => {
      // Impede que o usuário insira valores diretamente pelo teclado
      event.preventDefault();
    };

    const somarInputsSemestre1 = () => {
      const updatedLocalStorageData = {
        ...localStorageData,
        ChTotalPedagogicasComplementares: {
          "1Semestre": SomaSemestre1,
          "1SemestreGraduacao": parseInt(valorinputSemestre1Graduação),
          "1SemestrePosGraduacao": parseInt(valorinputSemestre1PosGraduação),
          "2Semestre": SomaSemestre2,
          "2SemestreGraduacao": parseInt(valorinputSemestre2Graduação),
          "2SemestrePosGraduacao": parseInt(valorinputSemestre2PosGraduação),
        }
      };
    
      localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
      setSomaSemestre1(parseInt(valorinputSemestre1Graduação) + parseInt(valorinputSemestre1PosGraduação));
      setSomaSemestre2(parseInt(valorinputSemestre2Graduação) + parseInt(valorinputSemestre2PosGraduação));
    };


  const somarInputsSemestre2 = () => {
    const updatedLocalStorageData = {
      ...localStorageData,
      ChTotalPedagogicasComplementares: {
        "1Semestre": SomaSemestre1,
        "1SemestreGraduacao": parseInt(valorinputSemestre1Graduação),
        "1SemestrePosGraduacao": parseInt(valorinputSemestre1PosGraduação),
        "2Semestre": SomaSemestre2,
        "2SemestreGraduacao": parseInt(valorinputSemestre2Graduação),
        "2SemestrePosGraduacao": parseInt(valorinputSemestre2PosGraduação),
      }
    };
  
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
    setSomaSemestre1(parseInt(valorinputSemestre1Graduação) + parseInt(valorinputSemestre1PosGraduação));
    setSomaSemestre2(parseInt(valorinputSemestre2Graduação) + parseInt(valorinputSemestre2PosGraduação));
  };
  
  const guardaJSON = () => {
    window.location.reload();
  };



  // TESTE PARA VERIFICAR SE HÁ VALORES

  // const padagogicas_complementares = localStorageData.ChTotalPedagogicasComplementares;

  // const [localTotalSemestre1, setLocalTotalSemestre1] = useState(0);
  // const [localTotalSemestre1Graduacao, setLocalTotalSemestre1Graduacao] = useState(0);
  // const [localTotalSemestre1PosGraduacao, setLocalTotalSemestre1PosGraduacao] = useState("");

  // const [localTotalSemestre2, setLocalTotalSemestre2] = useState("");
  // const [localTotalSemestre2Graduacao, setLocalTotalSemestre2Graduacao] = useState("");
  // const [localTotalSemestre2PosGraduacao, setLocalTotalSemestre2PosGraduacao] = useState("");


  // if (
  //   Array.isArray(padagogicas_complementares) &&
  //   padagogicas_complementares.length > 0
  // ) {

  //   for (let i = 0; i < padagogicas_complementares.length; i++) {
  //     var dados = padagogicas_complementares[i];

      
  //     setLocalTotalSemestre1(dados["1Semestre"])
  //     setLocalTotalSemestre1Graduacao(dados["1SemestreGraduacao"]);

  //   }

  // }



  


  // const theme = extendTheme({
  //   styles: {
  //     global: {
  //       body: {
  //         background: "#f3ede8",
  //         fontFamily: "Poppins, sans-serif",
  //         minHeight: "100vh",
  //         backgroundRepeat: "no-repeat",
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //         overflow: "hidden",
  //       },
  //     },
  //   },
  // });

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
                    <input
                      type="number"
                      onChange={(e) => handleInputChange(e, setinputSemestre1Graduação)}
                      placeholder={"Máximo de " + totalSemestre1Graduacao}
                      required
                      min={0}
                      max={totalSemestre1Graduacao}
                      value={valorinputSemestre1Graduação}
                      onKeyDown={handleKeyDown}
                    />
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    {/* <input type="text" placeholder="CH" required value={totalSemestre1PosGraduacao}/> */}
                    <input
                      type="number"
                      onChange={(e) => handleInputChange(e, setinputSemestre1PosGraduação)}
                      placeholder={"Máximo de " + totalSemestre1PosGraduacao}
                      required
                      min={0}
                      max={totalSemestre1PosGraduacao}
                      value={valorinputSemestre1PosGraduação}
                      onKeyDown={handleKeyDown}
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
                <input type="text" placeholder="" required value={SomaSemestre1}/>
              </div>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.buttonTotal}>
                  <button type="button" onClick={somarInputsSemestre1}>Calcular</button>
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
                    {/* <input type="text" placeholder="CH" required value={totalSemestre2Graduacao}/> */}
                    <input
                      type="number"
                      onChange={(e) => handleInputChange(e, setinputSemestre2Graduação)}
                      placeholder={"Máximo de " + totalSemestre2Graduacao}
                      required
                      min={0}
                      max={totalSemestre2Graduacao}
                      value={valorinputSemestre2Graduação}
                      onKeyDown={handleKeyDown}
                    />
                  </div>

                  <div
                    className={classes.camposTabelaNCH}
                    id={classes.camposTabelaPraticaNCH}
                  >
                    <div className={classes.tituloSemestre}>
                      <p>Pós-Graduação</p>{" "}
                    </div>
                    {/* <input type="text" placeholder="CH" required value={totalSemestre2PosGraduacao}/> */}
                    <input
                      type="number"
                      onChange={(e) => handleInputChange(e, setinputSemestre2PosGraduação)}
                      placeholder={"Máximo de " + totalSemestre2PosGraduacao}
                      required
                      min={0}
                      max={totalSemestre2PosGraduacao}
                      value={valorinputSemestre2PosGraduação}
                      onKeyDown={handleKeyDown}
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
                <input type="text" placeholder="" required value={SomaSemestre2}/>
              </div>
              <div className={classes.camposTabelaNCHteste}>
                <div className={classes.buttonTotal}>
                  <button type="button" onClick={somarInputsSemestre2}>Calcular</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.buttonSalvarPC}>
          <button onClick={guardaJSON}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default PedagogicasComplementares;
