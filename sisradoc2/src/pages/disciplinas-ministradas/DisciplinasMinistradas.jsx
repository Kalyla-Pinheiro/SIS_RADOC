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
  const [pdfDisciplinas, setPdfDisciplinas] = useState(null);
  const [pdfDiarios, setPdfDiarios] = useState(null);
  const notifySuccess = () => toast.success("Arquivo enviado com sucesso!");
  const notifyError = () => toast.error("Arquivo não foi enviado.");

  const handlepdfDisciplinasChange = (event) => {
    setPdfDisciplinas(event.target.files[0]);
  };

  const handleDisciplinasMinistradas = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("file", pdfDisciplinas);

    try {
      const response = await fetch(apiUrls.disc_ministradas, {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      });

      if (response.ok) {
        notifySuccess();
        console.log(response.json());
      }
    } catch (error) {
      notifyError();
    }
  };

  const handleDiarioDeTurma = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("file", pdfDiarios);

    try {
      const response = await fetch(apiUrls.diario_turma, {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
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

        <div className={classes.formulariosPDF}>
          <form
            className={classes.campoSubmissaoPDF}
            action=""
            method="post"
            encType="multipart/form-data"
            onSubmit={handleDisciplinasMinistradas}>
            <div className={classes.anexarPdfs}>
              <div className={classes.inputsPdfs} id={classes.primeiroInput}>
                <input 
                type="file" 
                accept=".pdf" 
                onChange={handlepdfDisciplinasChange}
                />
                <p>Declaração de disciplinas ministradas (PDF)</p>
              </div>
            </div>
            <div className={classes.buttonSubmeterPDF}>
              <button type="submit">Submeter PDF</button>
            </div>
          </form>

          <form
            action=""
            method="post"
            encType="multipart/form-data"
            onSubmit={handleDiarioDeTurma}
            className={classes.campoSubmissaoPDF}
            >
            <div className={classes.anexarPdfs}>
              <div className={classes.inputsPdfs} id={classes.segundoInput}>
                <input type="file" accept=".pdf" value={pdfDiarios} />
                <p>Diarios de turma (PDF)</p>
              </div>
            </div>

            <div className={`${classes.buttonSubmeterPDF} ${classes.secondButton}`}>
              <button>Submeter PDF</button>
            </div>

          </form>
        </div>

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
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default DisciplinasMinistradas;
