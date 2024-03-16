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
  
  const ModalQualificacaoDissertacaoTese = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {
    const [nome, setNome] = useState(dataEdit.nome || "");
    const [tituloDoTrabalho, setTituloDoTrabalho] = useState(dataEdit.tituloDoTrabalho || "");
    const [ies, setIES] = useState(dataEdit.ies || "");
    const [tipo, setTipo] = useState(dataEdit.tipo || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");  
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
  
    const handleSave = () => {
      if (!nome || !tituloDoTrabalho || !ies || !tipo || !chSemanalSemestre1 || !chSemanalSemestre2) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { nome, tituloDoTrabalho, ies, tipo, chSemanalSemestre1, chSemanalSemestre2 };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { nome, tituloDoTrabalho, ies, tipo, chSemanalSemestre1, chSemanalSemestre2 }]
        : [...(data ? data : [])];
  
      localStorage.setItem("qualificacao_dissertacao_tese", JSON.stringify(newDataArray));
  
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
                  <FormLabel>Título do Trabalho</FormLabel>
                  <Input
                    type="text"
                    value={tituloDoTrabalho}
                    onChange={(e) => setTituloDoTrabalho(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>IES</FormLabel>
                  <Input
                    type="text"
                    value={ies}
                    onChange={(e) => setIES(e.target.value)}
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
  
  export default ModalQualificacaoDissertacaoTese;
  