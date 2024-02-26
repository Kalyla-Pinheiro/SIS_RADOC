import React, { useState } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import PopUp from "../../components/popUp/popUp";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import apiUrls from "../../apis/apiUrls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisciplinasMinistradas = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const notifySuccess = () => toast.success("Arquivo enviado com sucesso!");
  const notifyError = () => toast.error("Arquivo não foi enviado.");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("file", selectedFile);

    try {
      const response = await fetch(apiUrls.disc_ministradas, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      if (response.ok) {
        notifySuccess();
      } 
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div>
      <Navegacao />
      <PopUp />

      <div className={classes.disciplinasMinistradasConteiner}>
        <div className={classes.titulo}>
          <h1>Disciplinas Ministradas</h1>
        </div>

        <form className={classes.campoSubmissaoPDF} action="" method="post" enctype="multipart/form-data">
          <div className={classes.anexarPdfs}>
            <div className={classes.inputsPdfs} id={classes.primeiroInput}>
              <input type="file" accept=".pdf"/>
              <p>Declaração de disciplinas ministradas (PDF)</p>
            </div>
            <div className={classes.inputsPdfs} id={classes.segundoInput}>
              <input type="file" accept=".pdf"/>
              <p>Diarios de turma (PDF)</p>
            </div>
          </div>
          <div className={classes.buttonSubmeterPDF}>
            <button>Submeter PDF</button>
          </div>
        </form>

        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.tituloSemestre}>
            <p>1º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input
              type="text"
              className={classes.ultimoCampoInput}
              placeholder="CH total"
              required
            />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input
              type="text"
              className={classes.ultimoCampoInput}
              placeholder="CH total"
              required
            />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>

        <div className={classes.semestre}>
          <div className={classes.tituloSemestre}>
            <p>2º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input
              type="text"
              className={classes.ultimoCampoInput}
              placeholder="CH total"
              required
            />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Nome" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input
              type="text"
              className={classes.ultimoCampoInput}
              placeholder="CH total"
              required
            />{" "}
            <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>

        <div className={classes.buttons}>
          <a href="/numeroDeTurmasCHporTurma">
            <button>Próximo</button>
          </a>
        </div>
      </div>
      <ToastContainer position="bottom-left"/>
    </div>
  );
};

export default DisciplinasMinistradas;
