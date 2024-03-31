import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import ModalChSemanalEnsino from "../../components/Modal/ensino/ch-semanal/ModalChSemanalEnsino";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";

const Ensino = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <div className={classes.tituloEbutton}>
          <div></div>
          <div className={classes.titulo}>
            <h1>Ensino</h1>
          </div>
          <button onClick={onOpen}>CH Semanal</button>
        </div>

        <nav className={classes.opcoesEnsino}>
          <a className={classes.opcaoEnsino} type="button" href="/disciplinas">
            Aulas Letivas
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/pedagogicasComplementares"
          >
            Pedagógicas Complementares
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/OrientacaoAcademica"
          >
            Orientação, Supervisão e Outros
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/MonografiaQualificacaoDIssertacaoTese"
          >
            Bancas Examinadoras
          </a>
          <a
            className={classes.opcaoEnsino}
            type="button"
            href="/ensino/AvaliacaoDocente"
          >
            Avaliação Discente
          </a>
        </nav>

        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalEnsino isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Ensino;
