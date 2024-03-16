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
import ModalDisciplinasMinistradas from "../../../components/Modal/ensino/aulas-letivas/ModalDisciplinasMinistradas";

const TabelasDisciplinasMinistradas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("disciplinas_ministradas")
      ? JSON.parse(localStorage.getItem("disciplinas_ministradas"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (codigo) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.codigo !== codigo);

    setData(newArray);

    localStorage.setItem("disciplinas_ministradas", JSON.stringify(newArray));
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
          <Table mt="0">
            <Thead>
              <Tr>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  Nome
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  Código
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  Curso
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  Nível
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  CH Total
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  Nº De Turmas (Teóricas)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  Nº De Turmas (Práticas)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  CH Por Turma (Teóricas)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  CH Por Turma (Práticas)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  Nome Docente Envolvido
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                  CH Docente Envolvido
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({nome, codigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td maxW="200px">{nome}</Td>
                  <Td maxW="200px">{codigo}</Td>
                  <Td maxW="200px">{curso}</Td>
                  <Td maxW="200px">{nivel}</Td>
                  <Td maxW="200px">{chTotal}</Td>
                  <Td maxW="200px">{numTurmasT}</Td>
                  <Td maxW="200px">{numTurmasP}</Td>
                  <Td maxW="200px">{chPorTurmaT}</Td>
                  <Td maxW="200px">{chPorTurmaP}</Td>
                  <Td maxW="200px">{nomeDocenteEnvolvido}</Td>
                  <Td maxW="200px">{chDocenteEnvolvido}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({nome, codigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(codigo)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalDisciplinasMinistradas
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

export default TabelasDisciplinasMinistradas;
