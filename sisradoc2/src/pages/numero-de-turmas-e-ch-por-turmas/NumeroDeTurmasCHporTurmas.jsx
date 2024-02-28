import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import Navegacao from "../../components/Navegação/Navegacao";
import { BsQuestionCircleFill } from "react-icons/bs";

const NumeroDeTurmasCHporTurmas = () => {
    return (
        <div>
            <Navegacao/>

            <div className={classes.ensinoContainer}>

                <div className={classes.areaTituloSemestresNCH}>
                    <div className={classes.tituloSemestreNCH}>
                        <h2>Número de Turmas</h2>
                    </div>
                    <div className={classes.semestresInlineNCH}>
                        <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
                            <div className={classes.tituloSemestre}>
                                <p>1º Semestre</p>
                            </div>
                            <div className={classes.campoTeoricasPraticas}>
                                <div className={classes.camposTabelaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Teóricas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="Nº da Turma" required /> 
                                    <input type="text" placeholder="Nº da Turma" required />
                                </div>

                                <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Práticas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="Nº da Turma" required /> 
                                    <input type="text" placeholder="Nº da Turma" required />
                                </div>
                            </div>
                        </div>

                        <div className={classes.semestreNCH} id={classes.segundoSemestreNCH}>
                            <div className={classes.tituloSemestre}>
                                <p>2º Semestre</p>
                            </div>
                            <div className={classes.campoTeoricasPraticas}>
                                <div className={classes.camposTabelaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Teóricas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="Nº da Turma" required /> 
                                    <input type="text" placeholder="Nº da Turma" required />
                                </div>

                                <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Práticas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="Nº da Turma" required /> 
                                    <input type="text" placeholder="Nº da Turma" required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.areaTituloSemestresNCH}>
                    <div className={classes.tituloSemestreNCH}>
                        <h2>CH por Turma</h2>
                    </div>
                    <div className={classes.semestresInlineNCH}>
                        <div className={classes.semestreNCH} id={classes.primeiroSemestreNCH}>
                            <div className={classes.tituloSemestre}>
                                <p>1º Semestre</p>
                            </div>
                            <div className={classes.campoTeoricasPraticas}>
                                <div className={classes.camposTabelaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Teóricas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="CH por Turma" required /> 
                                    <input type="text" placeholder="CH por Turma" required />
                                </div>

                                <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Práticas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="CH por Turma" required /> 
                                    <input type="text" placeholder="CH por Turma" required />
                                </div>
                            </div>
                        </div>

                        <div className={classes.semestreNCH} id={classes.segundoSemestreNCH}>
                            <div className={classes.tituloSemestre}>
                                <p>2º Semestre</p>
                            </div>
                            <div className={classes.campoTeoricasPraticas}>
                                <div className={classes.camposTabelaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Teóricas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="CH por Turma" required /> 
                                    <input type="text" placeholder="CH por Turma" required />
                                </div>

                                <div className={classes.camposTabelaNCH} id={classes.camposTabelaPraticaNCH}>
                                    <div className={classes.tituloSemestre}>
                                        <p>Práticas</p> <BsQuestionCircleFill className={classes.icon} />
                                    </div>
                                    <input type="text" placeholder="CH por Turma" required /> 
                                    <input type="text" placeholder="CH por Turma" required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.buttons}>
                    <a href="/disciplinas">
                        <button>Voltar</button>
                    </a>
                    <a href="/ensino/DocentesEnvolvidos">
                        <button id={classes.buttonProximo}>Próximo</button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NumeroDeTurmasCHporTurmas;