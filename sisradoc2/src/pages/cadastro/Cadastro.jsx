import React, { useRef, useState } from "react";
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
import TokenFunctions from "../../utils/Token";
import {jwtDecode} from "jwt-decode";
//botão Ocutlta/Mostrar Senha
import { TbEye, TbEyeClosed} from "react-icons/tb";

const Cadastro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    nomeUsuario: "",
    siape: "",
    campus: "",
    classeReferencia: "",
    vinculo: "",
    regimeTrabalho: "",
    titulacao: "",
    email: "",
    confirmarEmail: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const token = TokenFunctions.getToken();

  if (token) {
    const decodedToken = jwtDecode(token);
    formData.nome = decodedToken.name;
    formData.email = decodedToken.email;
    formData.nomeUsuario = decodedToken.given_name;
  }

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
    if (formData.email !== formData.confirmarEmail) {
      ToastifyMessages.warning("Emails não coincidem!");
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
        ToastifyMessages.success("Usuário cadastrado com sucesso!");

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

//botão Mostra/Oculta senha
const inputRef = useRef(null);
const inputRef2 = useRef(null);

const [eyeIsClosed, setEyeState] = useState(false);

const toggleShow = () => {
  if (inputRef.current.type === "password") {
    setEyeState(true)
    inputRef.current.type = "text";
  } else {
    setEyeState(false)
    inputRef.current.type = "password";
  }

  if (inputRef2.current.type === "password") {
    setEyeState(true)
    inputRef2.current.type = "text";
  } else {
    setEyeState(false)
    inputRef2.current.type = "password";
  }
}

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
                placeholder="SIAPE"
                name="siape"
                value={formData.siape}
                onChange={handleChange}
                required
              />
            </div>
            <div className={classes.inputField}>
              <HiOutlineLibrary className={''} />
              <div className={classes.inputFieldCampus}>
                <select
                  className={classes.selectCampus}
                  value={formData.campus}
                  onChange={handleChange}
                  id="campus"
                  name="campus"
                  placeholder="INSTITUTO/CAMPUS"
                  required
                >
                  <option value="">Selecione o Instituto/Campus</option>
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
              <div className={classes.inputFieldClasseReferencia}>
                  <select className={classes.selectClasseReferencia}
                  id="classeReferencia" 
                  name="classeReferencia" 
                  placeholder="Classe e Referencia"
                  value={formData.classeReferencia}
                  onChange={handleChange} 
                  required>
                    <option value="">Selecione a Classe</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
                </div>
            </div>

            <div className={classes.inputField}>
              <HiAcademicCap className="icon" />
              <select className={classes.selectCampos}
              id = "titulacao"
              name = "titulacao"
              placeholder = "Titulação"
              value={formData.titulacao}
              onChange={handleChange}
              required>
                <option value="">Selecione a Titulação</option>
                <option value="Graduacao">Gradução</option>
                <option value="Especializacao">Especialização</option>
                <option value="Mestre">Mestre</option>
                <option value="Doutor">Doutor</option>
              </select>
            </div>
          </div>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <HiBriefcase className="icon" />
              <select className={classes.selectCampos}
              id = "regimeTrabalho"
              name = "regimeTrabalho"
              placeholder = "Regime de Trabalho"
              value={formData.regimeTrabalho}
              onChange={handleChange}
              required>
                <option value="">Selecione o Regime de Trabalho</option>
                <option value="DE">DE</option>
                <option value="20h">20h</option>
                <option value="40h">40h</option>
              </select>
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
              <LiaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Confirmar Email"
                name="confirmarEmail"
                value={formData.confirmarEmail}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <LiaUnlockSolid className="icon" />
              <input
                ref={inputRef}
                type="password"
                placeholder="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <button on onClick={toggleShow}>{eyeIsClosed ? <TbEye /> : <TbEyeClosed/>}</button>
            </div>

            <div className={classes.inputField}>
              <LiaUnlockSolid className="icon" />
              <input
                ref={inputRef2}
                type="password"
                placeholder="Confirme a Senha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
              <button on onClick={toggleShow}>{eyeIsClosed ? <TbEye className="icon"/> : <TbEyeClosed className="icon"/>}</button>
            </div>
          </div>

          <div className={classes.checkboxWrapper}>
            <input type="checkbox" className={classes.concordar} />
            Eu declaro que toda informação inserida é correta e verdadeira.
          </div>

          <div className={classes.botoesFormulario}>
            <button onClick={backClick} className={classes.button} id="voltar">
              Voltar
            </button>

            <button type="submit" className={classes.button}>
              Cadastre-se
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Cadastro;
