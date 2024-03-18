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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalLivrosVerbetesPublicados from "../../../components/Modal/pesquisa/livros-verbetes-publicados/ModalLivrosVerbetesPublicados";

const TabelasLivrosVerbetesPublicados = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("livros_verbetes_publicados")
      ? JSON.parse(localStorage.getItem("livros_verbetes_publicados"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (tipo) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.tipo !== tipo);

    setData(newArray);

    localStorage.setItem("livros_verbetes_publicados", JSON.stringify(newArray));
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
      <Box  maxW={1200} w="100%" h="100%" py={10} px={2}>
        
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

        <Box overflowY="auto" overflowX="auto" height="100%">
          <Table mt="5">
            <Thead>
              <Tr>
                <Th minW="200px" fontSize="15px" color="#fff">
                    Tipo
                </Th>
                <Th minW="300px" fontSize="15px" color="#fff">
                    Link
                </Th>
                <Th minW="600px" fontSize="15px" color="#fff">
                    Descrição
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({tipo, link, descricao}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{tipo}</Td>
                  <Td minW="300px" style={{ wordWrap: 'break-word', maxWidth: 300 }}>{link}</Td>
                  <Td minW="600px" style={{ wordWrap: 'break-word', maxWidth: 600 }}>{descricao}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({tipo, link, descricao, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(tipo)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalLivrosVerbetesPublicados
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default TabelasLivrosVerbetesPublicados;
