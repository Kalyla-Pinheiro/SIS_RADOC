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
  import { useState, useContext } from "react";
  import { v4 as uuidv4 } from "uuid";
  import { AnoContext } from "../../../../utils/AnoContext";
  
  const ModalOrientacaoCoorientacaoAcademica = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {

    const { ano } = useContext(AnoContext);
    console.log("O valor do ano é: ", ano);

    const [nome, setNome] = useState(dataEdit.nome || "");
    const [curso, setCurso] = useState(dataEdit.curso || "");
    const [tipo, setTipo] = useState(dataEdit.tipo || "");
    const [nivel, setNivel] = useState(dataEdit.nivel || "");
    const [participacao, setParticipacao] = useState(dataEdit.participacao || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
    
    const handleSave = () => {
      // if (!nome || !curso || !tipo || !nivel || !participacao || !chSemanalSemestre1 || !chSemanalSemestre2) return;

      const newItem = {
        id: uuidv4(), 
        nome,
        curso, 
        tipo, 
        nivel, 
        participacao,
        chSemanalSemestre1, 
        chSemanalSemestre2
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];

      const localStorageKey = `${ano}`;
      let localStorageData = localStorage.getItem(localStorageKey);
      localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
      localStorageData.orientacao_coorientacao_academica = newDataArray;
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  
      //localStorage.setItem("orientacao_coorientacao_academica", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Curso</FormLabel>
                  <Input
                    type="text"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
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
                    <option>IC</option>
                    <option>VIC</option>
                    <option>TDI</option>
                    <option>PET</option>
                    <option>ID</option>
                    <option>MON</option>
                    <option>BEX</option>
                    <option>EST/TREI</option>
                    <option>TCC</option>
                    <option>ESO</option>
                    <option>ME</option>
                    <option>DS</option>
                    <option>TD</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Nivel</FormLabel>
                  <Select
                    name="Nivel"
                    placeholder="Selecione o nível"
                    value={nivel}
                    onChange={(e) => setNivel(e.target.value)}
                  >
                    <option>GRADUAÇÃO</option>
                    <option>PÓS-GRADUAÇÃO</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Participação</FormLabel>
                  <Select
                    name="Participação"
                    placeholder="Selecione a participação"
                    value={participacao}
                    onChange={(e) => setParticipacao(e.target.value)}
                  >
                    <option>ORIENTAÇÃO</option>
                    <option>CO-ORIENTAÇÃO</option>
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
  
  export default ModalOrientacaoCoorientacaoAcademica;
  