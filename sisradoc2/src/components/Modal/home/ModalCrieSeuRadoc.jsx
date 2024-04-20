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
import { useNavigate } from "react-router-dom";
import { AnoContext } from "../../../utils/AnoContext";

const ModalCrieSeuRadoc = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [inputAno, setInputAno] = useState("");
  const [pergunta, setPergunta] = useState("");
  const { ano, setAnoValue } = useContext(AnoContext);

  const handleComecarClick = () => {
    setAnoValue(inputAno);
    console.log("O Valor do ano é: ", ano);
    const jsonData = {};
    jsonData.progressao = pergunta;
    localStorage.setItem(inputAno, JSON.stringify(jsonData));
    navigate("/formularios");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ATENÇÃO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Qual ano do Radoc você deseja preencher?</FormLabel>
                <Input
                  type="text"
                  placeholder="Ano"
                  value={inputAno}
                  onChange={(e) => setInputAno(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>
                  Teve progressão ou promoção no último semestre deste RADOC?
                </FormLabel>
                <Select
                  name="Funcao"
                  placeholder="Pergunta"
                  value={pergunta}
                  onChange={(e) => setPergunta(e.target.value)}
                >
                  <option>Sim</option>
                  <option>Não</option>
                </Select>
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleComecarClick}>
              COMEÇAR
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

export default ModalCrieSeuRadoc;
