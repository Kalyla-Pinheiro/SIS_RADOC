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
import { Navigate } from "react-router-dom";
import Erro404 from "./pages/404/Erro404";

const MainLayout = ({ children }) => (
  <div>
    <Sidebar />
    <div>{children}</div>
  </div>
);
//teste
const EnsinoLayout = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);

const NotFound = () => <Navigate to="/404" />;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route element={<AuthMiddleware/>}>
          <Route path="/home" element={<MainLayout> <Home /> </MainLayout>} />
          <Route path="/perfil" element={<MainLayout> <Perfil /> </MainLayout>} />
          <Route path="/formularios" element={<MainLayout> <Formulario /> </MainLayout>} />
          <Route path="/documentos" element={<MainLayout> <Documento /> </MainLayout>} />
          <Route path="/configuracao" element={<MainLayout> <Configuracao /> </MainLayout>} />
          <Route path="/ensino" element={<MainLayout> <Ensino /> </MainLayout>} />
          <Route path="/disciplinas" element={<MainLayout> <DisciplinasMinistradas /> </MainLayout>} />
          <Route path="/numeroDeTurmasCHporTurma" element={<MainLayout> <NumeroDeTurmasCHporTurmas /> </MainLayout>} />
          <Route path="/pedagogicasComplementares" element={<MainLayout> <PedagogicasComplementares /> </MainLayout>} />
          <Route path="/ensino/DocentesEnvolvidos" element={<MainLayout> <DocentesEnvolvidos /> </MainLayout>} />
          <Route path="/ensino/ChSemanalAulas" element={<MainLayout> <ChSemanalAulas /> </MainLayout>} />
          <Route path="/ensino/AvaliacaoDocente" element={<MainLayout> <AvaliacaoDocente /> </MainLayout>} />
          <Route path="/OrientacaoAcademica" element={<MainLayout> <OrientacaoAcademica /> </MainLayout>} />
          <Route path="/SupervisaoAcademica" element={<MainLayout> <SupervisaoAcademica /> </MainLayout>} />
          <Route path="/ChSemanalOrientacao" element={<MainLayout> <ChSemanalOrientacao /> </MainLayout>} />
          <Route path="/PreceptoriaOuTutoriaDeResidencia" element={<MainLayout> <PreceptoriaOuTutoriaDeResidencia /> </MainLayout>} />
          <Route path="/MonografiaQualificacaoDIssertacaoTese" element={<MainLayout> <MonografiaQualificacaoDIssertacaoTese /></MainLayout>} />

          <Route path="/pesquisa" element={<MainLayout> <Pesquisa /> </MainLayout>} />
          <Route path="/pesquisa/Projetos" element={<MainLayout> <Projetos /> </MainLayout>} />
          <Route path="/pesquisa/Trabalhos" element={<MainLayout> <Trabalhos /> </MainLayout>} />
          <Route path="/pesquisa/livros-e-verbetes-publicados" element={<MainLayout> <LivrosVerbetesPublicados /> </MainLayout>} />
          <Route path="/pesquisa/trabalhos-e-resumos-publicados-ou-apresentados" element={<MainLayout> <TrabalhosResumosPublicadosApresentados /> </MainLayout>} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<Erro404/>}/>
        
        {/* 
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route element={<AuthMiddleware/>}>
                  <Route path="home" element={<Home />} />
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
        */}

      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
