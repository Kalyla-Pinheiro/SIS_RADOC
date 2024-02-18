import React from "react";
import "./Formulario.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Formulario = () => {
  return (
    <div className="formulario-container">
      <Navegacao />
      
      <div className="conteudo-item">
        Bem vindo, já pode preencher seus formulários!
      </div>
    </div>
  );
};

export default Formulario;