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
import ModalOutrasAtividadesProducaoIntelectual from "../../../components/Modal/pesquisa/outras-atividades-de-pesquisa-e-producao-intelectual/ModalOutrasAtividadesPesquisaProducaoIntelectual";
import "../../styleFormularios.css";
import { AnoContext } from "../../../utils/AnoContext";

const TabelasOutrasAtividadesProducaoIntelectual = () => {
  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = JSON.parse(localStorage.getItem(ano))?.outras_atividades_de_pesquisa_e_producao_intelectual || [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    const newArray = data.filter(
      (item) => item.id !== id);

    setData(newArray);

    const localStorageKey = `${ano}`;
    let localStorageData = localStorage.getItem(localStorageKey);
    localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
    localStorageData.outras_atividades_de_pesquisa_e_producao_intelectual = newArray;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
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
              {data.map(({id, link, descricao}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td minW="150px" style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{id}</Td>
                  <Td minW="300px" style={{ wordWrap: 'break-word', maxWidth: 300 }}>{link}</Td>
                  <Td minW="600px" style={{ wordWrap: 'break-word', maxWidth: 600 }}>{descricao}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({id, link, descricao, index }),
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
        <ModalOutrasAtividadesProducaoIntelectual
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

export default TabelasOutrasAtividadesProducaoIntelectual;
