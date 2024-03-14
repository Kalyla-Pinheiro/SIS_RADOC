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
  onClose,
}) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [email, setEmail] = useState(dataEdit.email || "");
  const [nome, setNome] = useState(dataEdit.nome || "");
  const [codigo, setCodigo] = useState(dataEdit.codigo || "");
  const [curso, setCurso] = useState(dataEdit.curso || "");
  const [nivel, setNivel] = useState(dataEdit.nivel || "");
  const [chTotal, setChTotal] = useState(dataEdit.chTotal || "");

  const handleSave = () => {
    if (!name || !email || !nome || !codigo || !curso || !nivel || !chTotal) return;

    if (emailAlreadyExists()) {
      return alert("E-mail já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, email };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, email }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const emailAlreadyExists = () => {
    if (dataEdit.email !== email && data?.length) {
      return data.find((item) => item.email === email);
    }

    return false;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Clientes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
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
