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
import { useState, useEffect } from "react";

const ModalChSemanalOutros = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" marginTop={10}>
            CH SEMANAL DE OUTROS
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" gap={10} marginBottom={3}>
              <Box>
                <FormLabel textAlign="center">1º Semestre</FormLabel>
                <Input type="text" placeholder="CH" />
              </Box>
              <Box>
                <FormLabel textAlign="center">2º Semestre</FormLabel>
                <Input type="text" placeholder="CH" />
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center">
            {" "}
            <Button colorScheme="green">Salvar</Button>{" "}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalChSemanalOutros;
