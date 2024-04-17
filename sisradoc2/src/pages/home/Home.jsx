import React from "react";
import classes from "../../css-modules/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import TokenFunctions from "../../utils/Token";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import ModalCrieSeuRadoc from "../../components/Modal/home/ModalCrieSeuRadoc";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import paisagem3 from "../imagens/paisagem3.png";

const Home = () => {
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
    <div className={classes.ajuste}>
      <div className={classes.homeContainer}>
        <div className={classes.titulo}>
          <h1>Bem Vindo!</h1>
        </div>

        <div className={classes.campoColumn} id={classes.campoGeral}>
          <div className={classes.campoFlex} id={classes.texto1}>
            <h3>
              O SISRADOC tem como principal objetivo automatizar tarefas
              relacionadas ao preenchimento do RADOC, oferecendo funcionalidades
              que simplificam o registro, edição e cálculo de atividades
              desenvolvidas pelo docente.
            </h3>
          </div>

          <div className={classes.campoFlex}>
            <div
              className={classes.colunaIndividual}
              id={classes.colunaEspacoLateral}
            >
              <div className={classes.subTextos1}>
                <h2>Precisão no Cálculo das Cargas Horárias</h2>
                <h3>
                  O sistema executa automaticamente o cálculo das cargas
                  horárias das atividades registradas, eliminando possíveis
                  erros durante a inserção manual e assegurando a conformidade
                  com as normas estabelecidas pelo RADOC.
                </h3>
              </div>
              <div className={classes.subTextos2}>
                <h2>Extração de Dados de Documentos</h2>
                <h3>
                  Efetua a leitura e extração de dados de documentos
                  comprobatórios, como certificados e relatórios, agilizando o
                  processo de preenchimento do RADOC, aumentando a eficiência ao
                  automatizar a entrada de informações, reduzindo o tempo
                  necessário para completar o relatório.
                </h3>
              </div>
            </div>

            <div className={classes.colunaIndividual}>
              <div className={classes.subTextos1}>
                <h2>Automação de Tarefas</h2>
                <h3>
                  O sistema foi projetado para simplificar e agilizar o
                  preenchimento de seções do RADOC, o que resulta em uma redução
                  significativa no tempo e esforço exigidos para concluir a
                  documentação de forma precisa e eficiente.
                </h3>
              </div>
              <div className={classes.subTextos2}>
                <h2>Registro e Edição de Atividades</h2>
                <h3>
                  Permite ao docente registrar suas atividades de forma
                  organizada e detalhada, facilitando a edição e atualização das
                  atividades ao longo do período de relatado.
                </h3>
              </div>
            </div>
          </div>

          <div className={classes.buttons}>
            <button onClick={onOpen}>Crie seu Radoc</button>
          </div>

          <ChakraProvider theme={theme} resetCSS={false}>
            <ModalCrieSeuRadoc isOpen={isOpen} onClose={onClose} />
          </ChakraProvider>
        </div>
        <ToastContainer position="bottom-left" />
      </div>
    </div>
  );
};

export default Home;
