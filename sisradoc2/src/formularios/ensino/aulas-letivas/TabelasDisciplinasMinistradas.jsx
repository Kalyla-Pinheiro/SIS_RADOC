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
import "../../styleFormularios.css";
import { v4 as uuidv4 } from "uuid";

const TabelasDisciplinasMinistradas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const [aulasLetivas, setAulasLetivas] = useState([])

  const handleRemove = (id) => {
    //const newArray = data.filter((item) => item.email !== email);
    const newArray = data.filter(
      (item) => item.id !== id);

    setData(newArray);

    localStorage.setItem("disciplinas_ministradas", JSON.stringify(newArray));
  };
  
  useEffect(() => {
    // Função para lidar com a mudança de armazenamento local
    const manipularMudancaArmazenamento = (event) => {
      // Verificar se a chave que foi alterada é a chave que estamos monitorando
      if (event.key === 'disciplinas_ministradas') {
        // Obter os novos dados do armazenamento local
        const dadosJson = event.newValue;

        console.log("DADOS CARALHO: " + dadosJson);

        // Converter os dados de volta para um array
        const dadosParseados = dadosJson ? JSON.parse(dadosJson) : [];
        
        // Atualizar o estado com os novos dados
        const novasAulasLetivas = dadosParseados.map(linha => ({
          id: linha.id,
          nome: linha.nome,
          codigo: linha.codigo,
          curso: linha.curso,
          nivel: linha.nivel,
          chTotal: linha.chTotal,
          numTurmasT: linha.numTurmasT,
          numTurmasP: linha.numTurmasP,
          chPorTurmaT: linha.chPorTurmaT,
          chPorTurmaP: linha.chPorTurmaP,
          nomeDocenteEnvolvido: linha.nomeDocenteEnvolvido,
          chDocenteEnvolvido: linha.chDocenteEnvolvido,
        }));

        // Atualizar o estado com os novos dados
        setAulasLetivas(novasAulasLetivas);
      }
    };

    // Adicionar um ouvinte para o evento de armazenamento
    window.addEventListener('storage', manipularMudancaArmazenamento);

    // Obter os dados iniciais do armazenamento local
    const dadosIniciais = localStorage.getItem('disciplinas_ministradas');
    
    // Se houver dados iniciais
    if (dadosIniciais) {
      // Converte os dados iniciais de volta para um array
      const dadosIniciaisParseados = JSON.parse(dadosIniciais);

      // Atualiza o estado com os dados iniciais
      setAulasLetivas(dadosIniciaisParseados);
    }

    return () => {
      // Remove o ouvinte para o evento de armazenamento local
      window.removeEventListener('storage', manipularMudancaArmazenamento);
    };
  }, [localStorage.getItem('disciplinas_ministradas')]);

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
                  Nome
                </Th>
                <Th minW="200px" fontSize="15px" color="#fff">
                  Código
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
              {/* {data.map(({id, nome, codigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido}, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td minW="150px" style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{id}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{nome}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{codigo}</Td>
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
                        setDataEdit({id, nome, codigo, curso, nivel, chTotal, numTurmasT, numTurmasP, chPorTurmaT, chPorTurmaP, nomeDocenteEnvolvido, chDocenteEnvolvido, index }),
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
              ))} */}

              { aulasLetivas.map((linha, index) => (
                <Tr key={index} cursor="pointer " color="#fff" _hover={{ bg: "gray.100", color: "#000000" }}>
                  <Td minW="150px" style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{linha.id}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.nome}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.codigo}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.curso}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.nivel}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.chTotal}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.numTurmasT}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.numTurmasP}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.chPorTurmaT}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.chPorTurmaP}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.nomeDocenteEnvolvido}</Td>
                  <Td minW="200px" style={{ wordWrap: 'break-word', maxWidth: 200 }}>{linha.chDocenteEnvolvido}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit(linha),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td >
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(linha.id)}
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
