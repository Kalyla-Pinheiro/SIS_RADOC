
import React, { useState } from 'react';
import { Link, Navigate, Route, Routes} from 'react-router-dom';
import './style.css';

import Home from '../Home';

export default function Form() {
  



  return (
    <section className='principalForm'>
      <main className='geralForm'>

        <header>

          <div className='geralHeader'>
            <h2>SISRADOC</h2>

            <nav>
              <li>
                <ul>Home</ul>
                <ul>Sobre</ul>
                <ul>Conta</ul>
              </li>
            </nav>

            
          </div>

          
        </header>



        {/* <div className='menuEsquerda'>

            <div className='optMenuEsquerda'>
                <h2>Atividade de ensino</h2>
                <p>Concluido</p>
            </div>
            <div className='optMenuEsquerda'>
                <h2>Atividade de gestão</h2>
                <p>50%</p>
            </div>
            <div className='optMenuEsquerda'>
                <h2>Atividade Teste</h2>
                <p>Não preenchido</p>
            </div>

        </div> */}


        <section className='formAtividadeEnsino'>


            <div className='boxForm'>

              <form>

                <div className='formGeral'>

                  <div className='inputsForm'>

                    <div className='divInputInstituto'>

                      <label>1 – INSTITUTO/CAMPUS:</label>
                      <input type="text" className="inputIntituto input" placeholder="Ufra - Belém"/>

                    </div>

                    <div className='divInputNome'>

                      <label>2 – Nome:</label>
                      <input type="text" className="inputNome input" placeholder="Fulano"/>
                      
                    </div>

                    <div className='divInputSiape'>

                      <label>3 – SIAPE:</label>
                      <input type="text" className="inputSiape input" placeholder="- - -"/>
                      
                    </div>

                    <div className='divInputClasseReferencia'>

                      <label>4 – Classe e Referência:</label>

                      
                      <div className='optsClasseReferencia'>

                        <div className='optA'>
                          <input type="radio" id="ClassereferenciaOptA" value="A"/>
                          <label for="age1">A</label>
                        </div>

                        <div className='optB'>
                          <input type="radio" id="ClassereferenciaOptB" value="B"/>
                          <label for="age2">B</label>
                        </div>

                        <div className='optC'>
                          <input type="radio" id="ClassereferenciaOptC" value="C"/>
                          <label for="age3">C</label>
                        </div>

                        <div className='optD'>
                          <input type="radio" id="ClassereferenciaOptD" value="D"/>
                          <label for="age3">D</label>
                        </div>

                        <div className='optE'>
                          <input type="radio" id="ClassereferenciaOptE" value="E"/>
                          <label for="age3">E</label>
                        </div>

                      </div>
                      
                    </div>
                  
                  </div>
                
                </div>

              </form>

            </div>
            

        </section>


        <section className='formAtividadeExtensao'>


            <div className='boxForm'>

              <form>

                <div className='formGeral'>

                  <div className='inputsForm'>

                    <div className='divInputVinculo'>

                      <label>5 – Vínculo:</label>
                      <input type="text" className="inputVinculo input" placeholder="Estatutário"/>

                    </div>

                    <div className='divInputRegimeTrabalho'>

                      <label>6 – Regime de Trabalho:</label>
                      <input type="text" className="inputRegimeTrabalho input" placeholder="20H / 40H"/>
                      
                    </div>
                  
                  </div>
                
                </div>

              </form>

            </div>
            

        </section>


        <div className='divPassarForm'>

          <div className='geralPassarForm'>

            <button className='btnVoltar'>
              <img src='https://cdn-icons-png.flaticon.com/512/271/271218.png'></img>
            </button>

            <div className='divNumeroForm'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

            <button className='btnAvancar'>
              <img src='https://cdn-icons-png.flaticon.com/512/271/271226.png'></img>
            </button>

          </div>

        </div>


      </main>
    </section>
  );
}
