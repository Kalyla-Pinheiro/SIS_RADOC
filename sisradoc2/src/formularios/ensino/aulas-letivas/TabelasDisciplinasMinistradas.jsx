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
import { useEffect, useState, useContext } from "react";
import ModalDisciplinasMinistradas from "../../../components/Modal/ensino/aulas-letivas/ModalDisciplinasMinistradas";
import "../../styleFormularios.css";
import { AnoContext } from "../../../utils/AnoContext";

const TabelasDisciplinasMinistradas = () => {
  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    // const db_costumer = localStorage.getItem("disciplinas_ministradas")
    //   ? JSON.parse(localStorage.getItem("disciplinas_ministradas"))
    //   : [];

    const db_costumer = JSON.parse(localStorage.getItem(ano))?.disciplinas_ministradas || [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.id !== id);

    setData(newArray);

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.disciplinas_ministradas = newArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

    //localStorage.setItem("disciplinas_ministradas", JSON.stringify(newArray));
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
          <Table mt="0">
            <Thead>
              <Tr>
                <Th minW="150px" fontSize="15px" color="#fff">
                    ID
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Semestre
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Nome - Código
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Curso
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Nível
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Total
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Nº Da Turma (Teórica)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Nº Da Turma (Prática)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Por Turma (Teórica)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Por Turma (Prática)
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Nome Docente Envolvido
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  CH Docente Envolvido
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({id, semestre, nomeCodigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td minW="150px" style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{id}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{semestre}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{nomeCodigo}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{curso}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{nivel}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{chTotal}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{numTurmasT}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{numTurmasP}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{chPorTurmaT}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{chPorTurmaP}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{nomeDocenteEnvolvido}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{chDocenteEnvolvido}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({id, semestre, nomeCodigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido, index }),
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
