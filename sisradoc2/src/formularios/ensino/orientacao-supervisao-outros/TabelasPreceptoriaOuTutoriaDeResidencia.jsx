import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import "../../styleFormularios.css";
import ModalPreceptoriaOuTutoriaDeResidencia from "../../../components/Modal/ensino/orientacao-supervisao-outros/ModalPreceptoriaOuTutoriaDeResidencia";
import { AnoContext } from "../../../utils/AnoContext";

const TabelasPreceptoriaOuTutoriaDeResidencia = () => {
  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const db_costumer =
      JSON.parse(localStorage.getItem(ano))
        ?.preceptoria_e_ou_tutoria_de_residencia || [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);

    setData(newArray);

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.preceptoria_e_ou_tutoria_de_residencia = newArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  };

  //maxW={1000}               BOX

  return (
    <Flex
      h="100%"
      w="100%"
      align="center"
      justify="center"
      fontSize="15px"
      fontFamily="poppins"
    >
      <Box maxW={1200} w="100%" h="100%" py={10} px={2} paddingTop={5}>
        <Button
          colorScheme="blue"
          variant="outline"
          borderColor="#7c5942"
          color="#7c5942"
          _hover={{ color: "#fff", bg: "#7c5942" }}
          onClick={() => [setDataEdit({}), onOpen()]}
        >
          NOVO CADASTRO
        </Button>

        <Box
          overflowY="auto"
          overflowX="auto"
          height="100%"
          className="custom-scrollbar"
        >
          <Table mt="5">
            <Thead>
              <Tr borderBottom="3px solid #7c5942">
                <Th minW="150px" fontSize="15px" color="#7c5942">
                  ID
                </Th>
                <Th minW="200px" fontSize="15px" color="#7c5942">
                  Nome - Matrícula
                </Th>
                <Th minW="200px" fontSize="15px" color="#7c5942">
                  Tipo
                </Th>
                <Th minW="200px" fontSize="15px" color="#7c5942">
                  CH Semanal (1º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#7c5942">
                  CH Semanal (2º Semestre)
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(
                (
                  {
                    id,
                    nomeOuMatricula,
                    tipo,
                    chSemanalSemestre1,
                    chSemanalSemestre2,
                  },
                  index
                ) => (
                  <Tr
                    key={index}
                    cursor="pointer "
                    fontWeight={600}
                    color="#7c5942"
                    borderBottom="3px solid #7c5942"
                    _hover={{ bg: "#7c5942", color: "#fff" }}
                  >
                    <Td
                      minW="150px"
                      style={{
                        maxWidth: "150px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {id}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {nomeOuMatricula}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {tipo}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chSemanalSemestre1}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chSemanalSemestre2}
                    </Td>
                    <Td p={0}>
                      <EditIcon
                        fontSize={20}
                        onClick={() => [
                          setDataEdit({
                            id,
                            nomeOuMatricula,
                            tipo,
                            chSemanalSemestre1,
                            chSemanalSemestre2,
                            index,
                          }),
                          onOpen(),
                        ]}
                      />
                    </Td>
                    <Td>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => {
                        setItemToDelete(id);
                        setDeleteConfirmationOpen(true);
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalPreceptoriaOuTutoriaDeResidencia
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
      {deleteConfirmationOpen && (
        <Modal
          isOpen={deleteConfirmationOpen}
          onClose={() => setDeleteConfirmationOpen(false)}
          isCentered
          motionPreset="scale"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirmar exclusão</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Tem certeza de que deseja excluir este item?</ModalBody>
            <ModalFooter>
              <Button
                colorScheme="green"
                onClick={() => {
                  handleRemove(itemToDelete);
                  setDeleteConfirmationOpen(false);
                }}
              >
                Confirmar
              </Button>
              <Button
                colorScheme="red"
                mr={3}
                onClick={() => setDeleteConfirmationOpen(false)}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default TabelasPreceptoriaOuTutoriaDeResidencia;
