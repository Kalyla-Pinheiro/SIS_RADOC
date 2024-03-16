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
import ModalSupervisaoPreceptoriaTutoria from "../../../components/Modal/ensino/orientacao-supervisao-outros/ModalSupervisaoPreceptoriaTutoria";

const TabelasSupervisaoPreceptoriaTutoria = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("supervisao_preceptoria_tutoria")
      ? JSON.parse(localStorage.getItem("supervisao_preceptoria_tutoria"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (nome) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.nome !== nome);

    setData(newArray);

    localStorage.setItem("supervisao_preceptoria_tutoria", JSON.stringify(newArray));
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
                    Nome
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Matrícula
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Curso
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Tipo
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    Nível
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Semanal (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Semanal (2º Semestre)
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({nome, matricula, curso, tipo, nivel, chSemanalSemestre1, chSemanalSemestre2}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td maxW="200px">{nome}</Td>
                  <Td maxW="200px">{matricula}</Td>
                  <Td maxW="200px">{curso}</Td>
                  <Td maxW="200px">{tipo}</Td>
                  <Td maxW="200px">{nivel}</Td>
                  <Td maxW="200px">{chSemanalSemestre1}</Td>
                  <Td maxW="200px">{chSemanalSemestre2}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({nome, matricula, curso, tipo, nivel, chSemanalSemestre1, chSemanalSemestre2, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(nome)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalSupervisaoPreceptoriaTutoria
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

export default TabelasSupervisaoPreceptoriaTutoria;
