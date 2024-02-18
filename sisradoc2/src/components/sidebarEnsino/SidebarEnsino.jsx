import React from "react";
import classesEnsino from "../../css-modules/Ensino.module.css";

const SidebarEnsino = () => {
  return (
    <div className={classesEnsino.sidebarEnsinoContainer}>
        <div className={classesEnsino.opcoesEnsino}>
            <div className={classesEnsino.opcaoEnsino}>
                <p>Pedagógicas complementares</p>
            </div>
            <div className={classesEnsino.opcaoEnsino}>
                <p>Orientacão, supervisão e outros</p>
            </div>
            <div className={classesEnsino.opcaoEnsino}>
                <p>Bancas examinadoras</p>
            </div>
            <div className={classesEnsino.opcaoEnsino}>
                <p>Avaliacão discente</p>
            </div>
        </div>
    </div>
  );
};

export default SidebarEnsino;