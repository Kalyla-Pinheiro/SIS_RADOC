import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Box,
  } from "@chakra-ui/react";
  import { useState, useContext } from "react";
  import { v4 as uuidv4 } from "uuid";
  import { AnoContext } from "../../../../utils/AnoContext";
  
  const ModalQualificacaoDissertacaoTese = ({
    data,
    setData,
    dataEdit,
    isOpen,
    onClose
  }) => {

    const { ano } = useContext(AnoContext);

    //treco

    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
    const [tipo, setTipo] = useState(dataEdit.tipo || "");
    const [chSemanalSemestre1, setChSemanalSemestre1] = useState(dataEdit.chSemanalSemestre1 || "");  
    const [chSemanalSemestre2, setChSemanalSemestre2] = useState(dataEdit.chSemanalSemestre2 || "");
  
    const handleSave = () => {
      //if (!nome || !tituloDoTrabalho || !ies || !tipo || !chSemanalSemestre1 || !chSemanalSemestre2) return;

      const newItem = {
        id: uuidv4(), 
        descricao,
        tipo, 
        chSemanalSemestre1, 
        chSemanalSemestre2
      };
  
      const newDataArray = Object.keys(dataEdit).length
        ? data.map((item) => (item.id === dataEdit.id ? newItem : item))
        : [...data, newItem];

      const localStorageKey = `${ano}`;
      let localStorageData = localStorage.getItem(localStorageKey);
      localStorageData = localStorageData ? JSON.parse(localStorageData) : {};
      localStorageData.monografia_qualificacao_dissertacao_tese = newDataArray;
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
  
      //localStorage.setItem("qualificacao_dissertacao_tese", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };  



    const handleSelectChange = (e) => {
      const selectedTipo = e.target.value;
      setTipo(selectedTipo);
      
      // Definindo os valores máximos dos inputs com base no tipo selecionado
      if (selectedTipo === "TCC" || selectedTipo === "Monografia") {
        setChSemanalSemestre1("1");
        setChSemanalSemestre2("0.5");
      } else {
        setChSemanalSemestre1("");
        setChSemanalSemestre2("");
      }
    };

    
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro dos dados</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Descrição</FormLabel>
                  <Input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Tipo</FormLabel>
                  {/* <Input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  /> */}

                  <Select
                    name="Nivel"
                    placeholder="Selecione o nível"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  >
                    <option>DISSERTAÇÃO</option>
                    <option>TESE</option>
                    <option>TCC</option>
                    <option>MONOGRAFIA</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel>CH Semanal (1º Semestre)</FormLabel>
                  <Input
                    type="number"
                    value={chSemanalSemestre1}
                    onChange={(e) => setChSemanalSemestre1(e.target.value)}
                    min={0}
                    // max={tipo === "TCC" || tipo === "MONOGRAFIA" ? "1" : "0.5"}
                    placeholder={tipo === "TCC" || tipo === "MONOGRAFIA" ? "Máximo 1" : tipo === "DISSERTAÇÃO" || tipo === "TESE" ? "Máximo 0.5" : ""}

                  />
                </Box>
                <Box>
                  <FormLabel>CH Semanal (2º Semestre)</FormLabel>
                  <Input
                    type="number"
                    value={chSemanalSemestre2}
                    onChange={(e) => setChSemanalSemestre2(e.target.value)}
                    min={0}
                    // max={tipo === "TCC" || tipo === "MONOGRAFIA" ? "1" : "0.5"}
                    placeholder={tipo === "TCC" || tipo === "MONOGRAFIA" ? "Máximo 1" : tipo === "DISSERTAÇÃO" || tipo === "TESE" ? "Máximo 0.5" : ""}

                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalQualificacaoDissertacaoTese;
  