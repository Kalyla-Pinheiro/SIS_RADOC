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

const ModalProjetosDeExtensao = ({
  data,
  setData,
  dataEdit,
  isOpen,
  onClose,
}) => {
  const { ano } = useContext(AnoContext);

  const [titulo, setTitulo] = useState(dataEdit.titulo || "");
  const [cadastroProex, setCadastroProex] = useState(
    dataEdit.cadastroProex || ""
  );
  const [situacaoAtual, setSituacaoAtual] = useState(
    dataEdit.situacaoAtual || ""
  );
  const [funcao, setFuncao] = useState(dataEdit.funcao || "");
  const [chSemanalSemestre1, setChSemanalSemestre1] = useState(
    dataEdit.chSemanalSemestre1 || ""
  );
  const [chSemanalSemestre2, setChSemanalSemestre2] = useState(
    dataEdit.chSemanalSemestre2 || ""
  );

  const handleSave = () => {
    //if (!titulo || !cadastroProex || !situacaoAtual || !funcao || !chSemanalSemestre1 || !chSemanalSemestre2) return;

    const newItem = {
      id: uuidv4(),
      titulo,
      cadastroProex,
      situacaoAtual,
      funcao,
      chSemanalSemestre1,
      chSemanalSemestre2,
    };

    const newDataArray = Object.keys(dataEdit).length
      ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
      : [...data, newItem];

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.projetos_de_extensao = newDataArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

    setData(newDataArray);

    onClose();
    window.location.reload();
  };

  var projetosExtensaoData = "";
  try {
    projetosExtensaoData = TokenFunctions.get_projetos_extensao();
  } catch (error) {}

  useEffect(() => {
    if (projetosExtensaoData) {
      setTitulo(projetosExtensaoData.projetos_extensao["Título"]);
      setCadastroProex(projetosExtensaoData.projetos_extensao["Código"]);
      setSituacaoAtual(projetosExtensaoData.projetos_extensao["Situação"]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const fieldSetters = {
      Titulo: setTitulo,
      CadastroProex: setCadastroProex,
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
                <FormLabel>Cadastro Proex</FormLabel>
                <Input
                  type="text"
                  name="CadastroProex"
                  value={cadastroProex}
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
                  onChange={(e) => setFuncao(e.target.value)}
                >
                  <option>Coordenador</option>
                  <option>Colaborador</option>
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

export default ModalProjetosDeExtensao;
