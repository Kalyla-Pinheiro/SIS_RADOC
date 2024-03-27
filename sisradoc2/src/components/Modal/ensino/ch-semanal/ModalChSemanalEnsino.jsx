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
  import { useState, useEffect } from "react";
  
  const ModalChSemanalEnsino = ({
    isOpen,
    onClose,
  }) => {
    //const [ano, setAno] = useState(dataEdit.ano || "");

    const [testandoChGraduacaoSemestre1, setTestandoChGraduacaoSemestre1] = useState(null);

    useEffect(() => {
      const jsonDoLocalStorage = localStorage.getItem("ch_semanal_aulas");

      if (jsonDoLocalStorage) {
        const objetoJson = JSON.parse(jsonDoLocalStorage);
        setTestandoChGraduacaoSemestre1(parseInt(objetoJson[0].chGraduacaoSemestre1) + parseInt(objetoJson[0].chGraduacaoSemestre2))
      }

    }, []);
  
    return (
      <> 
        <Modal isOpen={isOpen} onClose={onClose} isCentered >
        
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center" marginTop={10}>CH SEMANAL DE ENSINO</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" gap={10} marginBottom={10}>
                <Box>
                  <FormLabel textAlign="center">1º Semestre</FormLabel>
                  <Input
                    type="text"
                    placeholder="CH"
                    value={testandoChGraduacaoSemestre1}
                  />
                </Box>
                <Box>
                  <FormLabel textAlign="center">2º Semestre</FormLabel>
                  <Input
                    type="text"
                    placeholder="CH"
                  />
                </Box>
              </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalChSemanalEnsino;
  