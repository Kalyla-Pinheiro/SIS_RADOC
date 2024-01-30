
import React, { useState } from 'react';
import { Link, Navigate, Route, Routes} from 'react-router-dom';
import './style.css';

import Home from '../Home';

export default function Login() {
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

        

        <div className='caixaLogin'>

          <h1>SISRADOC</h1>


          <div className="inputsLogin">
            <div className="inputUsername">
                <label for="">Username:</label>
                <input type="text" className="username" name="username" placeholder="niceToSeeYou"/>
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

          <button className="btnLogar" >Login</button>

          <div className="linksAlternativos">
            
            <div className="criarConta link">
              
              <Link to="/home">Criar Conta</Link>

            </div>

            <div className='senhaEsquecida link'>  
              <a>Esqueci minha senha</a>
            </div>

          </div>

        </div>

      </main>


      <Routes>
          <Route path="/home" element={<Home />} />
          {/* Outras rotas, se houver */}
      </Routes>
    
    </section>
  );
}
