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
  
  const ModalLivrosVerbetesPublicados = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [link, setLink] = useState(dataEdit.link || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
    
    const handleSave = () => {
      if (!link || !descricao) return;
      
      /*
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { tipo, link, descricao };
      }
      */

      const newItem = {
        id: uuidv4(), // Gerando um ID único para o novo item
        link,
        descricao,
      };

      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];
  
      localStorage.setItem("livros_verbetes_publicados", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Link</FormLabel>
                  <Input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Descrição</FormLabel>
                  <Input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
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
  
  export default ModalLivrosVerbetesPublicados;
  