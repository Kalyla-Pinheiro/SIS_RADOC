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
import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnoContext } from "../../../../utils/AnoContext";
import TokenFunctions from "../../../../utils/Token";

const ModalProjetos = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const { ano } = useContext(AnoContext);

  const [titulo, setTitulo] = useState(dataEdit.titulo || "");
  const [codigoProped, setCodigoProped] = useState(dataEdit.codigoProped || "");
  const [situacaoAtual, setSituacaoAtual] = useState(
    dataEdit.situacaoAtual || ""
  );
  const [funcao, setFuncao] = useState(dataEdit.funcao || "");

  const handleSave = () => {
    //if (!titulo || !codigoProped || !situacaoAtual || !funcao) return;

    const newItem = {
      id: uuidv4(),
      titulo,
      codigoProped,
      situacaoAtual,
      funcao,
    };

    const newDataArray = Object.keys(dataEdit).length
      ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
      : [...data, newItem];

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.projetos = newDataArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

    setData(newDataArray);

    onClose();
    window.location.reload();
  };

  var projetosPesquisaData = "";
  try {
    projetosPesquisaData = TokenFunctions.get_projetos_pesquisa();
  } catch (error) {}

  useEffect(() => {
    if (projetosPesquisaData) {
      setTitulo(projetosPesquisaData.projetos["Titulo do Projeto"]);
      setCodigoProped(projetosPesquisaData.projetos["Código"]);
      setSituacaoAtual(projetosPesquisaData.projetos["Situação do Projeto"]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const fieldSetters = {
      Titulo: setTitulo,
      CodigoProped: setCodigoProped,
      SituacaoAtual: setSituacaoAtual,
      Funcao: setFuncao,
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
                <FormLabel>Título</FormLabel>
                <Input
                  type="text"
                  name="Titulo"
                  value={titulo}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Código PROPED</FormLabel>
                <Input
                  type="text"
                  name="CodigoProped"
                  value={codigoProped}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Situação Atual</FormLabel>
                <Input
                  type="text"
                  name="SituacaoAtual"
                  value={situacaoAtual}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Função</FormLabel>
                <Select
                  name="Funcao"
                  placeholder="Selecione a Função"
                  value={funcao}
                  onChange={handleChange}
                >
                  <option>Coordenador</option>
                  <option>Colaborador</option>
                </Select>
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

export default ModalProjetos;
