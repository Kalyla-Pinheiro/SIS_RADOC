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
import { AnoContext } from "../../../../utils/AnoContext";
import TokenFunctions from "../../../../utils/Token";

const ModalTrabalhosBoletinsOutros = ({
  data,
  setData,
  dataEdit,
  isOpen,
  onClose,
}) => {
  const { ano } = useContext(AnoContext);

  const [descricao, setDescricao] = useState(dataEdit.descricao || "");

  const handleSave = () => {
    //if (!link || !descricao) return;

    const newItem = {
      id: uuidv4(),
      descricao,
    };

    const newDataArray = Object.keys(dataEdit).length
      ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
      : [...data, newItem];

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.trabalhos_boletins_e_outros = newDataArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

    setData(newDataArray);

    onClose();
    window.location.reload();
  };

  var trabalhosBoletinsData = "";
  try {
    trabalhosBoletinsData = TokenFunctions.get_trabalhos_boletins();
  } catch (error) {}

  useEffect(() => {
    if (trabalhosBoletinsData) {
      setDescricao(trabalhosBoletinsData.trabalhosBoletins[0]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const fieldSetters = {
      Descricao: setDescricao,
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
                <FormLabel>Descrição</FormLabel>
                <Input
                  type="text"
                  name="Descricao"
                  value={descricao}
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

export default ModalTrabalhosBoletinsOutros;
