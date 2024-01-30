import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Home";
import Form from "./Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Cadastro />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
