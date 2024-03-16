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
import ModalProjetos from "../../../components/Modal/pesquisa/projetos/ModalProjetos";

const TabelasProjetos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("projetos")
      ? JSON.parse(localStorage.getItem("projetos"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (titulo) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.titulo !== titulo);

    setData(newArray);

    localStorage.setItem("projetos", JSON.stringify(newArray));
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
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Título
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Código PROPED
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Situação Atual
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Função
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({titulo, codigoProped, situacaoAtual, funcao}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td maxW="200px">{titulo}</Td>
                  <Td maxW="200px">{codigoProped}</Td>
                  <Td maxW="200px">{situacaoAtual}</Td>
                  <Td maxW="200px">{funcao}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({titulo, codigoProped, situacaoAtual, funcao, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(titulo)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalProjetos
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

export default TabelasProjetos;
