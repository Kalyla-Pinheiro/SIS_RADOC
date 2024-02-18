import React from "react";
//import classes from '../../css-modules/Cadastro.module.css';

const NumTurmaCH = () => {

  const navigate = useNavigate();

  // useEffect(() => {
  //   api.get('cadastro').then(res =>{
  //     console.log(res);
  //   })
  // }, []);


  /*const backClick = () => {
    navigate("/login");
  }*/

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

export default NumTurmaCH;
