import React, { useContext, useEffect, useState } from "react";
import classes from "../../css-modules/Relatorios.module.css";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const Documento = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemToDelete, setItemToDelete] = useState(null);

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
          // Exibir modal de confirmação ao deletar
          setItemToDelete(chave);
          onOpen();
        });

        const visualizarButton = document.createElement("button");
        visualizarButton.textContent = "PDF";
        visualizarButton.addEventListener("click", () => {
          visualizarPDF(itens[chave]);
        });

        div.appendChild(h2);
        div.appendChild(visualizarButton);
        div.appendChild(deleteButton);
        relatoriosDiv.appendChild(div);
      }
    }
  };

  useEffect(() => {
    // Obter os itens do localStorage
    const localStorageKey = "itens_documentos";
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

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

  const visualizarPDF = (pdfBase64) => {
    // Verificar se a string base64 é válida
    if (!isValidBase64(pdfBase64)) {
      toast.error("Erro ao abrir o PDF. A string base64 é inválida.");
      return;
    }

    // Continuar com o processamento normal
    const blob = base64toBlob(pdfBase64);
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  const base64toBlob = (base64Data) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: "application/pdf" });
  };

  return (
    <div className={classes.ajuste}>
      <div className={classes.relatoriosContainer}>
        <div className={classes.titulo}>
          <h1>Documentos</h1>
        </div>

        <div className={classes.texto}>
          <h3>
            Nesta página, estão disponíveis os documentos comprobatórios submetidos, referentes aos RADOC’s gerados a partir das
            informações preenchidas nos formulários.
          </h3>
        </div>

        <div className={classes.areaVisualizacao}>
          <div className={classes.campoRelatorios} id="relatorios"></div>
        </div>
      </div>

      <ChakraProvider theme={theme} resetCSS={false}>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirmação de exclusão</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Tem certeza que deseja excluir o item "{itemToDelete}"?
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="green"
                onClick={() => {
                  // Removendo o item do Local Storage
                  const localStorageKey = "itens_documentos";
                  let localStorageData = localStorage.getItem(localStorageKey);
                  if (localStorageData) {
                    localStorageData = JSON.parse(localStorageData);
                    delete localStorageData[itemToDelete]; // Removendo o item correspondente à chave
                    localStorage.setItem(
                      localStorageKey,
                      JSON.stringify(localStorageData)
                    );
                    // Atualizar as divs depois de deletar
                    gerarDivs(localStorageData);
                  }
                  onClose();
                  toast.success("Item excluído com sucesso!");
                }}
              >
                Confirmar
              </Button>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Documento;
