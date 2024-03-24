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
import { v4 as uuidv4 } from "uuid";
import TokenFunctions from "../../../../utils/Token";
import { useEffect } from "react";

const ModalDisciplinasMinistradas = ({
  data,
  setData,
  dataEdit,
  isOpen,
  onClose
}) => {
  const [nome, setNome] = useState(dataEdit.nome || "");
  const [codigo, setCodigo] = useState(dataEdit.codigo || "");
  const [curso, setCurso] = useState(dataEdit.curso || "");
  const [nivel, setNivel] = useState(dataEdit.nivel || "");
  const [chTotal, setChTotal] = useState(dataEdit.chTotal || "");
  const [numTurmasT, setNumTurmasT] = useState(dataEdit.numTurmasT || "");
  const [numTurmasP, setNumTurmasP] = useState(dataEdit.numTurmasP || "");
  const [chPorTurmaT, setChPorTurmaT] = useState(dataEdit.chPorTurmaT || "");
  const [chPorTurmaP, setChPorTurmaP] = useState(dataEdit.chPorTurmaP || "");
  const [nomeDocenteEnvolvido, setNomeDocenteEnvolvido] = useState(dataEdit.nomeDocenteEnvolvido || "");
  const [chDocenteEnvolvido, setChDocenteEnvolvido] = useState(dataEdit.chDocenteEnvolvido || "");

  const [aulasLetivas, setAulasLetivas] = useState({
    id: uuidv4(),
    Disciplina: "",
    Curso: "",
    Nivel: "",
    Numero_Turmas_Teoricas: "",
    Numero_Turmas_Praticas: "",
    CH_Por_Turma_Teorica: "",
    CH_Por_Turma_Pratica: "",
    Codigo: "",
    Carga_Horaria: "",
    Docentes_Envolvidos: "",
    CH_Docente_Envolvido: ""
  })

  const handleSave = () => {
    //if (!nome || !codigo || !curso || !nivel || !chTotal || !numTurmasT || !numTurmasP || !chPorTurmaT || !chPorTurmaP || !nomeDocenteEnvolvido || !chDocenteEnvolvido) return;

    if (codigoJaExiste()) {
      return alert("O código já existe!");
    }
    
    const newItem = {
      id: uuidv4(), 
      nome, 
      codigo, 
      curso, 
      nivel, 
      chTotal, 
      numTurmasT, 
      numTurmasP, 
      chPorTurmaT, 
      chPorTurmaP, 
      nomeDocenteEnvolvido, 
      chDocenteEnvolvido
    };

    const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];

    localStorage.setItem("disciplinas_ministradas", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const codigoJaExiste = () => {
    if (dataEdit.codigo !== codigo && data?.length) {
      return data.find((item) => item.codigo === codigo);
    }
    return false;
  };

  const aulasLetivasData = TokenFunctions.get_diario_turma();

  useEffect(() => {
    if(aulasLetivasData) {
      setAulasLetivas((prevFormData) => ({
        ...prevFormData,
        Disciplina: aulasLetivasData.diario_turma.Disciplina[0],
        Codigo: aulasLetivasData.diario_turma["Código"],
        Carga_Horaria: aulasLetivasData.diario_turma["Carga Horária"],
        Docentes_Envolvidos: aulasLetivasData.docentes_envolvidos[0],
        CH_Docente_Envolvido: aulasLetivasData.docentes_envolvidos[1]
      }))
    }

  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAulasLetivas((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
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
                  name="Disciplina"
                  value={aulasLetivas.Disciplina}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Código</FormLabel>
                <Input
                  type="text"
                  name="Codigo"
                  value={aulasLetivas.Codigo}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Curso</FormLabel>
                <Input
                  type="text"
                  name="Curso"
                  value={aulasLetivas.Curso}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nível</FormLabel>
                <Input
                  type="text"
                  name="Nivel"
                  value={aulasLetivas.Nivel}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Total</FormLabel>
                <Input
                  type="text"
                  name="Carga_Horaria"
                  value={aulasLetivas.Carga_Horaria}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nº Da Turma (Teórica)</FormLabel>
                <Input
                  type="text"
                  name="Numero_Turmas_Teoricas"
                  value={aulasLetivas.Numero_Turmas_Teoricas}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nº Da Turma (Prática)</FormLabel>
                <Input
                  type="text"
                  name="Numero_Turmas_Praticas"
                  value={aulasLetivas.Numero_Turmas_Praticas}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Teórica)</FormLabel> 
                <Input
                  type="text"
                  name="CH_Por_Turma_Teorica"
                  value={aulasLetivas.CH_Por_Turma_Teorica}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Prática)</FormLabel> 
                <Input
                  type="text"
                  name="CH_Por_Turma_Pratica"
                  value={aulasLetivas.CH_Por_Turma_Pratica}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nome Docente Envolvido</FormLabel> 
                <Input
                  type="text"
                  name="Docentes_Envolvidos"
                  value={aulasLetivas.Docentes_Envolvidos}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Docente Envolvido</FormLabel> 
                <Input
                  type="text"
                  name="CH_Docente_Envolvido"
                  value={aulasLetivas.CH_Docente_Envolvido}
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
