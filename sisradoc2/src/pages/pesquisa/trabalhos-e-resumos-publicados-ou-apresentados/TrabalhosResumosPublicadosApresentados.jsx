import React, { useState } from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ChakraProvider, Box, useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import TabelasTrabalhosResumosPublicadosApresentados from "../../../formularios/pesquisa/trabalhos-resumos-publicados-apresentados/TabelasTrabalhosResumosPublicadosApresentados";
import { ToastifyMessages } from "../../../utils/ToastifyMessages";
import { ToastContainer } from "react-toastify";

const TrabalhosResumosPublicadosApresentados = () => {

  const [pdfTrabalhosResumosPublicadosApresentados, setPdfTrabalhosResumosPublicadosApresentados] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlepdfTrabalhosResumosPublicadosApresentadosChange = (event) => {
    setPdfTrabalhosResumosPublicadosApresentados(event.target.files[0]);
  };

  const handleTrabalhosResumosPublicadosApresentados = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", pdfTrabalhosResumosPublicadosApresentados);
    
    if (pdfTrabalhosResumosPublicadosApresentados === null) {
      ToastifyMessages.warning(
        "Campo vazio, por favor selecione um PDF para submeter!"
      );
    }
    
  }

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
        <div className={classes.titulo} id={classes.tituloMargin}>
          <h1>Trabalhos e Resumos Publicados ou Apresentados</h1>
        </div>

        <form
          className={classes.campoSubmissaoPDF}
          action=""
          method=""
          encType="multipart/form-data"
          onSubmit={handleTrabalhosResumosPublicadosApresentados}
        >
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf" onChange={handlepdfTrabalhosResumosPublicadosApresentadosChange}/>
              <p>Documento Comprobatório (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit" onClick={handleTrabalhosResumosPublicadosApresentados}>Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.areaPreenchimento}>
          <div
            className={classes.campoTabelasSemestre}
            id={classes.tabelasResumosPublicadosApresentados}
          >
            <ChakraProvider theme={theme} resetCSS={false}>
              <TabelasTrabalhosResumosPublicadosApresentados />
            </ChakraProvider>
          </div>
        </div>

        {/*
        <div className={classes.tituloCampoLVP}>
          <p>Informações dos trabalhos/resumos</p>
        </div>

        <div className={classes.camposPreenchimento}>

          <div className={classes.camposPreenchimentoDivFlex}>
            <input type="text" placeholder="Título" id={classes.campoPreenchimentoTitulo}/>
            <BsQuestionCircleFill className={classes.icon} />
          </div>

            <div className={classes.camposPreenchimentoDivColumn}>

                <div className={classes.camposPreenchimentoDivFlex}>
                    <div className={classes.camposPreenchimentoDivColumn} id={classes.colunaMae1}>
                        <div className={classes.camposPreenchimentoDivFlex}>
                            <input type="text" placeholder="Título da Publicação do Evento" id={classes.inputLargo}/>
                            <BsQuestionCircleFill className={classes.icon} />
                        </div>
                        <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                            <input type="text" placeholder="Autor" id={classes.inputLargo}/>
                            <BsQuestionCircleFill className={classes.icon} />
                        </div>

                        <div className={classes.camposPreenchimentoDivFlex}>
                            <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                                <input type="text" placeholder="Nº Páginas"/> 
                                <BsQuestionCircleFill className={classes.icon} />
                            </div>
                            <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                                <input type="text" placeholder="Nº Volume"/> 
                                <BsQuestionCircleFill className={classes.icon} />
                            </div>
                        </div>
                    </div>

                    <div className={classes.camposPreenchimentoDivColumn} id={classes.colunaMae2}>
                        <div className={classes.camposPreenchimentoDivFlex}>
                            <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD2}>
                                <input type="text" placeholder="Editora"/> 
                                <BsQuestionCircleFill className={classes.icon} />
                            </div>
                            <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD2}>
                                <input type="text" placeholder="Cidade do Evento"/> 
                                <BsQuestionCircleFill className={classes.icon} />
                            </div>
                        </div>

                        <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                            <input type="text" placeholder="Título em Algarismo Arábico" id={classes.inputLargo}/>
                            <BsQuestionCircleFill className={classes.icon} />
                        </div>

                        <div className={classes.camposPreenchimentoDivFlex}>
                            <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                                <input type="text" placeholder="Ano"/> 
                                <BsQuestionCircleFill className={classes.icon} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.camposPreenchimentoDivColumn} id={classes.checkboxsCampos}>
                    <div className={classes.tituloCheckbox}>
                        <p>Tipo:</p>
                    </div>
                    <div className={classes.camposPreenchimentoDivFlex} id={classes.checkboxs}>
                        <div className={classes.camposPreenchimentoDivFlex}>
                            <input type="checkbox" id={classes.checkbox}/>
                            <label>Resumo</label>
                        </div>

                        <div className={classes.camposPreenchimentoDivFlex} id={classes.checkboxRight}>
                            <input type="checkbox" id={classes.checkbox}/>
                            <label>Resumo Expandido</label>
                        </div>

                        <div className={classes.camposPreenchimentoDivFlex} id={classes.checkboxRight}>
                            <input type="checkbox" id={classes.checkbox}/>
                            <label>Artigo Completo</label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        */}

        <div className={classes.buttons} id={classes.buttonSalvarTRPA}>
          <a href="#">
            <button>Salvar</button>
          </a>
        </div>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default TrabalhosResumosPublicadosApresentados;
