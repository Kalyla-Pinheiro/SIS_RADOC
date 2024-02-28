import React, { useState } from "react";
import { useEffect } from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import PopUp from "../../components/popUp/popUp";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import apiUrls from "../../apis/apiUrls";
import { ToastContainer, toast } from "react-toastify";
import {ToastifyMessages} from "../../utils/ToastifyMessages";

const DisciplinasMinistradas = () => {
  const [pdfDisciplinas, setPdfDisciplinas] = useState(null);
  // Variável de estado para armazenar o arquivo PDF de diários de turma
  const [pdfDiarios, setPdfDiarios] = useState(null);
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  

  const handlepdfDisciplinasChange = (event) => {
    setPdfDisciplinas(event.target.files[0]);
  };

  const handlepdfDiariosChange = (event) => {
    setPdfDiarios(event.target.files[0]);
  }

  const handleDisciplinasMinistradas = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("file", pdfDisciplinas);

    try {
      const response = await fetch(apiUrls.disc_ministradas, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        ToastifyMessages.sucess("PDF submetido com sucesso");
        console.log(response.json());
      }
    } catch (error) {
      ToastifyMessages.error("Erro ao submeter PDF");
    }
  };

  const handleDiarioDeTurma = async (event) => {
    event.preventDefault(); // Evitar que a página recarregue durante a submissão do formulário

    const formData = new FormData(); // Criação de um objeto FormData para enviar um arquivo PDF

    formData.append("file", pdfDiarios); // Adicionando o arquivo PDF ao objeto FormData

    // Validação de campos vazios
    if (pdfDiarios === null){
      ToastifyMessages.warning("Campo vazio, por favor selecione um PDF para submeter!")
    }

    // Requisição POST para a submissão do PDF para a API
    try {
      const response = 
      await fetch(apiUrls.diario_de_turma, {
        method: "POST",
        body: formData,
      })

      // Se a resposta da requisição for bem sucedida (200)
      if (response.ok) {
        ToastifyMessages.sucess("PDF submetido com sucesso");

        // Converte a resposta da requisição para JSON para que possamos manipular as chaves e valores do objeto de resposta
        response.json()
        // Then é uma função que é executada após a promessa ser resolvida
        .then(data => {
          // Atribuir o valor da chave do objeto de resposta no estado "nome"
          console.log(data) // Consolando o objeto de resposta
          console.log(data.wordsFound) // Consolando a chave "wordsFound" do objeto de resposta
          console.log(data.wordsFound.Centro[0]) // Consolando o valor da chave "Centro" do objeto de resposta "wordsFound"
          setNome(data.wordsFound.Disciplina[0])
          setSigla(data.wordsFound.Código[0])
        })
      }

    } catch (error) {
      ToastifyMessages.error("Erro ao submeter PDF");
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
          <form className={classes.campoSubmissaoPDF} 
          action="" 
          method="post" 
          encType="multipart/form-data" 
          onSubmit={handleDisciplinasMinistradas}
          >
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

          <form action="" 
          method="post" 
          encType="multipart/form-data" 
          onSubmit={handleDiarioDeTurma} 
          className={classes.campoSubmissaoPDF}>
            <div className={classes.anexarPdfs}>
              <div className={classes.inputsPdfs} id={classes.segundoInput}>
                <input 
                type="file" 
                accept=".pdf" 
                onChange={handlepdfDiariosChange}
                />
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
            <input 
            className="nomePrimeiroSemestre" 
            type="text" 
            placeholder="Nome"
            value={nome}
            readOnly
            />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input 
            className="siglaPrimeiroSemestre" 
            type="text"
            value={sigla} 
            placeholder="Sigla do curso" 
            readOnly />{" "}
            <BsQuestionCircleFill className={classes.icon} />
            <input 
              className="chPrimeiroSemestre" 
              type="text" 
              placeholder="Nível" 
              required />{" "}
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
