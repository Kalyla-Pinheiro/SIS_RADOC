
import React, { useState } from 'react';
import { Link, Navigate, Route, Routes} from 'react-router-dom';
import './style.css';

import Home from '../Home';

export default function Cadastro() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [buttonImage, setButtonImage] = useState('/imagens/olho-Fechado.png');


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setButtonImage(showPassword ? '/imagens/olho-Fechado.png' : '/imagens/olho-Aberto.png');
  };



  return (
    <section className='principal'>
      <main className='geral'>

        <div className='divImgLogin'>
          <img src='/imagens/imagem-documento.svg'></img>
        </div>

        

        <div className='caixaCadastro'>

          <h1>Cadastro - SISRADOC</h1>


          <div className="inputsCadastro">
            <div className="inputNome">
                <label for="">Nome:</label>
                <input type="text" className="nome" name="nome" placeholder="Nome do docente"/>
            </div>

            <div className="inputCargo">
                <label for="">Cargo:</label>
                <input type="text" className="Cargo" name="Cargo" placeholder="Cargo do docente"/>
            </div>

            <div className="inputCampus">
                <label for="">Campus:</label>
                <input type="text" className="Campus" name="Campus" placeholder="Campus do docente"/>
            </div>

            <div className="inputCurso">
                <label for="">Curso:</label>
                <input type="text" className="Curso" name="Curso" placeholder="Curso que o docente participa"/>
            </div>

            <div className="inputEmail">
                <label for="">Email:</label>
                <input type="text" className="Email" name="Email" placeholder="Email do docente"/>
            </div>

            <div className="inputSenha">
                <label htmlFor="password">Senha:</label>

                <div className="barraSenha">

                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="senha"
                    name="password"
                    placeholder="Shhh..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button type="button" className='btnSenha' onClick={toggleShowPassword}>
                    <img src={buttonImage} alt="Mostrar Senha" />
                  </button>

                </div>

            </div>

          </div>

          <button className="btnLogar" >Cadastro</button>

          

        </div>

      </main>


      <Routes>
          <Route path="/home" element={<Home />} />
          {/* Outras rotas, se houver */}
      </Routes>
    
    </section>
  );
}
