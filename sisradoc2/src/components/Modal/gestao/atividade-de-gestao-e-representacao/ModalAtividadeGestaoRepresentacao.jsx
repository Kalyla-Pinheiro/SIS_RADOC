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
  
  const ModalAtividadeGestaoRepresentacao = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose,
  }) => {
    const [cargoOuFuncao, setCargoOuFuncao] = useState(dataEdit.cargoOuFuncao || "");
    const [atoDeDesignacao, setAtoDeDesignacao] = useState(dataEdit.atoDeDesignacao || "");
    const [periodo, setPeriodo] = useState(dataEdit.setPeriodo || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
  
    const handleSave = () => {
      if (!cargoOuFuncao || !atoDeDesignacao || !periodo || !chSemanalSemestre1 || !chSemanalSemestre2) return;
  
      const newItem = {
        id: uuidv4(), 
        cargoOuFuncao,
        atoDeDesignacao,
        periodo,
        chSemanalSemestre1,
        chSemanalSemestre2
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];
  
      localStorage.setItem(
        "atividades_de_gestao_e_representacao",
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
                  <FormLabel>Cargo/Função</FormLabel>
                  <Input
                    type="text"
                    value={cargoOuFuncao}
                    onChange={(e) => setCargoOuFuncao(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Ato de Designação</FormLabel>
                  <Input
                    type="text"
                    value={atoDeDesignacao}
                    onChange={(e) => setAtoDeDesignacao(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Período</FormLabel>
                  <Input
                    type="text"
                    value={periodo}
                    onChange={(e) => setPeriodo(e.target.value)}
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
  
  export default ModalAtividadeGestaoRepresentacao;
  