import React from "react";
import classes from "../../css-modules/emailConfirmar.module.css";
import { ToastContainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import TokenFunctions from "../../utils/Token";
import { useEffect, useState } from "react";

const EmailConfirmar = () => {
  return (
    <div className={classes.emailContainer}>
      <div className={classes.titulo}>
        <h1>Confirmar Email</h1>
      </div>
      <div>
        <h2 className={classes.paragrafos}>
          Por favor, verifique sua caixa de entrada e clique no link de
          confirmação para ativar sua conta. Se não encontrar o email, verifique
          sua pasta de spam ou clique em "Reenviar Email".
        </h2>
        <h2 className={classes.email}> Email: xxxxxxxxxxxxxxxxxxxxx</h2>
      </div>

      <div className={classes.botao}>
        <div>
          <a href="/cadastro">
            <button>Voltar</button>
          </a>
        </div>
        <div>
          <button>Reenviar Email</button>
        </div>
      </div>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default EmailConfirmar;
