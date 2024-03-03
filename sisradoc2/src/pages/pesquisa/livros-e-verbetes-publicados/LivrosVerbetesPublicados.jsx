import React from "react";
import classes from "../../../css-modules/Pesquisa.module.css";
import Navegacao from "../../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const LivrosVerbetesPublicados = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.pesquisaContainer}>
        <div className={classes.titulo}>
            <h1>Livros e Verbetes Publicados</h1>
        </div>

        <form className={classes.campoSubmissaoPDF} action="" method="post" encType="multipart/form-data">
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs}>
              <input type="file" accept=".pdf"/>
              <p>Campo de submissão (PDF)</p>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </div>
        </form>

        <div className={classes.tituloCampoLVP}>
          <p>Informações dos livros, capítulos e verbetes</p>
        </div>

        <div className={classes.camposPreenchimento}>

          <div className={classes.camposPreenchimentoDivFlex}>
            <input type="text" placeholder="Título" id={classes.campoPreenchimentoTitulo}/>
            <BsQuestionCircleFill className={classes.icon} />
          </div>

          <div className={classes.camposPreenchimentoDivFlex}>

            <div className={classes.camposPreenchimentoDivColumn} id={classes.colunaMae1}>
              <div className={classes.camposPreenchimentoDivFlex}>
                <input type="text" placeholder="Subtítulo" id={classes.inputLargo}/>
                <BsQuestionCircleFill className={classes.icon} />
              </div>
              <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                <input type="text" placeholder="Autor" id={classes.inputLargo}/>
                <BsQuestionCircleFill className={classes.icon} />
              </div>

              <div className={classes.camposPreenchimentoDivFlex}>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                  <input type="text" placeholder="Página Inicial"/> 
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                  <input type="text" placeholder="Página Final"/> 
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
              </div>
            </div>

            <div className={classes.camposPreenchimentoDivFlex} id={classes.colunaMae2}>
              <div className={classes.camposPreenchimentoDivColumn}>
                <div className={classes.camposPreenchimentoDivFlex}>
                  <input type="text" placeholder="Editora"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                  <input type="text" placeholder="Nº Volume"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campo}>
                  <input type="text" placeholder="Ano"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
              </div>

              <div className={classes.camposPreenchimentoDivColumn}>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD2}>
                  <input type="text" placeholder="Cidade Publicação"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                  <input type="text" placeholder="Nº Fascículo"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
                <div className={classes.camposPreenchimentoDivFlex} id={classes.campoD}>
                  <input type="text" placeholder="ISBN"/>
                  <BsQuestionCircleFill className={classes.icon} />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className={classes.buttons}>
          <a href="#">
            <button>Salvar</button>
          </a>
        </div>

      </div>

    </div>
  );
};

export default LivrosVerbetesPublicados;