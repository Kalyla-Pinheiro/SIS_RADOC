import React from "react";
import classes from "../../css-modules/Formulario.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Formulario = () => {
  return (
    <div>
      <Navegacao />

      <div className={classes.formularioContainer}>
        <div className={classes.titulo}>
          <h1>Formulários das Atividades!</h1>
          <h3 className={classes.paragrafos}>
            Na presente página, disponibilizam-se os formulários das atividades
            passíveis de preenchimento. Para preencher uma seção específica,
            basta clicar no botão correspondente a cada atividade. Além disso, é
            possível visualizar a distribuição da carga horária semanal das
            atividades do ano em preenchimento ao clicar no botão "Visualizar
            Distribuição da CH Semanal".
          </h3>
          <h3 className={classes.paragrafos}>
            Ao concluir o preenchimento, clique em "Gerar Radoc" para finalizar
            o preenchimento do ano em questão.
          </h3>
        </div>
        <div>
          <a href="/formulario">
            <button>Gerar Radoc</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
