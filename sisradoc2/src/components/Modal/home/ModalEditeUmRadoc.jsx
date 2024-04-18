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
  import { ToastifyMessages } from "../../../utils/ToastifyMessages";
  import { ToastContainer } from "react-toastify";
  
  const ModalEditeUmRadoc = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const { ano, setAnoValue } = useContext(AnoContext);
  
    const [inputAno, setInputAno] = useState("");
  
    const handleComecarClick = () => {
        let item = localStorage.getItem(inputAno);
        if (item) {
            setAnoValue(inputAno);
            navigate("/formularios");
        } 
    };
  
    return (
      <div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>EDITE UM RADOC</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Qual ano do Radoc você deseja editar?</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ano"
                    value={inputAno}
                    onChange={(e) => setInputAno(e.target.value)}
                  />
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
      </div>
    );
  };
  
  export default ModalEditeUmRadoc;
  