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
  import { useState, useContext, useEffect } from "react";
  import { v4 as uuidv4 } from "uuid";
  import TokenFunctions from "../../../../utils/Token";
  import { AnoContext } from "../../../../utils/AnoContext";
  
  const ModalAvaliacaoDiscente = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {

    const { ano } = useContext(AnoContext);
    
    const [codigoDaDisciplina, setCodigoDaDisciplina] = useState(dataEdit.codigoDaDisciplina || "");
    const [media, setMedia] = useState(dataEdit.media || "");
    
  
    const handleSave = () => {
      //if (!codigoDaDisciplina || !media) return;
      
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

      const localStorageKey = `${ano}`;
      let localStorageData = localStorage.getItem(localStorageKey);
      localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
      localStorageData.avaliacao_discente = newDataArray;
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  
      //localStorage.setItem("avaliacao_discente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
      window.location.reload();
    };  

    var avaliacaoDiscenteData = "";
    try {
      avaliacaoDiscenteData = TokenFunctions.get_avaliacao_discente();
    } catch (error) {}

    useEffect(() => {
      if(avaliacaoDiscenteData) {
        setCodigoDaDisciplina(avaliacaoDiscenteData.avaliacao_discente_codigo[0]);
      }
    }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      const fieldSetters = {
        CodigoDaDisciplina: setCodigoDaDisciplina,
        Media: setMedia
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
                    name="CodigoDaDisciplina"
                    value={codigoDaDisciplina}
                    onChange={handleChange}
                  />
                </Box>
                <Box>
                  <FormLabel>Média</FormLabel>
                  <Input
                    type="text"
                    name="Media"
                    value={media}
                    onChange={handleChange}
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
  