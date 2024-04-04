import React from "react";
import classes from "../../css-modules/Extensao.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import ModalChSemanalExtensao from "../../components/Modal/extensao/ch-semanal/ModalChSemanalExtensao";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";

const Extensao = () => {
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

      <div className={classes.extensaoContainer}>
        <div className={classes.tituloEbutton}>
          <div></div>
          <div className={classes.titulo}>
            <h1>Extensão</h1>
          </div>
          <button onClick={onOpen}>CH Semanal</button>
        </div>

        <nav className={classes.opcoesExtensao}>
          <a
            className={classes.opcaoExtensao}
            type="button"
            href="/extensao/projetos-de-extensao"
          >
            Projetos de Extensão
          </a>
          <a
            className={classes.opcaoExtensao}
            type="button"
            href="/extensao/estagio-de-extensao"
          >
            Estágio de Extensão
          </a>
          <a
            className={classes.opcaoExtensao}
            type="button"
            href="/extensao/atividades-de-ensino-nao-formais"
          >
            Atividade de Ensino Não Formal
          </a>
          <a
            className={classes.opcaoExtensao}
            type="button"
            href="/extensao/outras-atividades-de-extensao"
          >
            Outras Atividades de Extensão
          </a>
        </nav>

        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalExtensao isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Extensao;
