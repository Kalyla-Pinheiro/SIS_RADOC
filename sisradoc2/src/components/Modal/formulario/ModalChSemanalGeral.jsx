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
  Box,
} from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { AnoContext } from "../../../utils/AnoContext";

const ModalChSemanalGeral = ({ isOpen, onClose }) => {
  //const [ano, setAno] = useState(dataEdit.ano || "");
  const { ano } = useContext(AnoContext);
  const [Ensino1, setEnsino1] = useState(null);
  const [Ensino2, setEnsino2] = useState(null);
  const [Pesquisa1, setPesquisa1] = useState(null);
  const [Pesquisa2, setPesquisa2] = useState(null);
  const [Extensao1, setExtensao1] = useState(null);
  const [Extensao2, setExtensao2] = useState(null);
  const [Gestao1, setGestao1] = useState(null);
  const [Gestao2, setGestao2] = useState(null);
  const [Total1, setTotal1] = useState(null);
  const [Total2, setTotal2] = useState(null);

  useEffect(() => {
    const jsonDoLocalStorage = localStorage.getItem("ch_semanal_geral");

    if (jsonDoLocalStorage) {
      const objetoJson = JSON.parse(jsonDoLocalStorage);
      setEnsino1(
        parseInt(objetoJson[0].Ensino1) + parseInt(objetoJson[0].Ensino2)
      );
      setEnsino2(
        parseInt(objetoJson[0].Ensino1) + parseInt(objetoJson[0].Ensino2)
      );
      setPesquisa1(
        parseInt(objetoJson[0].Pesquisa1) + parseInt(objetoJson[0].Pesquisa2)
      );
      setPesquisa2(
        parseInt(objetoJson[0].Pesquisa1) + parseInt(objetoJson[0].Pesquisa2)
      );
      setExtensao1(
        parseInt(objetoJson[0].Extensao1) + parseInt(objetoJson[0].Extensao2)
      );
      setExtensao2(
        parseInt(objetoJson[0].Extensao1) + parseInt(objetoJson[0].Extensao2)
      );
      setGestao1(
        parseInt(objetoJson[0].Gestao1) + parseInt(objetoJson[0].Gestao2)
      );
      setGestao2(
        parseInt(objetoJson[0].Gestao1) + parseInt(objetoJson[0].Gestao2)
      );
      setTotal1(
        parseInt(objetoJson[0].Total1) + parseInt(objetoJson[0].Total2)
      );
      setTotal2(
        parseInt(objetoJson[0].Total1) + parseInt(objetoJson[0].Total2)
      );
    }
  }, []);









  

  const localStorageKey = `${ano}`;
  let localStorageData = localStorage.getItem(localStorageKey);
  localStorageData = localStorageData ? JSON.parse(localStorageData) : {};

  const ChAulasLetivas = localStorageData.ChTotalAulasLetivas;
  const ChPedagogicasComplementares = localStorageData.ChTotalPedagogicasComplementares;
  const ChOrientacaoCoorientacao = localStorageData.ChTotalOrientacaoSupervisao;
  const ChMonografiaQualificacao = localStorageData.ChTotalMonografia;


  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));

  let Semestre1Ensino = 0;
  let Semestre2Ensino = 0;

  if (ChAulasLetivas) {
    Semestre1Ensino += ChAulasLetivas["1Semestre"];
    Semestre2Ensino += ChAulasLetivas["2Semestre"];
  }

  if (ChPedagogicasComplementares && ChOrientacaoCoorientacao) {

    if(ChPedagogicasComplementares["1Semestre"] + ChOrientacaoCoorientacao["1Semestre"] > 24) {
      Semestre1Ensino += 24;
    } else {
      Semestre1Ensino += ChPedagogicasComplementares["1Semestre"] + ChOrientacaoCoorientacao["1Semestre"];
    }
    
    if(ChPedagogicasComplementares["2Semestre"] + ChOrientacaoCoorientacao["2Semestre"] > 24) {
      Semestre2Ensino += 24;
    } else {
      Semestre2Ensino += ChPedagogicasComplementares["2Semestre"] + ChOrientacaoCoorientacao["2Semestre"];
    }

  } else if (ChPedagogicasComplementares) {

    if (ChPedagogicasComplementares["1Semestre"] > 24) {
      Semestre1Ensino += 24
    } else {
      Semestre1Ensino += ChPedagogicasComplementares["1Semestre"]
    }

    if (ChPedagogicasComplementares["2Semestre"] > 24) {
      Semestre2Ensino += 24
    } else {
      Semestre2Ensino += ChPedagogicasComplementares["2Semestre"]
    }

  } else if (ChOrientacaoCoorientacao) {

    if (ChOrientacaoCoorientacao["1Semestre"] > 24) {
      Semestre1Ensino += 24
    } else {
      Semestre1Ensino += ChOrientacaoCoorientacao["1Semestre"]
    }

    if (ChOrientacaoCoorientacao["2Semestre"] > 24) {
      Semestre2Ensino += 24
    } else {
      Semestre2Ensino += ChOrientacaoCoorientacao["2Semestre"]
    }

  }

  if (ChMonografiaQualificacao) {

    Semestre1Ensino += ChMonografiaQualificacao["1Semestre"]
    Semestre2Ensino += ChMonografiaQualificacao["2Semestre"]

  }


  const Ch_Pesquisa = localStorageData.ChTotalPesquisa;

    let TodoSemestre1Pesquisa = 0;
    let TodoSemestre2Pesquisa = 0;

    if (Ch_Pesquisa) {
      TodoSemestre1Pesquisa += Ch_Pesquisa["1Semestre"];
      TodoSemestre2Pesquisa += Ch_Pesquisa["2Semestre"];
    }



  const Extensao_AtividadesNaoFormais = localStorageData.ExtensaoChAtividadesnaoFormais;
  const Extensao_EstagioExtensao = localStorageData.ExtensaoChEstagioExtensao;
  const Extensao_OutrasAtividades = localStorageData.ExtensaoChOutrasAtividades;
  

    let TodoSemestre1Extensao = 0;
    let TodoSemestre2Extensao = 0;

    if (Extensao_AtividadesNaoFormais) {
      TodoSemestre1Extensao += Extensao_AtividadesNaoFormais["1Semestre"];
      TodoSemestre2Extensao += Extensao_AtividadesNaoFormais["2Semestre"];
    }

    if (Extensao_EstagioExtensao) {
      TodoSemestre1Extensao += Extensao_EstagioExtensao["ChTotal"]/2;
      TodoSemestre2Extensao += Extensao_EstagioExtensao["ChTotal"]/2;
    }

    if (Extensao_OutrasAtividades) {
      TodoSemestre1Extensao += Extensao_OutrasAtividades["1Semestre"];
      TodoSemestre2Extensao += Extensao_OutrasAtividades["2Semestre"];
    }




  const Ch_Gestao_Representacao = localStorageData.GestãoChTotal;

    let TodoSemestre1Gestao = 0;
    let TodoSemestre2Gestao = 0;

    if (Ch_Gestao_Representacao) {
      TodoSemestre1Gestao += Ch_Gestao_Representacao["1Semestre"];
      TodoSemestre2Gestao += Ch_Gestao_Representacao["2Semestre"];
    }



    const Ch_Outros = localStorageData.ChTotalOutros;

    let TodoSemestre1Outros = 0;
    let TodoSemestre2Outros = 0;

    if (Ch_Outros) {
      TodoSemestre1Outros += Ch_Outros["1Semestre"];
      TodoSemestre2Outros += Ch_Outros["2Semestre"];
    }



    let totalChGeralSemestre1 = Semestre1Ensino + TodoSemestre1Pesquisa + TodoSemestre1Extensao + TodoSemestre1Gestao + TodoSemestre1Outros;
    let totalChGeralSemestre2 = Semestre2Ensino + TodoSemestre2Pesquisa + TodoSemestre2Extensao + TodoSemestre2Gestao + TodoSemestre2Outros;





  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="60rem">
          <ModalHeader textAlign="center" marginTop={10}>
            <h2>Distribuição</h2>
            <h3 style={{ color: "gray" }}>da ch semanal do radoc</h3>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" gap={10} marginBottom={10}>
              <Box
                display="flex"
                flexDirection="column"
                marginTop={6}
                textAlign="center"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  textAlign="center"
                  marginTop={4}
                >
                  <FormLabel textAlign="center">1ºSemestre</FormLabel>
                </Box>
                <Box textAlign="center">
                  <FormLabel marginTop={6} textAlign="center">
                    2ºSemestre
                  </FormLabel>
                </Box>
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Ensino
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={Semestre1Ensino}
                />
                <Input type="text" placeholder="CH" value={Semestre2Ensino} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Pesquisa
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre1Pesquisa}
                />
                <Input type="text" placeholder="CH" value={TodoSemestre2Pesquisa} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Extensao
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre1Extensao}
                />
                <Input type="text" placeholder="CH" value={TodoSemestre2Extensao} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Gestão
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre1Gestao}
                />
                <Input type="text" placeholder="CH" value={TodoSemestre2Gestao} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Outros
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={TodoSemestre1Outros}
                />
                <Input type="text" placeholder="CH" value={TodoSemestre2Outros} />
              </Box>
              <Box>
                <FormLabel textAlign="center" gap={10}>
                  {" "}
                  Total
                </FormLabel>
                <Input
                  marginBottom={4}
                  type="text"
                  placeholder="CH"
                  value={totalChGeralSemestre1}
                  style={{ color: totalChGeralSemestre1 > 40 ? 'red' : 'inherit' }}
                />
                <Input type="text" placeholder="CH" value={totalChGeralSemestre2} style={{ color: totalChGeralSemestre2 > 40 ? 'red' : 'inherit' }}/>
              </Box>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalChSemanalGeral;
