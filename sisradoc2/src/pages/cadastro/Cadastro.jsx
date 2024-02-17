import React from "react";
import "./Cadastro.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi";
import { HiOutlineLibrary } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import { HiOutlineLink } from "react-icons/hi";
import { MdOutlinePin } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";
import { MdOutlineSip } from "react-icons/md"; //siap testar
import { MdPhone } from "react-icons/md";
import { LiaEnvelope } from "react-icons/lia";
import { LiaUnlockSolid } from "react-icons/lia";

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
              <MdOutlinePermIdentity className="icon" />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Nome de Usuário" required />
              <MdOutlinePeopleAlt className="icon" />
            </div>
          </div>
          
          <div className="input-box">
            <div className="input-field">
              <input type="number" placeholder="SIAP" required />
              <MdOutlinePin  className="icon"/>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Instituto/Campus" required />
              <HiOutlineLibrary className="icon" />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Classe e Referncia" required />
              <HiOutlineIdentification className="icon" />
            </div>
            <div className="input-field">
              <input type="number" placeholder="Vinculo" required />
              <HiOutlineLink className="icon" />
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Regime de Trabalho" required />
              <HiBriefcase className="icon" />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Titulação" required />
              < HiAcademicCap className="icon" />
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="email" placeholder="Email" required />
              <LiaEnvelope className="icon" />
            </div>
            <div className="input-field">
              <input type="number" placeholder="Número de Telefone" required />
              <MdPhone className="icon" />
            </div>
          </div>
        
          <div className="input-box">
            <div className="input-field">
              <input type="password" placeholder="Senha" required />
              <LiaUnlockSolid className="icon" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Confirme a Senha" required />
              <LiaUnlockSolid
               className="icon" />
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
