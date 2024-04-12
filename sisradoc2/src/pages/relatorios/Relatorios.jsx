import React, { useContext, useEffect } from "react";
import classes from "../../css-modules/Relatorios.module.css";
import { ToastContainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import TokenFunctions from "../../utils/Token";
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
import { AnoContext } from "../../utils/AnoContext";
import { ItemRelatorioContext } from "../../utils/ItemRelatorioContext";

const Relatorios = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { ano } = useContext(AnoContext);
  const { itemRelatorio, setItemRelatorioValue } =
    useContext(ItemRelatorioContext);

  useEffect(() => {
    if (itemRelatorio === "Ativo") {
      const relatorioDiv = document.createElement("div");
      const h2 = document.createElement("h2");
      h2.textContent = ano;
      relatorioDiv.appendChild(h2);
      const relatoriosContainer = document.getElementById("relatorios");
      if (relatoriosContainer) {
        relatoriosContainer.innerHTML = ""; // Limpa o conteúdo anterior
        relatoriosContainer.appendChild(relatorioDiv);
        // setItemRelatorioValue("Inativo");
      }
    }
  }, [itemRelatorio]);

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
      <div className={classes.relatoriosContainer}>
        <div className={classes.titulo}>
          <h1>Relatórios (RADOC)</h1>
        </div>

        <div className={classes.texto}>
          <h3>
            Nesta página, estão disponíveis os RADOC’s gerados a partir das
            informações preenchidas nos formulários das atividades.
          </h3>
        </div>

        <div className={classes.areaVisualizacao}>
          <div className={classes.campoRelatorios} id="relatorios"></div>
        </div>
      </div>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Relatorios;
