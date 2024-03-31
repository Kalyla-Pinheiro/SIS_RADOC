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
    Select,
    Box,
  } from "@chakra-ui/react";
  import { useState, useContext} from "react";
  import { v4 as uuidv4 } from "uuid";
  import { AnoContext } from "../../../../utils/AnoContext";

  const ModalPreceptoriaOuTutoriaDeResidencia = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {

    const { ano } = useContext(AnoContext);

    const [nomeOuMatricula, setNomeOuMatricula] = useState(dataEdit.nomeOuMatricula || "");
    const [tipo, setTipo] = useState(dataEdit.tipo || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
    
    const handleSave = () => {

      //if (!nome || !curso || !tipo || !nivel || !chSemanalSemestre1 || !chSemanalSemestre2) return;

      const newItem = {
        id: uuidv4(), 
        nomeOuMatricula,
        tipo,
        chSemanalSemestre1, 
        chSemanalSemestre2
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];

      const localStorageKey = `${ano}`;
      let localStorageData = localStorage.getItem(localStorageKey);
      localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
      localStorageData.preceptoria_e_ou_tutoria_de_residencia = newDataArray;
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  
      //localStorage.setItem("preceptoria_e_ou_tutoria_de_residencia", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Nome Ou Matrícula</FormLabel>
                  <Input
                    type="text"
                    value={nomeOuMatricula}
                    onChange={(e) => setNomeOuMatricula(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    name="Tipo"
                    placeholder="Selecione o tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  >
                    <option>NA</option>
                    <option>RP</option>
                    <option>VET</option>
                  </Select>
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
  
  export default ModalPreceptoriaOuTutoriaDeResidencia;
  