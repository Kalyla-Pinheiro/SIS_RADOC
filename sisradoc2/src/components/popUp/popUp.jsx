import React, { useState } from "react";
import './popUp.css';
import classes from "../../css-modules/Ensino.module.css";
import { BsQuestionCircleFill } from "react-icons/bs";

const PopUp = () => {
    const [exibirPopUp, setExibirPopUp] = useState(true);
    const [exibirPrimeiraDiv, setExibirPrimeiraDiv] = useState(true);

    const handleRegistrarPeriodoClick = () => {
        setExibirPrimeiraDiv(false);
    };

    const handleUtilizarRegistradoClick = () => {
        setExibirPrimeiraDiv(false);
    };

    const fecharPopUp = () => {
        setExibirPopUp(false);
    };

    return (
        <div>
            
                {exibirPopUp && (
                    <div>
                        {exibirPrimeiraDiv ? (
                            <div className="fundoPopUp">
                                <div className="boxPopPrimeiro">
                                    <h1>Atenção</h1>
                                    <p>Antes de registrar suas atividades, é preciso que <span>registre o período</span> que será usado para a <span>referência do RADOC</span> ou utilize um <span>já registrado</span> anteriormente.</p>
                                    <div className="btnsPopPrimeiro">
                                        <button onClick={handleRegistrarPeriodoClick}>Registrar Período</button>
                                        <button>Utilizar Registrado</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="fundoPopUp">
                                <div className="boxPopSegundo">
                                    <h1>Registro de Período</h1>
                                    <p>IDENTIFICAÇÃO DE PERÍODO LETIVO</p>
                                    <input type="text" placeholder="ANO" required className="inputAno"/>
                                    <div className="semestres">
                                        <div className="primeiroSemestre">
                                            <h2>1º Semestre</h2>
                                            <div className="divInput">
                                                <input type="text" placeholder="Nº do Semestre" required /> <BsQuestionCircleFill className="icon" />   
                                            </div>
                                            <div className="divInput">
                                                <input type="text" placeholder="Data de início" required /> <BsQuestionCircleFill className="icon" />   
                                            </div>
                                            <div className="divInput">
                                                <input type="text" placeholder="Data de Fim" required /> <BsQuestionCircleFill className="icon" />   
                                            </div>
                                        </div>
                                        <div className="segundoSemestre">
                                            <h2>2º Semestre</h2>
                                            <div className="divInput">
                                                <input type="text" placeholder="Nº do Semestre" required /> <BsQuestionCircleFill className="icon" />   
                                            </div>
                                            <div className="divInput">
                                                <input type="text" placeholder="Data de início" required /> <BsQuestionCircleFill className="icon" />   
                                            </div>
                                            <div className="divInput">
                                                <input type="text" placeholder="Data de Fim" required /> <BsQuestionCircleFill className="icon" />   
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btnsPopSegundo">
                                        <button onClick={fecharPopUp}>Registrar Período</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        
    );
}

export default PopUp;
