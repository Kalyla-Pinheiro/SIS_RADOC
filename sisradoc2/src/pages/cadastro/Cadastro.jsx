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
import TokenFunctions from "../../utils/Token";
import {jwtDecode} from "jwt-decode";
import { useEffect } from "react";

const Cadastro = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    nomeUsuario: "",
    siape: "",
    campus_id: "",
    Disciplina_id: "",
    instituto_id: "",
    verificado: false,
    token_email: "",
    classe: "",
    vinculo: "",
    regimeTrabalho: "",
    titulacao: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  useEffect(() => {
    const token = TokenFunctions.getToken();

    if (token) {
      const decodedToken = jwtDecode(token);
      const { name, email, given_name } = decodedToken;

      // Inicializar o estado formData com os dados do Google
      setFormData((prevFormData) => ({
        ...prevFormData,
        nome: name,
        email: email,
        nomeUsuario: given_name
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
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
        ToastifyMessages.success("Usuário cadastrado com sucesso!");

        setTimeout(() => {
          navigate("/");
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
    navigate("/");
  };

  return (
    <div>
      <div className={classes.ajuste}>
        <div className={classes.cadastroContainer}>
          <div className={classes.wrapperCadastro}>
            <form onSubmit={handleSubmit}>
              <h1>Cadastro</h1>

              <div className={classes.inputBox}>
                <div className={classes.inputField}>
                  <MdOutlinePermIdentity className="iconA" />
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
                  <MdOutlinePeopleAlt className="iconA" />
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
                  <MdOutlinePin className="iconA" />
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
                      value={formData.campus_id}
                      onChange={handleChange}
                      id="campus_id"
                      name="campus_id"
                      placeholder="CAMPUS/INSTITUTO"
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
                  <HiOutlineIdentification className={''} />
                  <div className={classes.inputFieldClasseReferencia}>
                    <select 
                      className={classes.selectClasseReferencia}  
                      value={formData.classe}
                      onChange={handleChange}
                      id="classe" 
                      name="classe" 
                      placeholder="Classe e Referencia" 
                      required
                      >
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
                  <HiOutlineLink className={''} />
                  {/*<input type="text" placeholder="Vinculo" required />*/}
                  <div className={classes.inputFieldVinculo}>
                    <select 
                      className={classes.selectVinculo}  
                      value={formData.vinculo}
                      onChange={handleChange}
                      id="vinculo" 
                      name="vinculo" 
                      placeholder="Vinculo" 
                      required
                      >
                        <option value="">Selecione o Vinculo</option>
                        <option value="Estatuario">Estatutário</option>
                      </select>
                  </div>
                </div>
              </div>

              <div className={classes.inputBox}>
                <div className={classes.inputField}>
                  <HiBriefcase className={''} />
                  <select 
                  className={classes.selectRegimeTrabalho}
                  value={formData.regimeTrabalho}
                  onChange={handleChange}
                  id = "regimeTrabalho"
                  name = "regimeTrabalho"
                  placeholder = "Regime de Trabalho"
                  required
                  >
                    <option value="">Selecione o Regime de Trabalho</option>
                    <option value="DE">DE</option>
                    <option value="20h">20h</option>
                    <option value="40h">40h</option>
                  </select>
                </div>

              <div className={classes.inputField}>
                <HiAcademicCap className={''} />
                <div className={classes.inputFieldTitulacao}>
                  <select 
                  className={classes.selectTitulacao}
                  value={formData.titulacao}
                  onChange={handleChange}
                  id = "titulacao"
                  name = "titulacao"
                  placeholder = "Titulação"
                  required
                  >
                    <option value="">Selecione a Titulação</option>
                    <option value="Graduacao">Gradução</option>
                    <option value="Especializacao">Especialização</option>
                    <option value="Mestre">Mestre</option>
                    <option value="Doutor">Doutor</option>
                  </select>
                  </div>
                </div>
              </div>

              <div className={classes.inputBox}>
                <div className={classes.inputField}>
                  <LiaEnvelope className="iconA" />
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
                  <MdPhone className="iconA" />
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
                  <LiaUnlockSolid className="iconA" />
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
                  <LiaUnlockSolid className="iconA" />
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
      </div>
    </div>
  );
};

export default Cadastro;
