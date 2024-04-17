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
import { ToastContainer, toast } from "react-toastify";

const ModalChSemanalEnsino = ({ isOpen, onClose }) => {
  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const ChAulasLetivas = localStorageData.ChTotalAulasLetivas;
  const ChPedagogicasComplementares =
    localStorageData.ChTotalPedagogicasComplementares;
  const ChOrientacaoCoorientacao = localStorageData.ChTotalOrientacaoSupervisao;
  const ChMonografiaQualificacao = localStorageData.ChTotalMonografia;

  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  let TodoSemestre1 = 0;
  let TodoSemestre2 = 0;

  if (ChAulasLetivas) {
    TodoSemestre1 += ChAulasLetivas["1Semestre"];
    TodoSemestre2 += ChAulasLetivas["2Semestre"];
  }

  if (ChPedagogicasComplementares && ChOrientacaoCoorientacao) {
    if (
      ChPedagogicasComplementares["1Semestre"] +
        ChOrientacaoCoorientacao["1Semestre"] >
      24
    ) {
      TodoSemestre1 += 24;
    } else {
      TodoSemestre1 +=
        ChPedagogicasComplementares["1Semestre"] +
        ChOrientacaoCoorientacao["1Semestre"];
    }

    if (
      ChPedagogicasComplementares["2Semestre"] +
        ChOrientacaoCoorientacao["2Semestre"] >
      24
    ) {
      TodoSemestre2 += 24;
    } else {
      TodoSemestre2 +=
        ChPedagogicasComplementares["2Semestre"] +
        ChOrientacaoCoorientacao["2Semestre"];
    }
  } else if (ChPedagogicasComplementares) {
    if (ChPedagogicasComplementares["1Semestre"] > 24) {
      TodoSemestre1 += 24;
    } else {
      TodoSemestre1 += ChPedagogicasComplementares["1Semestre"];
    }

    if (ChPedagogicasComplementares["2Semestre"] > 24) {
      TodoSemestre2 += 24;
    } else {
      TodoSemestre2 += ChPedagogicasComplementares["2Semestre"];
    }
  } else if (ChOrientacaoCoorientacao) {
    if (ChOrientacaoCoorientacao["1Semestre"] > 24) {
      TodoSemestre1 += 24;
    } else {
      TodoSemestre1 += ChOrientacaoCoorientacao["1Semestre"];
    }

    if (ChOrientacaoCoorientacao["2Semestre"] > 24) {
      TodoSemestre2 += 24;
    } else {
      TodoSemestre2 += ChOrientacaoCoorientacao["2Semestre"];
    }
  }

  if (ChMonografiaQualificacao) {
    TodoSemestre1 += ChMonografiaQualificacao["1Semestre"];
    TodoSemestre2 += ChMonografiaQualificacao["2Semestre"];
  }

  const [testandoChGraduacaoSemestre1, setTestandoChGraduacaoSemestre1] =
    useState(null);

  useEffect(() => {
    const jsonDoLocalStorage = localStorage.getItem("ch_semanal_aulas");

    if (jsonDoLocalStorage) {
      const objetoJson = JSON.parse(jsonDoLocalStorage);
      setTestandoChGraduacaoSemestre1(
        parseInt(objetoJson[0].chGraduacaoSemestre1) +
          parseInt(objetoJson[0].chGraduacaoSemestre2)
      );
    }
  }, []);

  useEffect(() => {
    if (TodoSemestre1 > 40) {
      toast.error("o CH do Semestre 1 está muito alto!");
    }
  }, [isOpen]);

  useEffect(() => {
    if (TodoSemestre2 > 40) {
      toast.error("o CH do Semestre 2 está muito alto!");
    }
  }, [isOpen]);

  const gerarJSON = () => {
    const updatedLocalStorageData = {
      ...localStorageData,
      ENSINO_CH_SEMANAL: {
        "1Semestre": TodoSemestre1,
        "2Semestre": TodoSemestre2,
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
            CH SEMANAL DE ENSINO
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" gap={10} marginBottom={3}>
              <Box>
                <FormLabel textAlign="center">1º Semestre</FormLabel>
                <Input
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre1}
                  readOnly
                />
              </Box>
              <Box>
                <FormLabel textAlign="center">2º Semestre</FormLabel>
                <Input
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre2}
                  readOnly
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
      <ToastContainer position="bottom-left" />
    </>
  );
};

export default ModalChSemanalEnsino;
