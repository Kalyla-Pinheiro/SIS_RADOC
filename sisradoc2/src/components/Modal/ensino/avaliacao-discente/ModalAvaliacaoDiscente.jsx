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
  
  const ModalAvaliacaoDiscente = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [codigoDaDisciplina, setCodigoDaDisciplina] = useState(dataEdit.codigoDaDisciplina || "");
    const [media, setMedia] = useState(dataEdit.media || "");
    
  
    const handleSave = () => {
      if (!codigoDaDisciplina || !media) return;
      
      /*
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { codigoDaDisciplina, media };
      }
      */

      const newItem = {
        id: uuidv4(), 
        codigoDaDisciplina, 
        media
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];
  
      localStorage.setItem("avaliacao_discente", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Código da Disciplina</FormLabel>
                  <Input
                    type="text"
                    value={codigoDaDisciplina}
                    onChange={(e) => setCodigoDaDisciplina(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Média</FormLabel>
                  <Input
                    type="text"
                    value={media}
                    onChange={(e) => setMedia(e.target.value)}
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
  
  export default ModalAvaliacaoDiscente;
  