import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import classesPesquisa from "../../css-modules/Pesquisa.module.css";
import { ChakraProvider, Box} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import paisagem3 from "../imagens/paisagem3.png";
import TabelasSupervisaoPreceptoriaTutoria from "../../formularios/ensino/orientacao-supervisao-outros/TabelasSupervisaoPreceptoriaTutoria";

const SupervisaoAcademica = () => {

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${paisagem3})`,
          fontFamily: "Poppins, sans-serif",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden"
        },
      },
    },
  });

  return (
    <div>
      <Navegacao />

      <div className={classes.orientacaoAcademicaContainer}>
        <div className={classes.titulo}>
          <h1>Supervisão, Preceptoria e/ou Tutoria</h1>
        </div>

        <form className={classesPesquisa.campoSubmissaoPDF} action="" method="post" encType="multipart/form-data">
          <div className={classesPesquisa.anexarPdfs}>
            <div className={classesPesquisa.inputsPdfs}>
              <input type="file" accept=".pdf"/>
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classesPesquisa.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>

          <div className={classes.campoTabelasSemestre} id={classes.tabelasSupervisaoPreceptoriaTutoria}>
            <ChakraProvider theme={theme} resetCSS={false}> 
              <TabelasSupervisaoPreceptoriaTutoria />
            </ChakraProvider>
          </div>

        </div>

        {/*
        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>Informações do Orientando</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Nome Completo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Nome" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Matrícula</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Matrícula" required />
                <input type="text" placeholder="Matrícula" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Curso</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Curso" required />
                <input type="text" placeholder="Curso" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Tipo</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Tipo" required />
                <input type="text" placeholder="Tipo" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>Nível</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="Nível" required />
                <input type="text" placeholder="Nível" required />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.camposInlineOA}>
          <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
            <div className={classes.tituloCampoOA}>
              <p>CH Semanal por Orientando</p>
            </div>
            <div className={classes.campoTeoricasPraticas}>
              <div className={classes.camposTabelaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>1º Semestre</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="CH" required />
                <input type="text" placeholder="CH" required />
              </div>

              <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                <div className={classes.tituloSemestre}>
                  <p>2º Semestre</p>{" "}
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <input type="text" placeholder="CH" required />
                <input type="text" placeholder="CH" required />
              </div>
            </div>
          </div>
        </div>
        */}
        
        <div className={classes.buttonOA}>
            <a href="/OrientacaoAcademica">
                <button>Voltar</button>
            </a>
            <a href="/ChSemanalOrientacao">
                <button id={classes.buttonProximo}>Próximo</button>
            </a>
        </div>

      </div>
    </div>
  );
};

export default SupervisaoAcademica;
