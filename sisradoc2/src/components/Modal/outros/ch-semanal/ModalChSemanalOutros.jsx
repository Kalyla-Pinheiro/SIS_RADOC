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

const ModalChSemanalOutros = ({ isOpen, onClose }) => {

  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  const [outrosChSemestre1, setoutrosChSemestre1] = useState(0);
  const [outrosChSemestre2, setoutrosChSemestre2] = useState(0);

  let valorSemestre1 = 0
  let valorSemestre2 = 0
  
  const Ch_Outros = localStorageData.ChTotalOutros;

  if (Ch_Outros) {
    valorSemestre1 = Ch_Outros["1Semestre"]
    valorSemestre2 = Ch_Outros["2Semestre"]
  }

  const handleInputChange = (e, setInputFunction) => {
    setInputFunction(e.target.value);
  };

  const pegarCh = () => {
    if (Ch_Outros) {
      valorSemestre1 = outrosChSemestre1;
      valorSemestre2 = outrosChSemestre2;
      const updatedLocalStorageData = {
        ...localStorageData,
        ChTotalOutros: {
          "1Semestre": parseInt(valorSemestre1),
          "2Semestre": parseInt(valorSemestre2),
        }
      };
    
      localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
    } else {
      const updatedLocalStorageData = {
        ...localStorageData,
        ChTotalOutros: {
          "1Semestre": parseInt(outrosChSemestre1),
          "2Semestre": parseInt(outrosChSemestre2),
        }
      };
    
      localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
    }
    
  };

  useEffect(() => {
    // Atualiza outrosChSemestre1 e outrosChSemestre2 quando o modal abrir
    setoutrosChSemestre1(valorSemestre1);
    setoutrosChSemestre2(valorSemestre2);
  }, [isOpen]);



  



  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" marginTop={10}>
            CH SEMANAL DE OUTROS
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" gap={10} marginBottom={3}>
              <Box>
                <FormLabel textAlign="center">1º Semestre</FormLabel>
                <Input 
                  type="text" 
                  placeholder="CH" 
                  onChange={(e) => handleInputChange(e, setoutrosChSemestre1)}
                  value={outrosChSemestre1 !== 0 ? outrosChSemestre1 : valorSemestre1}
                />
              </Box>
              <Box>
                <FormLabel textAlign="center">2º Semestre</FormLabel>
                <Input 
                  type="text" 
                  placeholder="CH" 
                  onChange={(e) => handleInputChange(e, setoutrosChSemestre2)}
                  value={outrosChSemestre2 !== 0 ? outrosChSemestre2 : valorSemestre2}
                />

              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center">
            {" "}
            <Button colorScheme="green" onClick={pegarCh}>Salvar</Button>{" "}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalChSemanalOutros;
