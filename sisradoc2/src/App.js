import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Cadastro from "./pages/cadastro/Cadastro";
import Formulario from "./pages/formularios/Formulario";
//import NumTurmaCH from "./pages/formularios/NumTurmaCH"
import Documento from "./pages/documentos/Documento";
import Configuracao from "./pages/configuracoes/Configuracao";
import Ensino from "./pages/ensino/Ensino";
import DisciplinasMinistradas from "./pages/disciplinas-ministradas/DisciplinasMinistradas";
import PedagogicasComplementares from "./pages/pedagogicas-complementares/PedagogicasComplementares";
import DocentesEnvolvidos from "./pages/ensino/DocentesEnvolvidos/DocentesEnvolvidos";
import ChSemanalAulas from "./pages/ensino/ChSemanalAulas/ChSemanalAulas";
import NumeroDeTurmasCHporTurmas from "./pages/numero-de-turmas-e-ch-por-turmas/NumeroDeTurmasCHporTurmas";
import AvaliacaoDocente from "./pages/ensino/AvaliacaoDocente/AvaliacaoDocente";
import OrientacaoAcademica from "./pages/OrientacaoAcademica/OrientacaoAcademica";
import SupervisaoAcademica from "./pages/SupervisaoAcademica/SupervisaoAcademica";
import PreceptoriaOuTutoriaDeResidencia from "./pages/preceptoria-ou-tutoria-de-residencia/PreceptoriaOuTutoriaDeResidencia";
import MonografiaQualificacaoDIssertacaoTese from "./pages/monografia-qualificacao-dissertacao-e-tese/MonografiaQualificacaoDIssertacaoTese";
import "react-toastify/dist/ReactToastify.css";
import ChSemanalOrientacao from "./pages/ChSemanalOrientacao/ChSemanalOrientacao";
import Pesquisa from "./pages/pesquisa/Pesquisa";
import Projetos from "./pages/pesquisa/Projetos/Projetos";
import Trabalhos from "./pages/pesquisa/Trabalhos/Trabalhos";
import LivrosVerbetesPublicados from "./pages/pesquisa/livros-e-verbetes-publicados/LivrosVerbetesPublicados";
import TrabalhosResumosPublicadosApresentados from "./pages/pesquisa/trabalhos-e-resumos-publicados-ou-apresentados/TrabalhosResumosPublicadosApresentados";
import AuthMiddleware from "./middleware/AuthMiddleware";

import TopBar from "./components/topbar/TopBar";

const MainLayout = ({ children }) => (
  <div>
    {/* <Sidebar /> */}
    <TopBar />
    <div>{children}</div>
  </div>
);

const EnsinoLayout = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route element={<AuthMiddleware/>}>
                  <Route path="/" element={<Home />} />
                  <Route path="perfil" element={<Perfil />} />
                  <Route path="formularios" element={<Formulario />} />
                  <Route path="documentos" element={<Documento />} />
                  <Route path="configuracao" element={<Configuracao />} />
                  <Route path="ensino" element={<Ensino />} />
                  <Route
                    path="disciplinas"
                    element={<DisciplinasMinistradas />}
                  />
                  <Route
                    path="numeroDeTurmasCHporTurma"
                    element={<NumeroDeTurmasCHporTurmas />}
                  />
                  <Route
                    path="pedagogicasComplementares"
                    element={<PedagogicasComplementares />}
                  />
                  <Route
                    path="/ensino/DocentesEnvolvidos"
                    element={<DocentesEnvolvidos />}
                  />
                  <Route
                    path="/ensino/ChSemanalAulas"
                    element={<ChSemanalAulas />}
                  />
                  <Route
                    path="/ensino/AvaliacaoDocente"
                    element={<AvaliacaoDocente />}
                  />
                  <Route
                    path="OrientacaoAcademica"
                    element={<OrientacaoAcademica />}
                  />
                  <Route
                    path="SupervisaoAcademica"
                    element={<SupervisaoAcademica />}
                  />

                  <Route
                    path="ChSemanalOrientacao"
                    element={<ChSemanalOrientacao />}
                  />

                  <Route
                    path="PreceptoriaOuTutoriaDeResidencia"
                    element={<PreceptoriaOuTutoriaDeResidencia />}
                  />
                  <Route
                    path="MonografiaQualificacaoDIssertacaoTese"
                    element={<MonografiaQualificacaoDIssertacaoTese />}
                  />
                  <Route path="pesquisa" element={<Pesquisa />} />
                  <Route path="pesquisa/Projetos" element={<Projetos />} />
                  <Route path="pesquisa/Trabalhos" element={<Trabalhos />} />
                  <Route path="/pesquisa/livros-e-verbetes-publicados" element={<LivrosVerbetesPublicados />}/>
                  <Route path="/pesquisa/trabalhos-e-resumos-publicados-ou-apresentados" element={<TrabalhosResumosPublicadosApresentados />}/>
                </Route>
              </Routes>
            </MainLayout>
          }
        />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
