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
import ModalPedagogicasComplementares from "../../../components/Modal/ensino/pedagogicas-complementares/ModalPedagogicasComplementares";

const TabelasPedagogicasComplementares = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("pedagogicas_complementares")
      ? JSON.parse(localStorage.getItem("pedagogicas_complementares"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (chGraduacaoSemestre1) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.chGraduacaoSemestre1 !== chGraduacaoSemestre1);

    setData(newArray);

    localStorage.setItem("pedagogicas_complementares", JSON.stringify(newArray));
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
                    CH Graduação (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Pós-graduação (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Total (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Graduação (2º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Pós-graduação (2º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Total (2º Semestre)
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({chGraduacaoSemestre1, chGraduacaoSemestre2, chPosGraduacaoSemestre1, chPosGraduacaoSemestre2, chTotalSemestre1, chTotalSemestre2}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td maxW="200px">{chGraduacaoSemestre1}</Td>
                  <Td maxW="200px">{chPosGraduacaoSemestre1}</Td>
                  <Td maxW="200px">{chTotalSemestre1}</Td>
                  <Td maxW="200px">{chGraduacaoSemestre2}</Td>
                  <Td maxW="200px">{chPosGraduacaoSemestre2}</Td>
                  <Td maxW="200px">{chTotalSemestre2}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({chGraduacaoSemestre1, chGraduacaoSemestre2, chPosGraduacaoSemestre1, chPosGraduacaoSemestre2, chTotalSemestre1, chTotalSemestre2, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(chGraduacaoSemestre1)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalPedagogicasComplementares
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

export default TabelasPedagogicasComplementares;
