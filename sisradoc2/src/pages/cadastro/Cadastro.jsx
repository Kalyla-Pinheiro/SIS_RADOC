import React from "react";
import "./Cadastro.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

  const navigate = useNavigate();

  const backClick = () => {
    navigate("/login");
  }

  return (
    <div className="cadastro-conteiner">
      <div className="wrapper-cadastro">
        <form action="">
          <h1>Cadastro</h1>

          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Nome Completo" required />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Nome de Usuário" required />
              <FaUser className="icon" />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="email" placeholder="Email" required />
              <MdEmail className="icon" />
            </div>
            <div className="input-field">
              <input type="number" placeholder="Número de Telefone" required />
              <FaPhoneAlt className="icon" />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="password" placeholder="Senha" required />
              <FaLock className="icon" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Confirme a Senha" required />
              <FaLock className="icon" />
            </div>
          </div>

          <label>
            <input type="checkbox" />
            Eu declaro que toda informação inserida é correta e verdadeira.
          </label>

          <button type="submit" className="button">
            Cadastre-se
          </button>

          <button onClick={backClick} className="button" id="voltar">
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
