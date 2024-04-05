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
import { useEffect, useState } from "react";
import ModalCalculoChSemanal from "../../../components/Modal/ensino/orientacao-supervisao-outros/ModalCalculoChSemanal";
import "../../styleFormularios.css";

const TabelasCalculoChSemanal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const db_costumer = localStorage.getItem("calculo_do_ch_semanal")
      ? JSON.parse(localStorage.getItem("calculo_do_ch_semanal"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter((item) => item.id !== id);

    setData(newArray);

    localStorage.setItem("calculo_do_ch_semanal", JSON.stringify(newArray));
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
          borderColor="#fff"
          color="#fff"
          _hover={{ color: "black", bg: "white" }}
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
              <Tr>
                <Th minW="150px" fontSize="15px" color="#fff">
                  ID
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Orientação (1º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Coorientação (1º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Supervisão (1º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Preceptoria (1º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Total (1º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Orientação (2º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Coorientação (2º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Supervisão (2º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Preceptoria (2º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Total (2º Semestre)
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
                    chOrientacaoSemestre1,
                    chCoorientacaoSemestre1,
                    chSupervisaoSemestre1,
                    chPreceptoriaSemestre1,
                    chTotalSemestre1,
                    chOrientacaoSemestre2,
                    chCoorientacaoSemestre2,
                    chSupervisaoSemestre2,
                    chPreceptoriaSemestre2,
                    chTotalSemestre2,
                  },
                  index
                ) => (
                  <Tr
                    key={index}
                    cursor="pointer "
                    color="#fff"
                    borderBottom="3px solid #7c5942"
                    _hover={{ bg: "gray.100", color: "#000000" }}
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
                      {chOrientacaoSemestre1}
                    </Td>
                    <Td
                      minW="300px"
                      style={{ wordWrap: "break-word", maxWidth: 300 }}
                    >
                      {chCoorientacaoSemestre1}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chSupervisaoSemestre1}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chPreceptoriaSemestre1}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chTotalSemestre1}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chOrientacaoSemestre2}
                    </Td>
                    <Td
                      minW="300px"
                      style={{ wordWrap: "break-word", maxWidth: 300 }}
                    >
                      {chCoorientacaoSemestre2}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chSupervisaoSemestre2}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chPreceptoriaSemestre2}
                    </Td>
                    <Td
                      minW="200px"
                      style={{ wordWrap: "break-word", maxWidth: 200 }}
                    >
                      {chTotalSemestre2}
                    </Td>
                    <Td p={0}>
                      <EditIcon
                        fontSize={20}
                        onClick={() => [
                          setDataEdit({
                            id,
                            chOrientacaoSemestre1,
                            chCoorientacaoSemestre1,
                            chSupervisaoSemestre1,
                            chPreceptoriaSemestre1,
                            chTotalSemestre1,
                            chOrientacaoSemestre2,
                            chCoorientacaoSemestre2,
                            chSupervisaoSemestre2,
                            chPreceptoriaSemestre2,
                            chTotalSemestre2,
                            index,
                          }),
                          onOpen(),
                        ]}
                      />
                    </Td>
                    <Td>
                      <DeleteIcon
                        fontSize={20}
                        onClick={() => handleRemove(id)}
                      />
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalCalculoChSemanal
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    {deleteConfirmationOpen && (
        <Modal isOpen={deleteConfirmationOpen} onClose={() => setDeleteConfirmationOpen(false)} isCentered motionPreset="scale">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirmar exclusão</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Tem certeza de que deseja excluir este item?
            </ModalBody>
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
              <Button colorScheme="red" mr={3} onClick={() => setDeleteConfirmationOpen(false)}>
                Cancelar
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default TabelasCalculoChSemanal;
