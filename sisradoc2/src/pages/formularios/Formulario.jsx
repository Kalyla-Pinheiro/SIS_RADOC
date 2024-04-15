import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router
import classes from "../../css-modules/Formulario.module.css";
import ModalChSemanalGeral from "../../components/Modal/formulario/ModalChSemanalGeral";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";
import { AnoContext } from "../../utils/AnoContext";

const Formulario = () => {

  // IDEIA DE GERACÃO DE ITENS NA TELA DE RELATÓRIOS (PARTE 1)
  // -> quando clicarmos no botão "gerar radoc" será criado relatorios: {} no localStorage
  // -> esse json de relatorios irá conter todos os itens presentes na tela de relatórios
  // -> dessa forma, ele irá armazenar 2025: {}

  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGerarRadocClick = () => {
    const localStorageKey = "itens_relatorio";
    const jsonData = {};
    let localStorageData = localStorage.getItem(localStorageKey);

    if (!localStorageData) {
      localStorage.setItem(localStorageKey, JSON.stringify(jsonData));
      localStorageData = {};
      localStorageData[ano] = {};
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
    } else {
      localStorageData = JSON.parse(localStorageData);
      localStorageData[ano] = {};
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
    }
  };

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          background: "#f3ede8",
          fontFamily: "Poppins, sans-serif",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        },
      },
    },
  });

  return (
    <div>
      <div className={classes.formularioContainer}>
        <div className={classes.titulo}>
          <h1>Formulários das Atividades!</h1>
          <h3 className={classes.paragrafos}>
            Na presente página, disponibilizam-se os formulários das atividades
            passíveis de preenchimento. Para preencher uma seção específica,
            basta clicar no botão correspondente a cada atividade. Além disso, é
            possível visualizar a distribuição da carga horária semanal das
            atividades do ano em preenchimento ao clicar no botão "CH Semanal".
          </h3>
          <h3 className={classes.paragrafos}>
            Ao concluir o preenchimento, clique em "Gerar Radoc" para finalizar
            o preenchimento do ano em questão.
          </h3>
        </div>
        <div>
          <nav className={classes.listaNavegacao}>
            <a className={classes.opcaoEnsino} type="button" href="/ensino">
              Ensino
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/pesquisa">
              Pesquisa
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/extensao">
              Extensão
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/gestao">
              Gestão
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/outros">
              Outros
            </a>
          </nav>
        </div>
        <div className={classes.button}>
          <button onClick={onOpen}>CH Semanal</button>

          <Link to="/relatorios">
            <button onClick={handleGerarRadocClick}>Gerar Radoc</button>
          </Link>
        </div>
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalGeral isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Formulario;
