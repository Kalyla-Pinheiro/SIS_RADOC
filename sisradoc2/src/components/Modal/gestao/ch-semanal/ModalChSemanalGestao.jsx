import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { AnoContext } from "../../../../utils/AnoContext";

const ModalChSemanalGestao = ({ isOpen, onClose }) => {
  //const [ano, setAno] = useState(dataEdit.ano || "");

  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const Ch_Gestao_Representacao = localStorageData.GestãoChTotal;

  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  let TodoSemestre1Gestao = 0;
  let TodoSemestre2Gestao = 0;

  if (Ch_Gestao_Representacao) {
    TodoSemestre1Gestao += Ch_Gestao_Representacao["1Semestre"];
    TodoSemestre2Gestao += Ch_Gestao_Representacao["2Semestre"];
  }

  const gerarJSON = () => {
    const updatedLocalStorageData = {
      ...localStorageData,
      GESTAO_CH_SEMANAL: {
        "1Semestre": TodoSemestre1Gestao,
        "2Semestre": TodoSemestre2Gestao,
      },
    };

    localStorage.setItem(
      localStorageKey,
      JSON.stringify(updatedLocalStorageData)
    );
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" marginTop={10}>
            CH SEMANAL DE GESTÃO
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" gap={10} marginBottom={3}>
              <Box>
                <FormLabel textAlign="center">1º Semestre</FormLabel>
                <Input
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre1Gestao}
                />
              </Box>
              <Box>
                <FormLabel textAlign="center">2º Semestre</FormLabel>
                <Input
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre2Gestao}
                />
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center">
            {" "}
            <Button colorScheme="green" onClick={gerarJSON()}>
              Salvar
            </Button>{" "}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalChSemanalGestao;
