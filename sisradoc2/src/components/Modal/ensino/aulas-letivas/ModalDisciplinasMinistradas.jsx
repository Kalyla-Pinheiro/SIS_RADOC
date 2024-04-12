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
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TokenFunctions from "../../../../utils/Token";
import { useEffect } from "react";
import { ToastifyMessages } from "../../../../utils/ToastifyMessages";
import { AnoContext } from "../../../../utils/AnoContext";

const ModalDisciplinasMinistradas = ({
  data,
  setData,
  dataEdit,
  isOpen,
  onClose,
}) => {
  const { ano } = useContext(AnoContext);

  const [semestre, setSemestre] = useState(dataEdit.semestre || "");
  const [nomeCodigo, setNomeCodigo] = useState(dataEdit.nomeCodigo || "");
  const [curso, setCurso] = useState(dataEdit.curso || "");
  const [nivel, setNivel] = useState(dataEdit.nivel || "");
  const [chTotal, setChTotal] = useState(dataEdit.chTotal || "");
  const [numTurmasT, setNumTurmasT] = useState(dataEdit.numTurmasT || "");
  const [numTurmasP, setNumTurmasP] = useState(dataEdit.numTurmasP || "");
  const [chPorTurmaT, setChPorTurmaT] = useState(dataEdit.chPorTurmaT || "");
  const [chPorTurmaP, setChPorTurmaP] = useState(dataEdit.chPorTurmaP || "");
  const [nomeDocenteEnvolvido, setNomeDocenteEnvolvido] = useState(
    dataEdit.nomeDocenteEnvolvido || ""
  );
  const [chDocenteEnvolvido, setChDocenteEnvolvido] = useState(
    dataEdit.chDocenteEnvolvido || ""
  );

  const handleSave = () => {
    // Campos obrigatórios
    if (!nivel || !semestre) {
      ToastifyMessages.error(
        "Por favor, preencha todos os campos obrigatórios"
      );
      return;
    }

    const newItem = {
      id: uuidv4(),
      semestre,
      nomeCodigo,
      curso,
      nivel,
      chTotal,
      numTurmasT,
      numTurmasP,
      chPorTurmaT,
      chPorTurmaP,
      nomeDocenteEnvolvido,
      chDocenteEnvolvido,
    };

    const newDataArray = Object.keys(dataEdit).length
      ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
      : [...data, newItem];

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.disciplinas_ministradas = newDataArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

    setData(newDataArray);
    onClose();
    window.location.reload();
  };

  var aulasLetivasData = "";
  try {
    aulasLetivasData = TokenFunctions.get_diario_turma();
  } catch (error) {}

  useEffect(() => {
    if (aulasLetivasData) {
      setNomeCodigo(
        aulasLetivasData.diario_turma["Código"] +
          "-" +
          aulasLetivasData.diario_turma.Disciplina[0]
      );
        // Verifica se docentes_envolvidos tem mais de um elemento
        if (aulasLetivasData.docentes_envolvidos.length > 1) {
          setNomeDocenteEnvolvido(aulasLetivasData.docentes_envolvidos[0] + ', ' + aulasLetivasData.docentes_envolvidos[1]);
      } else {
          // Se não houver segundo elemento, define como uma string vazia
          setNomeDocenteEnvolvido(aulasLetivasData.docentes_envolvidos[0] || '');
      }

      // Verifica se docentes_ch_envolvidos tem mais de um elemento
      if (aulasLetivasData.docentes_ch_envolvidos.length > 1) {
          setChDocenteEnvolvido(parseInt(aulasLetivasData.docentes_ch_envolvidos[0]) + ', ' + parseInt(aulasLetivasData.docentes_ch_envolvidos[1]));
          // setChDocenteEnvolvido(parseInt(aulasLetivasData.docentes_ch_envolvidos[0]) + parseInt(aulasLetivasData.docentes_ch_envolvidos[1]));
      } else {
          // Se não houver segundo elemento, define como uma string vazia
          setChDocenteEnvolvido(parseInt(aulasLetivasData.docentes_ch_envolvidos[0]) || '');
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const fieldSetters = {
      Semestre: setSemestre,
      Disciplina: setNomeCodigo,
      Curso: setCurso,
      Nivel: setNivel,
      Carga_Horaria: setChTotal,
      Numero_Turmas_Teoricas: setNumTurmasT,
      Numero_Turmas_Praticas: setNumTurmasP,
      CH_Por_Turma_Teorica: setChPorTurmaT,
      CH_Por_Turma_Pratica: setChPorTurmaP,
      Docentes_Envolvidos: setNomeDocenteEnvolvido,
      CH_Docente_Envolvido: setChDocenteEnvolvido,
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
                <FormLabel>
                  Semestre <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Select
                  name="Semestre"
                  placeholder="Selecione o semestre"
                  value={semestre}
                  onChange={handleChange}
                >
                  <option>1º SEMESTRE</option>
                  <option>2º SEMESTRE</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Nome - Código</FormLabel>
                <Input
                  type="text"
                  name="Disciplina"
                  value={nomeCodigo}
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
                <FormLabel>
                  Nível <span style={{ color: "red" }}>*</span>
                </FormLabel>
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
                <FormLabel>CH Total</FormLabel>
                <Input
                  type="text"
                  name="Carga_Horaria"
                  value={chTotal}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nº Da Turma (Teórica)</FormLabel>
                <Input
                  type="text"
                  name="Numero_Turmas_Teoricas"
                  value={numTurmasT}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nº Da Turma (Prática)</FormLabel>
                <Input
                  type="text"
                  name="Numero_Turmas_Praticas"
                  value={numTurmasP}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Teórica)</FormLabel>
                <Input
                  type="text"
                  name="CH_Por_Turma_Teorica"
                  value={chPorTurmaT}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Prática)</FormLabel>
                <Input
                  type="text"
                  name="CH_Por_Turma_Pratica"
                  value={chPorTurmaP}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nome Docente Envolvido</FormLabel>
                <Input
                  type="text"
                  name="Docentes_Envolvidos"
                  value={nomeDocenteEnvolvido}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Docente Envolvido</FormLabel>
                <Input
                  type="text"
                  name="CH_Docente_Envolvido"
                  value={parseInt(chDocenteEnvolvido)}
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

export default ModalDisciplinasMinistradas;
