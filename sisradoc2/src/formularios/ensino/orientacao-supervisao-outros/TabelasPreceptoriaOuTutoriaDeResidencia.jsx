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
import "../../styleFormularios.css";
import ModalPreceptoriaOuTutoriaDeResidencia from "../../../components/Modal/ensino/orientacao-supervisao-outros/ModalPreceptoriaOuTutoriaDeResidencia";

const TabelasPreceptoriaOuTutoriaDeResidencia = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("preceptoria_e_ou_tutoria_de_residencia")
      ? JSON.parse(localStorage.getItem("preceptoria_e_ou_tutoria_de_residencia"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.id !== id);

    setData(newArray);

    localStorage.setItem("preceptoria_e_ou_tutoria_de_residencia", JSON.stringify(newArray));
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
      <Box  maxW={1200} w="100%" h="100%" py={10} px={2} paddingTop={5}>
        
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
                    Nome - Matrícula
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                    Tipo
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                    CH Semanal (1º Semestre)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                    CH Semanal (2º Semestre)
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({id, nomeOuMatricula, tipo, chSemanalSemestre1, chSemanalSemestre2}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td minW="150px" style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{id}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{nomeOuMatricula}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{tipo}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{chSemanalSemestre1}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{chSemanalSemestre2}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({id, nomeOuMatricula, tipo, chSemanalSemestre1, chSemanalSemestre2, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(id)}
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
    </Flex>
  );
};

export default TabelasPreceptoriaOuTutoriaDeResidencia;
