import React from "react";
import "./Formulario.css";

const Formulario = () => {
  return (
    <div className="formulario-container">
      <div className="wrapper-formulario">
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

export default Formulario;