import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import PopUp from "../../components/popUp/popUp"
import { BsQuestionCircleFill } from "react-icons/bs";

const DisciplinasMinistradas = () => {
  return (
    <div>
      <Navegacao/>
      <PopUp/>

      <div className={classes.disciplinasMinistradasConteiner}>
        <div className={classes.titulo}>
          <h1>Disciplinas Ministradas</h1>
        </div>

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
        
        <div className={classes.semestre} id={classes.primeiroSemestre}>
          <div className={classes.tituloSemestre}>
            <p>1º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Código ou Nome" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" className={classes.ultimoCampoInput} placeholder="CH total" required /> <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Código ou Nome" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" className={classes.ultimoCampoInput} placeholder="CH total" required /> <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>

        <div className={classes.semestre}>
          <div className={classes.tituloSemestre}>
            <p>2º Semestre</p>
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Código ou Nome" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" className={classes.ultimoCampoInput} placeholder="CH total" required /> <BsQuestionCircleFill className={classes.icon} />
          </div>
          <div className={classes.camposTabela}>
            <input type="text" placeholder="Código ou Nome" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Sigla do curso" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" placeholder="Nível" required /> <BsQuestionCircleFill className={classes.icon} />
            <input type="text" className={classes.ultimoCampoInput} placeholder="CH total" required /> <BsQuestionCircleFill className={classes.icon} />
          </div>
        </div>

        <div className={classes.buttons}>
          <button>Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default DisciplinasMinistradas;