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
  
  const ModalCalculoChSemanal = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [chOrientacaoSemestre1, setChOrientacaoSemestre1] = useState(dataEdit.orientacaoSemestre1 || "");
    const [chCoorientacaoSemestre1, setChCoorientacaoSemestre1] = useState(dataEdit.chCoorientacaoSemestre1 || "");
    const [chSupervisaoSemestre1, setChSupervisaoSemestre1] = useState(dataEdit.chSupervisaoSemestre1 || "");
    const [chPreceptoriaSemestre1, setChPreceptoriaSemestre1] = useState(dataEdit.chPreceptoriaSemestre1 || "");
    const [chTotalSemestre1, setChTotalSemestre1] = useState(dataEdit.chTotalSemestre1 || "");
    const [chOrientacaoSemestre2, setChOrientacaoSemestre2] = useState(dataEdit.orientacaoSemestre2 || "");
    const [chCoorientacaoSemestre2, setChCoorientacaoSemestre2] = useState(dataEdit.chCoorientacaoSemestre2 || "");
    const [chSupervisaoSemestre2, setChSupervisaoSemestre2] = useState(dataEdit.chSupervisaoSemestre2 || "");
    const [chPreceptoriaSemestre2, setChPreceptoriaSemestre2] = useState(dataEdit.chPreceptoriaSemestre2 || "");
    const [chTotalSemestre2, setChTotalSemestre2] = useState(dataEdit.chTotalSemestre2 || "");
    
    const handleSave = () => {
      if (!chOrientacaoSemestre1 || !chCoorientacaoSemestre1 || !chSupervisaoSemestre1 || !chPreceptoriaSemestre1 || !chTotalSemestre1
        || !chOrientacaoSemestre2 || !chCoorientacaoSemestre2 || !chSupervisaoSemestre2 || !chPreceptoriaSemestre2 || !chTotalSemestre2) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { chOrientacaoSemestre1, chCoorientacaoSemestre1, chSupervisaoSemestre1, chPreceptoriaSemestre1, chTotalSemestre1,
                                 chOrientacaoSemestre2, chCoorientacaoSemestre2, chSupervisaoSemestre2, chPreceptoriaSemestre2, chTotalSemestre2 };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { chOrientacaoSemestre1, chCoorientacaoSemestre1, chSupervisaoSemestre1, chPreceptoriaSemestre1, chTotalSemestre1,
                                    chOrientacaoSemestre2, chCoorientacaoSemestre2, chSupervisaoSemestre2, chPreceptoriaSemestre2, chTotalSemestre2 }]
        : [...(data ? data : [])];
  
      localStorage.setItem("calculo_do_ch_semanal", JSON.stringify(newDataArray));
  
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
                  <FormLabel>CH Orientação (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chOrientacaoSemestre1}
                    onChange={(e) => setChOrientacaoSemestre1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Coorientação (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chCoorientacaoSemestre1}
                    onChange={(e) => setChCoorientacaoSemestre1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Supervisão (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chSupervisaoSemestre1}
                    onChange={(e) => setChSupervisaoSemestre1(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Preceptoria (1º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chPreceptoriaSemestre1}
                    onChange={(e) => setChPreceptoriaSemestre1(e.target.value)}
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
                  <FormLabel>CH Orientação (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chOrientacaoSemestre2}
                    onChange={(e) => setChOrientacaoSemestre2(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Coorientação (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chCoorientacaoSemestre2}
                    onChange={(e) => setChCoorientacaoSemestre2(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Supervisão (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chSupervisaoSemestre2}
                    onChange={(e) => setChSupervisaoSemestre2(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>CH Preceptoria (2º Semestre)</FormLabel>
                  <Input
                    type="text"
                    value={chPreceptoriaSemestre2}
                    onChange={(e) => setChPreceptoriaSemestre2(e.target.value)}
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
  
  export default ModalCalculoChSemanal;
  