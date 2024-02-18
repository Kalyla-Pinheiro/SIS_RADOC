import React from "react";
import { useState, useEffect } from 'react';
import api from '../../Api.js'
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
import classes from '../../css-modules/Cadastro.module.css';


const Cadastro = () => {

  const navigate = useNavigate();

  // useEffect(() => {
  //   api.get('cadastro').then(res =>{
  //     console.log(res);
  //   })
  // }, []);


  const backClick = () => {
    navigate("/login");
  }

  return (
    <div className={classes.cadastroContainer}>
      <div className={classes.wrapperCadastro}>
        <form action="">
          <h1>Cadastro</h1>

          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <MdOutlinePermIdentity className="icon" />
              <input type="text" placeholder="Nome Completo" required />
            </div>
            <div className={classes.inputField}>
              <MdOutlinePeopleAlt className="icon" />
              <input type="text" placeholder="Nome de Usuário" required />
            </div>
          </div>
          
          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <MdOutlinePin  className="icon"/>
              <input type="text" placeholder="SIAP " required />
            </div>
            <div className={classes.inputField}>
              <HiOutlineLibrary className="icon" />
              <div className={classes.inputFieldCampus}>
                  <select className={classes.selectCampus}  id="campus" name="Campus" placeholder="CAMPUS/INSTITUTO" required>
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
              <input type="text" placeholder="Classe e Referência" required />
            </div>
            <div className={classes.inputField}>
              <HiOutlineLink className="icon" />
              <input type="text" placeholder="Vinculo" required />
            </div>
          </div>
          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <HiBriefcase className="icon" />
              <input type="text" placeholder="Regime de Trabalho" required />
            </div>
            <div className={classes.inputField}>
              < HiAcademicCap className="icon" />
              <input type="text" placeholder="Titulação" required />
            </div>
          </div>
          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <LiaEnvelope className="icon" />
              <input type="email" placeholder="Email" required />
            </div>
            <div className={classes.inputField}>
              <MdPhone className="icon" />
              <input type="phone" placeholder="Número de Telefone" required />
            </div>
          </div>
        
          <div className={classes.inputBox}>
            <div className={classes.inputField}>
              <LiaUnlockSolid className="icon" />
              <input type="password" placeholder="Senha" required />
            </div>
            <div className={classes.inputField}>
              <LiaUnlockSolid className="icon" />
              <input type="password" placeholder="Confirme a Senha" required />
            </div>
          </div>

          <div className={classes.checkboxWrapper}>
            <input type="checkbox" className={classes.concordar}/>
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
    </div>
  );
};

export default Cadastro;
