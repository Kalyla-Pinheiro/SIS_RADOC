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

  const [areaDeConhecimento, setAreaDeConhecimento] = useState(
    dataEdit.areaDeConhecimento || ""
  );
  const [instituicao, setInstituicao] = useState(dataEdit.instituicao || "");
  const [periodo, setPeriodo] = useState(dataEdit.periodo || "");
  const [chSemanal, setChSemanal] = useState(dataEdit.chSemanal || "");

  const handleSave = () => {
    // if (!areaDeConhecimento || !instituicao || !periodo || !instituto || !chSemanalSemestre1 || !chSemanalSemestre2) return;

    const newItem = {
      id: uuidv4(),
      areaDeConhecimento,
      instituicao,
      periodo,
      chSemanal,
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
                <FormLabel>
                  CH Semanal <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Input
                  type="text"
                  value={chSemanal}
                  onChange={(e) => setChSemanal(e.target.value)}
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
