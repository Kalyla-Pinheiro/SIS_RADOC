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

  const handleSave = () => {
    if (!nome || !codigo || !curso || !nivel || !chTotal || !numTurmasT || !numTurmasP || !chPorTurmaT || !chPorTurmaP || !nomeDocenteEnvolvido || !chDocenteEnvolvido) return;

    if (codigoJaExiste()) {
      return alert("O código já existe!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { nome, codigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido};
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { nome, codigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido }]
      : [...(data ? data : [])];

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
                <FormLabel>Código</FormLabel>
                <Input
                  type="text"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Curso</FormLabel>
                <Input
                  type="text"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nível</FormLabel>
                <Input
                  type="text"
                  value={nivel}
                  onChange={(e) => setNivel(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>CH Total</FormLabel>
                <Input
                  type="text"
                  value={chTotal}
                  onChange={(e) => setChTotal(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nº De Turmas (Teóricas)</FormLabel>
                <Input
                  type="text"
                  value={numTurmasT}
                  onChange={(e) => setNumTurmasT(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nº De Turmas (Práticas)</FormLabel>
                <Input
                  type="text"
                  value={numTurmasP}
                  onChange={(e) => setNumTurmasP(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Teóricas)</FormLabel> 
                <Input
                  type="text"
                  value={chPorTurmaT}
                  onChange={(e) => setChPorTurmaT(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>CH Por Turma (Práticas)</FormLabel> 
                <Input
                  type="text"
                  value={chPorTurmaP}
                  onChange={(e) => setChPorTurmaP(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nome Docente Envolvido</FormLabel> 
                <Input
                  type="text"
                  value={nomeDocenteEnvolvido}
                  onChange={(e) => setNomeDocenteEnvolvido(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>CH Docente Envolvido</FormLabel> 
                <Input
                  type="text"
                  value={chDocenteEnvolvido}
                  onChange={(e) => setChDocenteEnvolvido(e.target.value)}
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
