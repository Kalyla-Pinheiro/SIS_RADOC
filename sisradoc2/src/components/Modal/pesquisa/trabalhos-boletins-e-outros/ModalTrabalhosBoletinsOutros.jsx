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
  
  const ModalTrabalhosBoletinsOutros = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [tipo, setTipo] = useState(dataEdit.tipo || "");
    const [link, setLink] = useState(dataEdit.link || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
    
    const handleSave = () => {
      if (!tipo || !link || !descricao) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { tipo, link, descricao };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { tipo, link, descricao }]
        : [...(data ? data : [])];
  
      localStorage.setItem("trabalhos_boletins_e_outros", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Tipo</FormLabel>
                  <Input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                </Box>
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
  
  export default ModalTrabalhosBoletinsOutros;
  