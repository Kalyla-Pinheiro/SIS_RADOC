// Midleware responsável por verificar se o usuário está logado na aplicação
import Cookie from "js-cookie";
import { Outlet, Navigate } from 'react-router-dom';
import TokenFunctions from "../utils/Token";

const AuthMiddleware = (nextState, replace) => {
  const jwt = Cookie.get("jwt");
  
  if(jwt){
    let system;
    system = TokenFunctions.getSystem(jwt);

    if(system !== "sisradoc") <Navigate to="/"/>;
    return <Outlet/>;
  }

  return <Navigate to="/"/>
};

export default AuthMiddleware;