import React from "react";
import classes from "../../css-modules/Pesquisa.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import ModalChSemanalPesquisa from "../../components/Modal/pesquisa/ch-semanal/ModalChSemanalPesquisa";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";
import { BiChevronLeft } from "react-icons/bi";

const Pesquisa = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Navegacao />

      <div className={classes.pesquisaContainer}>
        <div className={classes.tituloEbutton}>
          <div className={classes.btnConteiner}>
            <a href="/formularios">
              <BiChevronLeft className={classes.btnVoltar} />
            </a>
          </div>
          <div className={classes.titulo}>
            <h1>Pesquisa</h1>
          </div>
          <button onClick={onOpen}>CH Semanal</button>
        </div>

        <nav className={classes.opcoesPesquisa}>
          <a
            className={classes.opcaoPesquisa}
            type="button"
            href="Pesquisa/Projetos"
          >
            Projetos
          </a>
          <a
            className={classes.opcaoPesquisa}
            type="button"
            href="Pesquisa/Trabalhos"
          >
            Trabalhos, Boletins Técnicos e Outros
          </a>
          <a
            className={classes.opcaoPesquisa}
            type="button"
            href="/pesquisa/livros-e-verbetes-publicados"
          >
            Livros e Verbetes Publicados
          </a>
          <a
            className={classes.opcaoPesquisa}
            type="button"
            href="/pesquisa/trabalhos-e-resumos-publicados-ou-apresentados"
          >
            Resumos Publicados em Anais de Congressos ou Similares
          </a>
          <a
            className={classes.opcaoPesquisa}
            type="button"
            href="/pesquisa/outras-atividades-de-pesquisa-e-producao-intelectual"
          >
            Outras Atividades de Produção Intelectual
          </a>
        </nav>

        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalPesquisa isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Pesquisa;
