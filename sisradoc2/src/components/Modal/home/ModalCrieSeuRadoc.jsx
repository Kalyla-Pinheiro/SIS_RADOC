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
  
  const ModalCrieSeuRadoc = ({
    isOpen,
    onClose,
  }) => {
    //const [ano, setAno] = useState(dataEdit.ano || "");
  
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
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3}>
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
  