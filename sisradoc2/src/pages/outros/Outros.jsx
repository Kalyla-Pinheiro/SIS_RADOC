import React from "react";
import classes from "../../css-modules/Outros.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import ModalChSemanalOutros from "../../components/Modal/outros/ch-semanal/ModalChSemanalOutros";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";

const Outros = () => {
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

      <div className={classes.outrosContainer}>
        <div className={classes.tituloEbutton}>
          <div></div>
          <div className={classes.titulo}>
            <h1>Outros</h1>
          </div>
          <button onClick={onOpen}>CH Semanal</button>
        </div>

        <nav className={classes.opcoesOutros}>
          <a
            className={classes.opcaoOutros}
            type="button"
            href="/outros/qualificacao-docente"
          >
            Qualificação Docente
          </a>
          <a
            className={classes.opcaoOutros}
            type="button"
            href="/outros/outras-informacoes"
          >
            Outras Informações
          </a>
          <a
            className={classes.opcaoOutros}
            type="button"
            href="/outros/afastamentos"
          >
            Afastamentos
          </a>
        </nav>

        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalOutros isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Outros;
