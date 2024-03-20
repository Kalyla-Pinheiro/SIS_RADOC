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
          <a className={classes.opcaoPesquisa} type="button" href="/pesquisa/livros-e-verbetes-publicados">
            Livros e Verbetes Publicados
          </a>
          <a className={classes.opcaoPesquisa} type="button" href="/pesquisa/trabalhos-e-resumos-publicados-ou-apresentados">
            Trabalhos Publicados e/ou Apresentados
          </a>
          <a className={classes.opcaoPesquisa} type="button" href="/pesquisa/outras-atividades-de-pesquisa-e-producao-intelectual">
            Outras Atividades de Produção Intelectual
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pesquisa;
