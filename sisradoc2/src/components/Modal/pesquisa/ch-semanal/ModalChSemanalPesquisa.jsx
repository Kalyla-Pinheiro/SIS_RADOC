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

const ModalChSemanalPesquisa = ({ isOpen, onClose }) => {
  //const [ano, setAno] = useState(dataEdit.ano || "");

  const { ano } = useContext(AnoContext);

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  const [pesquisaChSemestre1, setpesquisaChSemestre1] = useState(0);
  const [pesquisaChSemestre2, setpesquisaChSemestre2] = useState(0);


  let valorSemestre1 = 0
  let valorSemestre2 = 0
  
  const Ch_Pesquisa = localStorageData.ChTotalPesquisa;

  if (Ch_Pesquisa) {
    valorSemestre1 = Ch_Pesquisa["1Semestre"]
    valorSemestre2 = Ch_Pesquisa["2Semestre"]
  }




  const handleInputChange = (e, setInputFunction) => {
    setInputFunction(e.target.value);
  };

  const pegarCh = () => {

    if (Ch_Pesquisa) {
      valorSemestre1 = pesquisaChSemestre1;
      valorSemestre2 = pesquisaChSemestre2;
      const updatedLocalStorageData = {
        ...localStorageData,
        ChTotalPesquisa: {
          "1Semestre": parseInt(valorSemestre1),
          "2Semestre": parseInt(valorSemestre2),
        }
      };
    
      localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
    } else {
        const updatedLocalStorageData = {
          ...localStorageData,
          ChTotalPesquisa: {
            "1Semestre": parseInt(pesquisaChSemestre1),
            "2Semestre": parseInt(pesquisaChSemestre2),
          }
        };
        localStorage.setItem(localStorageKey, JSON.stringify(updatedLocalStorageData));
      }
  };


  useEffect(() => {
    // Atualiza outrosChSemestre1 e outrosChSemestre2 quando o modal abrir
    setpesquisaChSemestre1(valorSemestre1);
    setpesquisaChSemestre2(valorSemestre2);
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" marginTop={10}>
            CH SEMANAL DE PESQUISA
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" gap={10} marginBottom={3}>
              <Box>
                <FormLabel textAlign="center">1º Semestre</FormLabel>
                <Input 
                  type="text" 
                  placeholder="CH" 
                  onChange={(e) => handleInputChange(e, setpesquisaChSemestre1)}
                  value={pesquisaChSemestre1 !== 0 ? pesquisaChSemestre1 : valorSemestre1}
                />
              </Box>
              <Box>
                <FormLabel textAlign="center">2º Semestre</FormLabel>
                <Input 
                  type="text" 
                  placeholder="CH" 
                  onChange={(e) => handleInputChange(e, setpesquisaChSemestre2)}
                  value={pesquisaChSemestre2 !== 0 ? pesquisaChSemestre2 : valorSemestre2}
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

export default ModalChSemanalPesquisa;
