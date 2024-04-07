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

const ModalOrientacaoCoorientacaoAcademica = ({
  data,
  setData,
  dataEdit,
  isOpen,
  onClose,
}) => {
  const { ano } = useContext(AnoContext);
  console.log("O valor do ano é: ", ano);

  const [nome, setNome] = useState(dataEdit.nome || "");
  const [curso, setCurso] = useState(dataEdit.curso || "");
  const [tipo, setTipo] = useState(dataEdit.tipo || "");
  const [nivel, setNivel] = useState(dataEdit.nivel || "");
  const [participacao, setParticipacao] = useState(dataEdit.participacao || "");
  const [chSemanalSemestre1, setChSemanalSemestre1] = useState(
    dataEdit.chSemanalSemestre1 || ""
  );
  const [chSemanalSemestre2, setChSemanalSemestre2] = useState(
    dataEdit.chSemanalSemestre2 || ""
  );

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
      chSemanalSemestre2,
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
    window.location.reload();
  };

  var orientacaoAcademicaData = "";
  try {
    orientacaoAcademicaData = TokenFunctions.get_orientacao_academica();
  } catch (error) {}

  useEffect(() => {
    if (orientacaoAcademicaData) {
      setNome(orientacaoAcademicaData.orientacao_academica_nome);
      setCurso(orientacaoAcademicaData.orientacao_academica_curso);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const fieldSetters = {
      Nome: setNome,
      Curso: setCurso,
      Tipo: setTipo,
      Nivel: setNivel,
      Participacao: setParticipacao,
      CH_Semanal_Semestre_1: setChSemanalSemestre1,
      CH_Semanal_Semestre_2: setChSemanalSemestre2,
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
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  name="Nome"
                  value={nome}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Curso</FormLabel>
                <Input
                  type="text"
                  name="Curso"
                  value={curso}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Tipo</FormLabel>
                <Select
                  name="Tipo"
                  placeholder="Selecione o tipo"
                  value={tipo}
                  onChange={handleChange}
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
                  onChange={handleChange}
                >
                  <option>GRADUAÇÃO</option>
                  <option>PÓS-GRADUAÇÃO</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Participação</FormLabel>
                <Select
                  name="Participacao"
                  placeholder="Selecione a participação"
                  value={participacao}
                  onChange={handleChange}
                >
                  <option>ORIENTAÇÃO</option>
                  <option>CO-ORIENTAÇÃO</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>CH Semanal (1º Semestre)</FormLabel>
                <Input
                  type="text"
                  name="CH_Semanal_Semestre_1"
                  value={chSemanalSemestre1}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Semanal (2º Semestre)</FormLabel>
                <Input
                  type="text"
                  name="CH_Semanal_Semestre_2"
                  value={chSemanalSemestre2}
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

export default ModalOrientacaoCoorientacaoAcademica;
