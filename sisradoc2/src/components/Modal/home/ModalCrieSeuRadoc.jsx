import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnoContext, AnoProvider } from "../../../utils/AnoContext";

const ModalCrieSeuRadoc = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const anoContext = useAnoContext();
  const ano = anoContext.ano;
  const setAno = anoContext.setAno;

  const handleComecarClick = () => {
    console.log("O Valor do ano é: ", ano)
    const jsonData = {};
    localStorage.setItem(ano, JSON.stringify(jsonData));
    navigate("/formularios");
  };

  return (
    <>
      <AnoProvider>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ATENÇÃO</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Qual ano do Radoc você deseja preencher?</FormLabel>
                  <Input type="text" placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)}/>
                </Box>
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleComecarClick}>
                COMEÇAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AnoProvider>
    </>
  );
};

export default ModalCrieSeuRadoc;