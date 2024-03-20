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
  
  const ModalOrientacaoCoorientacaoAcademica = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [nome, setNome] = useState(dataEdit.nome || "");
    const [matricula, setMatricula] = useState(dataEdit.matricula || "");
    const [curso, setCurso] = useState(dataEdit.curso || "");
    const [tipo, setTipo] = useState(dataEdit.tipo || "");
    const [nivel, setNivel] = useState(dataEdit.nivel || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
    
    const handleSave = () => {
      if (!nome || !matricula || !curso || !tipo || !nivel || !chSemanalSemestre1 || !chSemanalSemestre2) return;
      
      /*
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { nome, matricula, curso, tipo, nivel, chSemanalSemestre1, chSemanalSemestre2 };
      }
      */

      const newItem = {
        id: uuidv4(), 
        nome, 
        matricula, 
        curso, 
        tipo, 
        nivel, 
        chSemanalSemestre1, 
        chSemanalSemestre2
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];
  
      localStorage.setItem("orientacao_coorientacao_academica", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Matrícula</FormLabel>
                  <Input
                    type="text"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
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
                  <Input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Nivel</FormLabel>
                  <Input
                    type="text"
                    value={nivel}
                    onChange={(e) => setNivel(e.target.value)}
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
  
  export default ModalOrientacaoCoorientacaoAcademica;
  