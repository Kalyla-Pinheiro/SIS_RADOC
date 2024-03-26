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
import {ToastifyMessages} from "../../../../utils/ToastifyMessages";

const ModalDisciplinasMinistradas = ({
  data,
  setData,
  dataEdit,
  isOpen,
  onClose
}) => {

  const [aulasLetivas, setAulasLetivas] = useState({
    id: uuidv4(),
    nome: "",
    codigo: "",
    nivel: "",
    chTotal: "",
    numTurmasT: "",
    numTurmasP: "",
    chPorTurmaT: "",
    chPorTurmaP: "",
    nomeDocenteEnvolvido: "",
    chDocenteEnvolvido: ""
  })

  const handleSave = () => {
    // Criando um novo item com os valores de aulasLetivas ou strings vazias caso não existam
    const newItem = {
        id: uuidv4(),
        nome: aulasLetivas.nome || "",
        codigo: aulasLetivas.codigo || "",
        curso: aulasLetivas.curso || "",
        nivel: aulasLetivas.nivel || "",
        chTotal: aulasLetivas.chTotal || "",
        numTurmasT: aulasLetivas.numTurmasT || "",
        numTurmasP: aulasLetivas.numTurmasP || "",
        chPorTurmaT: aulasLetivas.chPorTurmaT || "",
        chPorTurmaP: aulasLetivas.chPorTurmaP || "",
        nomeDocenteEnvolvido: aulasLetivas.nomeDocenteEnvolvido || "",
        chDocenteEnvolvido: aulasLetivas.chDocenteEnvolvido || ""
    };

    // Recuperando os dados do localStorage ou inicializando um array vazio se não houver dados
    const storedData = localStorage.getItem("disciplinas_ministradas");
    const dataArray = storedData ? JSON.parse(storedData) : [];

    // Adicionando o novo item ao array existente
    const newDataArray = [...dataArray, newItem];

    // Salvando o novo array no localStorage
    localStorage.setItem("disciplinas_ministradas", JSON.stringify(newDataArray));

    // Atualizando o estado de data com o novo array
    setData(newDataArray);

    onClose();
};

  var aulasLetivasData = "";

  try {
    aulasLetivasData = TokenFunctions.get_diario_turma();
  } catch (error) {
  }

  useEffect(() => {
    try {
      if(aulasLetivasData) {
        setAulasLetivas((prevFormData) => ({
          ...prevFormData,
          nome: aulasLetivasData.diario_turma.Disciplina[0],
          codigo: aulasLetivasData.diario_turma["Código"],
          chTotal: aulasLetivasData.diario_turma["Carga Horária"],
          nomeDocenteEnvolvido: aulasLetivasData.docentes_envolvidos[0],
          chDocenteEnvolvido: aulasLetivasData.docentes_envolvidos[1]
        }))
      }
    } catch (error) {
      ToastifyMessages.error("Erro ao extrair os dados do PDF");
    }

  }, []);

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
                  name="nome"
                  value={aulasLetivas.nome}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Código</FormLabel>
                <Input
                  type="text"
                  name="codigo"
                  value={aulasLetivas.codigo}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Curso</FormLabel>
                <Input
                  type="text"
                  name="curso"
                  value={aulasLetivas.curso}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nível</FormLabel>
                <Input
                  type="text"
                  name="nivel"
                  value={aulasLetivas.nivel}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Total</FormLabel>
                <Input
                  type="text"
                  name="chTotal"
                  value={aulasLetivas.chTotal}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nº Da Turma (Teórica)</FormLabel>
                <Input
                  type="text"
                  name="numTurmasT"
                  value={aulasLetivas.numTurmasT}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nº Da Turma (Prática)</FormLabel>
                <Input
                  type="text"
                  name="numTurmasP"
                  value={aulasLetivas.numTurmasP}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Teórica)</FormLabel> 
                <Input
                  type="text"
                  name="chPorTurmaT"
                  value={aulasLetivas.chPorTurmaT}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Prática)</FormLabel> 
                <Input
                  type="text"
                  name="chPorTurmaP"
                  value={aulasLetivas.chPorTurmaP}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Nome Docente Envolvido</FormLabel> 
                <Input
                  type="text"
                  name="nomeDocenteEnvolvido"
                  value={aulasLetivas.nomeDocenteEnvolvido}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>CH Docente Envolvido</FormLabel> 
                <Input
                  type="text"
                  name="chDocenteEnvolvido"
                  value={aulasLetivas.chDocenteEnvolvido}
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