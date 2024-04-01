import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AnoContext } from "../../../utils/AnoContext";

const ModalCrieSeuRadoc = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [inputAno, setInputAno] = useState('');
  const { ano, setAnoValue } = useContext(AnoContext);

  const handleComecarClick = () => {
    setAnoValue(inputAno);
    console.log("O Valor do ano é: ", ano);
    const jsonData = {};
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
                  <Input type="text" placeholder="Ano" value={inputAno} onChange={(e) => setInputAno(e.target.value)}/>
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