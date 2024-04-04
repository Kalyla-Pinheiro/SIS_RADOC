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
import ModalAvaliacaoDiscente from "../../../components/Modal/ensino/avaliacao-discente/ModalAvaliacaoDiscente";
import "../../styleFormularios.css";
import { AnoContext } from "../../../utils/AnoContext";

const TabelasAvaliacaoDiscente = () => {
  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    // const db_costumer = localStorage.getItem("avaliacao_discente")
    //   ? JSON.parse(localStorage.getItem("avaliacao_discente"))
    //   : [];

    const db_costumer =
      JSON.parse(localStorage.getItem(ano))?.avaliacao_discente || [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);

    setData(newArray);

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.avaliacao_discente = newArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

    //localStorage.setItem("avaliacao_discente", JSON.stringify(newArray));
  };

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
                  Código da Disciplina
                </Th>
                <Th minW="200px" fontSize="15px" color="#7c5942">
                  Média
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ id, codigoDaDisciplina, media }, index) => (
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
                    {codigoDaDisciplina}
                  </Td>
                  <Td
                    minW="200px"
                    style={{ wordWrap: "break-word", maxWidth: 200 }}
                  >
                    {media}
                  </Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ id, codigoDaDisciplina, media, index }),
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
        <ModalAvaliacaoDiscente
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

export default TabelasAvaliacaoDiscente;
