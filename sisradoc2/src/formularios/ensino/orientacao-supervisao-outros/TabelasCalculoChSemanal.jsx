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
import ModalCalculoChSemanal from "../../../components/Modal/ensino/orientacao-supervisao-outros/ModalCalculoChSemanal";

const TabelasCalculoChSemanal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("calculo_do_ch_semanal")
      ? JSON.parse(localStorage.getItem("calculo_do_ch_semanal"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (chOrientacaoSemestre1) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.chOrientacaoSemestre1 !== chOrientacaoSemestre1);

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
                    CH Orientação (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Coorientação (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Supervisão (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Preceptoria (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Total (1º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Orientação (2º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Coorientação (2º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Supervisão (2º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Preceptoria (2º Semestre)
                </Th>
                <Th maxW="200px" fontSize="15px" color="#fff">
                    CH Total (2º Semestre)
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({chOrientacaoSemestre1, chCoorientacaoSemestre1, chSupervisaoSemestre1, chPreceptoriaSemestre1, chTotalSemestre1,
                          chOrientacaoSemestre2, chCoorientacaoSemestre2, chSupervisaoSemestre2, chPreceptoriaSemestre2, chTotalSemestre2}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td maxW="200px">{chOrientacaoSemestre1}</Td>
                  <Td maxW="200px">{chCoorientacaoSemestre1}</Td>
                  <Td maxW="200px">{chSupervisaoSemestre1}</Td>
                  <Td maxW="200px">{chPreceptoriaSemestre1}</Td>
                  <Td maxW="200px">{chTotalSemestre1}</Td>
                  <Td maxW="200px">{chOrientacaoSemestre2}</Td>
                  <Td maxW="200px">{chCoorientacaoSemestre2}</Td>
                  <Td maxW="200px">{chSupervisaoSemestre2}</Td>
                  <Td maxW="200px">{chPreceptoriaSemestre2}</Td>
                  <Td maxW="200px">{chTotalSemestre2}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({chOrientacaoSemestre1, chCoorientacaoSemestre1, chSupervisaoSemestre1, chPreceptoriaSemestre1, chTotalSemestre1,
                                     chOrientacaoSemestre2, chCoorientacaoSemestre2, chSupervisaoSemestre2, chPreceptoriaSemestre2, chTotalSemestre2, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(chOrientacaoSemestre1)}
                    />
                  </Td>
                </Tr>
              ))}
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
    </Flex>
  );
};

export default TabelasCalculoChSemanal;
