import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="wrapper-home">
        <div className="campos">
            <div className="item-campos" id="primeiro-campo">
                <h1>Ensino</h1>
            </div>
            <div className="item-campos">
                <h1>Pesquisa</h1>
            </div>
            <div className="item-campos">
                <h1>Extensão</h1>
            </div>
            <div className="item-campos">
                <h1>Gestão</h1>
            </div>
            <div className="item-campos" id="ultimo-campo">
                <h1>Outros</h1>
            </div>
        </div>

        <div className="campo-preenchimento">
            <h1>Campo de preenchimento</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;