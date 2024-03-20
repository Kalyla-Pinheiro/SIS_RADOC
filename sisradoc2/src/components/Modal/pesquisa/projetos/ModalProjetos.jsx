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
  
  const ModalProjetos = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [titulo, setTitulo] = useState(dataEdit.titulo || "");
    const [codigoProped, setCodigoProped] = useState(dataEdit.codigoProped || "");
    const [situacaoAtual, setSituacaoAtual] = useState(dataEdit.situacaoAtual || "");
    const [funcao, setFuncao] = useState(dataEdit.funcao || "");
    
    const handleSave = () => {
      if (!titulo || !codigoProped || !situacaoAtual || !funcao) return;
      
      /*
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { titulo, codigoProped, situacaoAtual, funcao };
      }
      */

      const newItem = {
        id: uuidv4(), // Gerando um ID único para o novo item
        titulo,
        codigoProped,
        situacaoAtual,
        funcao
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];
  
      localStorage.setItem("projetos", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Título</FormLabel>
                  <Input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Código PROPED</FormLabel>
                  <Input
                    type="text"
                    value={codigoProped}
                    onChange={(e) => setCodigoProped(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Situação Atual</FormLabel>
                  <Input
                    type="text"
                    value={situacaoAtual}
                    onChange={(e) => setSituacaoAtual(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Função</FormLabel>
                  <Input
                    type="text"
                    value={funcao}
                    onChange={(e) => setFuncao(e.target.value)}
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
  
  export default ModalProjetos;
  