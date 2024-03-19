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
  import { useState } from "react";
  import { v4 as uuidv4 } from "uuid"; // Importando a função v4 de uuid
  
  const ModalOutrasAtividadesDeExtensao = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose,
  }) => {
    const [atividade, setAtividade] = useState(dataEdit.atividade || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
  
    const handleSave = () => {
      if (!atividade || !chSemanalSemestre1 || !chSemanalSemestre2) return;
  
      const newItem = {
        id: uuidv4(), 
        atividade,
        chSemanalSemestre1,
        chSemanalSemestre2
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];
  
      localStorage.setItem(
        "outras_atividades_de_extensao",
        JSON.stringify(newDataArray)
      );
  
      setData(newDataArray);
  
      onClose();
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro dos dados</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Atividade</FormLabel>
                  <Input
                    type="text"
                    value={atividade}
                    onChange={(e) => setAtividade(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Semanal (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chSemanalSemestre1}
                    onChange={(e) => setChSemanalSemestre1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Semanal (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chSemanalSemestre2}
                    onChange={(e) => setChSemanalSemestre2(e.target.value)}
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalOutrasAtividadesDeExtensao;
  