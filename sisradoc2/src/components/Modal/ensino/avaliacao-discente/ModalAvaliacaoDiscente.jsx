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
  import TokenFunctions from "../../../../utils/Token";
  import { useEffect } from "react";
  
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
//      if (!codigoDaDisciplina || !media) return;
      

/*      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { codigoDaDisciplina, media };
      } */ // COISA INÚTIL
      

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

      window.location.reload();
    };
    
    var avaliacaoDiscenteData = "";
    try {
      avaliacaoDiscenteData = TokenFunctions.get_avaliacao_discente_codigo();
    } catch (error) {}
  
    useEffect(() => {
      if(avaliacaoDiscenteData) {
        setCodigoDaDisciplina(avaliacaoDiscenteData.avaliacao_discente_codigo[0]);
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      const fieldSetters = {
        Código_da_Disciplina: setCodigoDaDisciplina,
        Média: setMedia,
      };
  
      const setter = fieldSetters[name];
      if (setter) {
        setter(value);
      }
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
                    name="Código da Disciplina"
                    value={codigoDaDisciplina}
                    onChange={handleChange}
                  />
                </Box>
                <Box>
                  <FormLabel>Média</FormLabel>
                  <Input
                    type="text"
                    name="Média"
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
  