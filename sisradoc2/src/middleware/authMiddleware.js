// Midleware responsável por verificar se o usuário está logado na aplicação
import Cookie from "js-cookie";

const authMiddleware = (nextState, replace) => {
  const jwt = Cookie.get("jwt");
  console.log("MIDDLEWARE JWT: " + jwt);

  if (!jwt) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname} // Passando a rota que o usuário tentou acessar
    });
  }
};

export default authMiddleware;
