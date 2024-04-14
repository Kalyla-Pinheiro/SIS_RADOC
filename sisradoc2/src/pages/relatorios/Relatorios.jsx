import React, { useContext, useEffect, useState } from "react";
import classes from "../../css-modules/Relatorios.module.css";
import { ToastContainer, toast } from "react-toastify";
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
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const Relatorios = () => {

  // IDEIA DE GERACÃO DE ITENS NA TELA DE RELATÓRIOS (PARTE 2)
  // -> basicamente a tela de relatórios terá de gerar divs correspondentes aos itens presentes no json do localStorage
  // -> no UseEffect eu vou ter que pegar os itens do json e gerar a div de cada um deles

  const { isOpen, onOpen, onClose } = useDisclosure();

  const gerarDivs = (itens) => {
    const relatoriosDiv = document.getElementById("relatorios");
    if (relatoriosDiv) {
      relatoriosDiv.innerHTML = "";
      for (const chave in itens) {
        const div = document.createElement("div");
        div.classList.add(classes.itemRelatorio);
        
        const h2 = document.createElement("h2");
        h2.textContent = chave;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Deletar";
        deleteButton.addEventListener("click", () => {
          // Remover o item do Local Storage
          const localStorageKey = "itens_relatorio";
          let localStorageData = localStorage.getItem(localStorageKey);
          if (localStorageData) {
            localStorageData = JSON.parse(localStorageData);
            delete localStorageData[chave]; // Remove o item correspondente à chave
            localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
            // Atualizar as divs após deletar
            gerarDivs(localStorageData);
          }
        });

        const visualizarButton = document.createElement("button");
        visualizarButton.textContent = "PDF";

        
        div.appendChild(h2);
        div.appendChild(visualizarButton);
        div.appendChild(deleteButton);
        relatoriosDiv.appendChild(div);
      }
    }
  };

  useEffect(() => {
    // Obter os itens do localStorage
    const localStorageKey = "itens_relatorio";
    let localStorageData = localStorage.getItem(localStorageKey);
    if (localStorageData) {
      localStorageData = JSON.parse(localStorageData);
      // Gerar as divs correspondentes aos itens
      gerarDivs(localStorageData);
    }
  }, []);

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
            Nesta página, estão disponíveis os RADOC’s gerados a partir das informações preenchidas nos formulários das atividades.
          </h3>
        </div>

        <div className={classes.areaVisualizacao}>
          <div className={classes.campoRelatorios} id="relatorios">
            
          </div>
        </div>
        
      </div>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Relatorios;
