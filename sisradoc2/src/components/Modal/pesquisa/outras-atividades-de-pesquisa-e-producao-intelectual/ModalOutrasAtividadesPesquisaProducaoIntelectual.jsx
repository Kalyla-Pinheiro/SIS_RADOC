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
  import { useState, useContext } from "react";
  import { v4 as uuidv4 } from "uuid"; 
  import { AnoContext } from "../../../../utils/AnoContext";
  
  const ModalOutrasAtividadesProducaoIntelectual = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose,
  }) => {

    const { ano } = useContext(AnoContext);

    const [link, setLink] = useState(dataEdit.link || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
  
    const handleSave = () => {
      if (!link || !descricao) return;
  
      const newItem = {
        id: uuidv4(), 
        link,
        descricao,
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];

      const localStorageKey = `${ano}`;
      let localStorageData = localStorage.getItem(localStorageKey);
      localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
      localStorageData.outras_atividades_de_pesquisa_e_producao_intelectual = newDataArray;
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  
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
  
  export default ModalOutrasAtividadesProducaoIntelectual;
  