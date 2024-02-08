import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <div className="wrapper-home">
        <h1>RADOC</h1>
        <p>
          O Relatório de Atividades Docente (RADOC) é um documento
          institucional, utilizado não somente para compor os processos de
          progressão/promoção funcional, mas para registrar todas as atividades
          (ensino, pesquisa, extensão e administração) que são realizadas pelos
          docentes da UFRA, além de subsidiar a administração superior na
          aplicação do modelo de alocação de vagas e recursos.
        </p>
        <button>Saiba Mais</button>
      </div>
      <div></div>
    </main>
  );
};

export default Home;
