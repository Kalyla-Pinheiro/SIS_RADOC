import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineIdentification,
  HiOutlineLibrary,
  HiAcademicCap,
  HiBriefcase,
  HiOutlineLink,
} from "react-icons/hi";
import {
  MdOutlinePin,
  MdOutlinePeopleAlt,
  MdOutlinePermIdentity,
} from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { LiaEnvelope, LiaUnlockSolid } from "react-icons/lia";
import classes from "../../css-modules/Cadastro.module.css";
//import AuthFunctions from "../../utils/Auth";
import { ToastContainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import apiurls from "../../apis/apiUrls";

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    nomeUsuario: "",
    siap: "",
    campus: "",
    classeReferencia: "",
    vinculo: "",
    regimeTrabalho: "",
    titulacao: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      ToastifyMessages.warning("Senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch(apiurls.cadastro, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        ToastifyMessages.sucess("Usuário cadastrado com sucesso!");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (response.status === 409) {
        ToastifyMessages.error("Usuário já cadastrado!");
      }
    } catch (error) {
      ToastifyMessages.error(
        "Erro ao cadastrar usuário. Por favor, tente novamente."
      );
    }
  };

  const backClick = () => {
    navigate("/login");
  };

  return (
    <div className={classes.cadastroContainer}>
      <div className={classes.wrapperCadastro}>
        <form onSubmit={handleSubmit}>
          <h1>Cadastro</h1>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <MdOutlinePermIdentity className="icon" />
              <input
                type="text"
                placeholder="Nome Completo"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputField}>
              <MdOutlinePeopleAlt className="icon" />
              <input
                type="text"
                placeholder="Nome de Usuário"
                name="nomeUsuario"
                value={formData.nomeUsuario}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <MdOutlinePin className="icon" />
              <input
                type="text"
                placeholder="SIAP"
                name="siap"
                value={formData.siap}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputField}>
              <HiOutlineLibrary className="icon" />
              <div className={classes.inputFieldCampus}>
                <select
                  className={classes.selectCampus}
                  value={formData.campus}
                  onChange={handleChange}
                  id="campus"
                  name="campus"
                  placeholder="CAMPUS/INSTITUTO"
                  required
                >
                  <option value="">Selecione o campus</option>
                  <option value="ICA">ICA</option>
                  <option value="ICIBE">ICIBE</option>
                  <option value="ISARH">ISARH</option>
                  <option value="CAPANEMA">CAPANEMA</option>
                  <option value="CAPITÃO-POÇO">CAPITÃO-POÇO</option>
                  <option value="PARAGOMINAS">PARAGOMINAS</option>
                  <option value="PARAUAPEBAS">PARAUAPEBAS</option>
                  <option value="TOMÉ-AÇU">TOMÉ-AÇU</option>
                </select>
              </div>
            </div>
          </div>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <HiOutlineIdentification className="icon" />
              <input
                type="text"
                placeholder="Classe e Referência"
                name="classeReferencia"
                value={formData.classeReferencia}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputField}>
              <HiOutlineLink className="icon" />
              <input
                type="text"
                placeholder="Vínculo"
                name="vinculo"
                value={formData.vinculo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <HiBriefcase className="icon" />
              <input
                type="text"
                placeholder="Regime de Trabalho"
                name="regimeTrabalho"
                value={formData.regimeTrabalho}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputField}>
              <HiAcademicCap className="icon" />
              <input
                type="text"
                placeholder="Titulação"
                name="titulacao"
                value={formData.titulacao}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <LiaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputField}>
              <MdPhone className="icon" />
              <input
                type="phone"
                placeholder="Número de Telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <LiaUnlockSolid className="icon" />
              <input
                type="password"
                placeholder="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputField}>
              <LiaUnlockSolid className="icon" />
              <input
                type="password"
                placeholder="Confirme a Senha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={classes.checkboxWrapper}>
            <input type="checkbox" className={classes.concordar} />
            Eu declaro que toda informação inserida é correta e verdadeira.
          </div>

          <div className={classes.botoesFormulario}>
            <button type="submit" className={classes.button}>
              Cadastre-se
            </button>

            <button onClick={backClick} className={classes.button} id="voltar">
              Voltar
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Cadastro;
