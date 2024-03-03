import React from "react";
import classes from "../../css-modules/Pesquisa.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Pesquisa = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.pesquisaContainer}>
        <div className={classes.titulo}>
          <h1>Pesquisa</h1>
        </div>

        <nav className={classes.opcoesPesquisa}>
          <a className={classes.opcaoPesquisa} type="button" href="#">
            Projetos
          </a>
          <a className={classes.opcaoPesquisa} type="button" href="#">
            Trabalhos, Boletins Técnicos e Outros
          </a>
          <a className={classes.opcaoPesquisa} type="button" href="#">
            Livros e Verbetes Publicados
          </a>
          <a className={classes.opcaoPesquisa} type="button" href="#">
            Trabalhos Publicados E Apresentados
          </a>
          <a className={classes.opcaoPesquisa} type="button" href="#">
            Outras Atividades De Produção Intelectual
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pesquisa;
