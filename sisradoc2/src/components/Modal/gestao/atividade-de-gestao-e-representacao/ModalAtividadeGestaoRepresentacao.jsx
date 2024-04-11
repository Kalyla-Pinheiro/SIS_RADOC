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
  Select,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnoContext } from "../../../../utils/AnoContext";
import { ToastifyMessages } from "../../../../utils/ToastifyMessages";

const ModalAtividadeGestaoRepresentacao = ({
  data,
  setData,
  dataEdit,
  isOpen,
  onClose,
}) => {
  const { ano } = useContext(AnoContext);

  const [semestre, setSemestre] = useState(dataEdit.semestre || "");
  const [cargoOuFuncao, setCargoOuFuncao] = useState(
    dataEdit.cargoOuFuncao || ""
  );
  const [atoDeDesignacao, setAtoDeDesignacao] = useState(
    dataEdit.atoDeDesignacao || ""
  );
  const [periodo, setPeriodo] = useState(dataEdit.setPeriodo || "");
  const [chSemanal, setChSemanal] = useState(dataEdit.chSemanal || "");

  const handleSave = () => {
    //if (!cargoOuFuncao || !atoDeDesignacao || !periodo || !chSemanalSemestre1 || !chSemanalSemestre2) return;

    if (!semestre) {
      ToastifyMessages.error(
        "Por favor, preencha todos os campos obrigatórios"
      );
      return;
    }

    const newItem = {
      id: uuidv4(),
      semestre,
      cargoOuFuncao,
      atoDeDesignacao,
      periodo,
      chSemanal,
    };

    const newDataArray = Object.keys(dataEdit).length
      ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
      : [...data, newItem];

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.atividades_de_gestao_e_representacao = newDataArray;
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
                <FormLabel>
                  Semestre <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Select
                  name="Semestre"
                  placeholder="Selecione o semestre"
                  value={semestre}
                  onChange={(e) => setSemestre(e.target.value)}
                >
                  <option>1º SEMESTRE</option>
                  <option>2º SEMESTRE</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Cargo/Função</FormLabel>
                <Input
                  type="text"
                  value={cargoOuFuncao}
                  onChange={(e) => setCargoOuFuncao(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Ato de Designação</FormLabel>
                <Input
                  type="text"
                  value={atoDeDesignacao}
                  onChange={(e) => setAtoDeDesignacao(e.target.value)}
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
                <FormLabel>CH Semanal</FormLabel>
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

export default ModalAtividadeGestaoRepresentacao;
