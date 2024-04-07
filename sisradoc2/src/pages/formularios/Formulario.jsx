import React from "react";
import classes from "../../css-modules/Formulario.module.css";
import ModalChSemanalGeral from "../../components/Modal/formulario/ModalChSemanalGeral";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";

const Formulario = () => {
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
      <div className={classes.formularioContainer}>
        <div className={classes.titulo}>
          <h1>Formulários das Atividades!</h1>
          <h3 className={classes.paragrafos}>
            Na presente página, disponibilizam-se os formulários das atividades
            passíveis de preenchimento. Para preencher uma seção específica,
            basta clicar no botão correspondente a cada atividade. Além disso, é
            possível visualizar a distribuição da carga horária semanal das
            atividades do ano em preenchimento ao clicar no botão "CH Semanal".
          </h3>
          <h3 className={classes.paragrafos}>
            Ao concluir o preenchimento, clique em "Gerar Radoc" para finalizar
            o preenchimento do ano em questão.
          </h3>
        </div>
        <div>
          <nav className={classes.listaNavegacao}>
            <a className={classes.opcaoEnsino} type="button" href="/ensino">
              Ensino
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/pesquisa">
              Pesquisa
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/extensao">
              Extensão
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/gestao">
              Gestão
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/outros">
              Outros
            </a>
          </nav>
        </div>
        <div className={classes.button}>
          <button onClick={onOpen}>CH Semanal</button>
          <a href="/formularios">
            <button>Gerar Radoc</button>
          </a>
        </div>
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalGeral isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Formulario;
