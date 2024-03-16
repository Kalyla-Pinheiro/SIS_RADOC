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
  
  const ModalChSemanalAulas = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [chGraduacaoSemestre1, setChGraduacaoSemestre1] = useState(dataEdit.chGraduacaoSemestre1 || "");
    const [chGraduacaoSemestre2, setChGraduacaoSemestre2] = useState(dataEdit.chGraduacaoSemestre2 || "");
    const [chPosGraduacaoSemestre1, setChPosGraduacaoSemestre1] = useState(dataEdit.chPosGraduacaoSemestre1 || "");
    const [chPosGraduacaoSemestre2, setChPosGraduacaoSemestre2] = useState(dataEdit.chPosGraduacaoSemestre2 || "");
    const [chTotalSemestre1, setChTotalSemestre1] = useState(dataEdit.chTotalSemestre1 || "");  
    const [chTotalSemestre2, setChTotalSemestre2] = useState(dataEdit.chTotalSemestre2 || "");
    
    const handleSave = () => {
      if (!chGraduacaoSemestre1 || !chGraduacaoSemestre2 || !chPosGraduacaoSemestre1 || !chPosGraduacaoSemestre2 || !chTotalSemestre1 || !chTotalSemestre2) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { chGraduacaoSemestre1, chGraduacaoSemestre2, chPosGraduacaoSemestre1, chPosGraduacaoSemestre2, chTotalSemestre1, chTotalSemestre2 };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { chGraduacaoSemestre1, chGraduacaoSemestre2, chPosGraduacaoSemestre1, chPosGraduacaoSemestre2, chTotalSemestre1, chTotalSemestre2 }]
        : [...(data ? data : [])];
  
      localStorage.setItem("ch_semanal_aulas", JSON.stringify(newDataArray));
  
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
                  <FormLabel>CH Graduação (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chGraduacaoSemestre1}
                    onChange={(e) => setChGraduacaoSemestre1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Pós-graduação (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chPosGraduacaoSemestre1}
                    onChange={(e) => setChPosGraduacaoSemestre1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Total (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chTotalSemestre1}
                    onChange={(e) => setChTotalSemestre1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Graduação (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chGraduacaoSemestre2}
                    onChange={(e) => setChGraduacaoSemestre2(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Pós-graduação (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chPosGraduacaoSemestre2}
                    onChange={(e) => setChPosGraduacaoSemestre2(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Total (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chTotalSemestre2}
                    onChange={(e) => setChTotalSemestre2(e.target.value)}
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
  
  export default ModalChSemanalAulas;
  