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
import ModalMotivacaoDoAfastamento from "../../../components/Modal/outros/afastamentos/ModalMotivacaoDoAfastamento";
import "../../styleFormularios.css";

const TabelasOutrasInformacoes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const db_costumer = localStorage.getItem("outras_informacoes")
      ? JSON.parse(localStorage.getItem("outras_informacoes"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);

    setData(newArray);

    localStorage.setItem("outras_informacoes", JSON.stringify(newArray));
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
          borderColor="#fff"
          color="#fff"
          _hover={{ color: "black", bg: "white" }}
          onClick={() => [setDataEdit({}), onOpen()]}
        >
          NOVO CADASTRO
        </Button>

        <Box overflowY="auto" overflowX="auto" height="100%" className="custom-scrollbar">
          <Table mt="5">
            <Thead>
              <Tr>
                <Th minW="150px" fontSize="15px" color="#fff">
                  ID
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                    Motivação do afastamento
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                    Portaria
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ id, motivacaoDoAfastamento, portaria }, index) => (
                <Tr
                  key={index}
                  cursor="pointer "
                  color="#fff"
                  _hover={{ bg: "gray.100", color: "#000000" }}
                >
                  <Td minW="150px" style={{ maxWidth: "150px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {id}
                  </Td>
                  <Td minW="200px" style={{ wordWrap: "break-word", maxWidth: 200 }}>
                    {motivacaoDoAfastamento}
                  </Td>
                  <Td minW="200px" style={{ wordWrap: "break-word", maxWidth: 200 }}>
                    {portaria}
                  </Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ id, motivacaoDoAfastamento, portaria, index }),
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
        <ModalMotivacaoDoAfastamento
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

export default TabelasOutrasInformacoes;
