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
  
  const ModalChSemanalExtensao = ({
    isOpen,
    onClose,
  }) => {
    //const [ano, setAno] = useState(dataEdit.ano || "");

    const { ano } = useContext(AnoContext);

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

    const Extensao_AtividadesNaoFormais = localStorageData.ExtensaoChAtividadesnaoFormais;
    const Extensao_EstagioExtensao = localStorageData.ExtensaoChEstagioExtensao;
    const Extensao_OutrasAtividades = localStorageData.ExtensaoChOutrasAtividades;
  
  
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

    let TodoSemestre1Extensao = 0;
    let TodoSemestre2Extensao = 0;

    if (Extensao_AtividadesNaoFormais) {
      TodoSemestre1Extensao += Extensao_AtividadesNaoFormais["1Semestre"];
      TodoSemestre2Extensao += Extensao_AtividadesNaoFormais["2Semestre"];
    }

    if (Extensao_EstagioExtensao) {
      TodoSemestre1Extensao += Extensao_EstagioExtensao["ChTotal"]/2;
      TodoSemestre2Extensao += Extensao_EstagioExtensao["ChTotal"]/2;
    }

    if (Extensao_OutrasAtividades) {
      TodoSemestre1Extensao += Extensao_OutrasAtividades["1Semestre"];
      TodoSemestre2Extensao += Extensao_OutrasAtividades["2Semestre"];
    }




    const gerarJSON = () => {
      const updatedLocalStorageData = {
        ...localStorageData,
        EXTENSAO_CH_SEMANAL: {
          "1Semestre": TodoSemestre1Extensao,
          "2Semestre": TodoSemestre2Extensao,
        }
      };
    
      localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} isCentered >
        
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center" marginTop={10}>CH SEMANAL DE EXTENSÃO</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" gap={10} marginBottom={10}>
                <Box>
                  <FormLabel textAlign="center">1º Semestre</FormLabel>
                  <Input
                    type="text"
                    placeholder="CH"
                    value={TodoSemestre1Extensao}
                  />
                </Box>
                <Box>
                  <FormLabel textAlign="center">2º Semestre</FormLabel>
                  <Input
                    type="text"
                    placeholder="CH"
                    value={TodoSemestre2Extensao}
                  />
                </Box>
              </FormControl>
            </ModalBody>
            <ModalFooter justifyContent="center">
            {" "}
            <Button colorScheme="green" onClick={gerarJSON()}>Salvar</Button>{" "}
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalChSemanalExtensao;
  
