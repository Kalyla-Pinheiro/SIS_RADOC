import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../imagens/paisagem3.png";
import TabelasPedagogicasComplementares from "../../formularios/ensino/pedagogicas-complementares/TabelasPedagogicasComplementares";

const PedagogicasComplementares = () => {

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
      <Navegacao/>

      <div className={classes.ensinoContainer}>

        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Pedagógicas Complementares</h1>
        </div>

        <div className={classes.areaPreenchimento}>

          <div className={classes.campoTabelasSemestre} id={classes.tabelasChSemanalAulas}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasPedagogicasComplementares />
            </ChakraProvider>
          </div>

        </div>

        {/*
        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.tituloSemestre}>
            <p>1º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Graduação (CH)" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Pós-Graduação (CH)" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" className={classes.ultimoCampoInput} placeholder="CH Total" required /> <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>

        <div className={classes.semestre}>
          <div className={classes.tituloSemestre}>
            <p>2º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Graduação (CH)" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Pós-Graduação (CH)" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" className={classes.ultimoCampoInput} placeholder="CH Total" required /> <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>
        */}

        <div className={classes.buttonSalvarPC}>
          <button>Salvar</button>
        </div>

      </div>
    </div>
  );
};

export default PedagogicasComplementares;