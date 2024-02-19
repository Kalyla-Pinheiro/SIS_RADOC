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
import DocentesEnvolvidos from "./pages/formularios/DocentesEnvolvidos/DocentesEnvolvidos";
const MainLayout = ({ children }) => (
  <div>
    <Sidebar />
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
                  path="pedagogicasComplementares"
                  element={<PedagogicasComplementares />}
                />
                <Route
                  path="/formularios/DocentesEnvolvidos"
                  element={<DocentesEnvolvidos />}
                />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
