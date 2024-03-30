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
  import { v4 as uuidv4 } from "uuid";
  
  const ModalMotivacaoDoAfastamento = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [motivacaoDoAfastamento, setMotivacaoDoAfastamento] = useState(dataEdit.motivacaoDoAfastamento || "");
    const [portaria, setPortaria] = useState(dataEdit.portaria || "");
    
    const handleSave = () => {
      if (!motivacaoDoAfastamento || !portaria) return;

      const newItem = {
        id: uuidv4(),
        motivacaoDoAfastamento,
        portaria
      };

      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];
  
      localStorage.setItem("outras_informacoes", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Motivação do afastamento</FormLabel>
                  <Input
                    type="text"
                    value={motivacaoDoAfastamento}
                    onChange={(e) => setMotivacaoDoAfastamento(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Portaria</FormLabel>
                  <Input
                    type="text"
                    value={portaria}
                    onChange={(e) => setPortaria(e.target.value)}
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
  
  export default ModalMotivacaoDoAfastamento;
  