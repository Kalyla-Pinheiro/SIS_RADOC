import React from "react";
import classes from "../../css-modules/Gestao.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import ModalChSemanalGestao from "../../components/Modal/gestao/ch-semanal/ModalChSemanalGestao";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";

const Gestao = () => {
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

      <div className={classes.gestaoContainer}>
        <div className={classes.tituloEbutton}>
          <div></div>
          <div className={classes.titulo}>
            <h1>Gestão</h1>
          </div>
          <button onClick={onOpen}>CH Semanal</button>
        </div>

        <nav className={classes.opcoesGestao}>
          <a
            className={classes.opcaoGestao}
            type="button"
            href="/gestao/atividades-de-gestao-e-representacao"
          >
            Atividade de Gestão e Representação
          </a>
        </nav>

        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalGestao isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Gestao;
