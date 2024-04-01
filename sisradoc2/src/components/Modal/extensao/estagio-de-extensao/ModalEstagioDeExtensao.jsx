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
  
  const ModalEstagioDeExtensao = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose,
  }) => {

    const { ano } = useContext(AnoContext);

    const [areaDeConhecimento, setAreaDeConhecimento] = useState(dataEdit.areaDeConhecimento || "");
    const [instituicao, setInstituicao] = useState(dataEdit.instituicao || "");
    const [periodo, setPeriodo] = useState(dataEdit.periodo || "");
    const [instituto, setInstituto] = useState(dataEdit.instituto || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
  
    const handleSave = () => {
      // if (!areaDeConhecimento || !instituicao || !periodo || !instituto || !chSemanalSemestre1 || !chSemanalSemestre2) return;
  
      const newItem = {
        id: uuidv4(), 
        areaDeConhecimento,
        instituicao,
        periodo,
        instituto,
        chSemanalSemestre1,
        chSemanalSemestre2
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];

      const localStorageKey = `${ano}`;
      let localStorageData = localStorage.getItem(localStorageKey);
      localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
      localStorageData.estagio_de_extensao = newDataArray;
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
                  <FormLabel>Área de Conhecimento</FormLabel>
                  <Input
                    type="text"
                    value={areaDeConhecimento}
                    onChange={(e) => setAreaDeConhecimento(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Instituição</FormLabel>
                  <Input
                    type="text"
                    value={instituicao}
                    onChange={(e) => setInstituicao(e.target.value)}
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
                  <FormLabel>Instituto</FormLabel>
                  <Input
                    type="text"
                    value={instituto}
                    onChange={(e) => setInstituto(e.target.value)}
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
  
  export default ModalEstagioDeExtensao;
  