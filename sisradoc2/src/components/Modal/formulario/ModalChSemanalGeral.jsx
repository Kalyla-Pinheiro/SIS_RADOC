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

const ModalChSemanalGeral = ({ isOpen, onClose }) => {
  //const [ano, setAno] = useState(dataEdit.ano || "");

  const [Ensino1, setEnsino1] = useState(null);
  const [Ensino2, setEnsino2] = useState(null);
  const [Pesquisa1, setPesquisa1] = useState(null);
  const [Pesquisa2, setPesquisa2] = useState(null);
  const [Extensao1, setExtensao1] = useState(null);
  const [Extensao2, setExtensao2] = useState(null);
  const [Gestao1, setGestao1] = useState(null);
  const [Gestao2, setGestao2] = useState(null);
  const [Total1, setTotal1] = useState(null);
  const [Total2, setTotal2] = useState(null);

  useEffect(() => {
    const jsonDoLocalStorage = localStorage.getItem("ch_semanal_geral");

    if (jsonDoLocalStorage) {
      const objetoJson = JSON.parse(jsonDoLocalStorage);
      setEnsino1(
        parseInt(objetoJson[0].Ensino1) + parseInt(objetoJson[0].Ensino2)
      );
      setEnsino2(
        parseInt(objetoJson[0].Ensino1) + parseInt(objetoJson[0].Ensino2)
      );
      setPesquisa1(
        parseInt(objetoJson[0].Pesquisa1) + parseInt(objetoJson[0].Pesquisa2)
      );
      setPesquisa2(
        parseInt(objetoJson[0].Pesquisa1) + parseInt(objetoJson[0].Pesquisa2)
      );
      setExtensao1(
        parseInt(objetoJson[0].Extensao1) + parseInt(objetoJson[0].Extensao2)
      );
      setExtensao2(
        parseInt(objetoJson[0].Extensao1) + parseInt(objetoJson[0].Extensao2)
      );
      setGestao1(
        parseInt(objetoJson[0].Gestao1) + parseInt(objetoJson[0].Gestao2)
      );
      setGestao2(
        parseInt(objetoJson[0].Gestao1) + parseInt(objetoJson[0].Gestao2)
      );
      setTotal1(
        parseInt(objetoJson[0].Total1) + parseInt(objetoJson[0].Total2)
      );
      setTotal2(
        parseInt(objetoJson[0].Total1) + parseInt(objetoJson[0].Total2)
      );
    }
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="60rem">
          <ModalHeader textAlign="center" marginTop={10}>
            <h2>Distribuição</h2>
            <h3 style={{ color: "gray" }}>da ch semanal do radoc</h3>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" gap={10} marginBottom={10}>
              <Box
                display="flex"
                flexDirection="column"
                marginTop={6}
                textAlign="center"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  textAlign="center"
                  marginTop={4}
                >
                  <FormLabel textAlign="center">Semestre_1</FormLabel>
                </Box>
                <Box textAlign="center">
                  <FormLabel marginTop={6} textAlign="center">
                    Semestre_2
                  </FormLabel>
                </Box>
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Ensino
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={Ensino1}
                />
                <Input type="text" placeholder="CH" value={Ensino2} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Pesquisa
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={Pesquisa1}
                />
                <Input type="text" placeholder="CH" value={Pesquisa2} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Extensao
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={Extensao1}
                />
                <Input type="text" placeholder="CH" value={Extensao2} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Gestão
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={Gestao1}
                />
                <Input type="text" placeholder="CH" value={Gestao2} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Total
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={Total1}
                />
                <Input type="text" placeholder="CH" value={Total2} />
              </Box>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalChSemanalGeral;
