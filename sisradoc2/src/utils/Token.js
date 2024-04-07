import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const TokenFunctions = {
  setToken: (token) => {
    document.cookie = `jwt=${token}`;
  },

  getToken: () => {
    const cookie = document.cookie;
    const token = cookie.match(/jwt=([^;\n]+)/);

    return token ? token[1] : null;
  },

  patternToken: (credential) => {
    const tokenToPattern = jwtDecode(credential);

    const tokenPattern = {};

    return tokenPattern;
  },

  getName: (token) => {
    const tokenDecoded = jwtDecode(token);
    console.log("GET NAME: " + tokenDecoded);
    const name = tokenDecoded.name;

    return name;
  },

  getEmail: (token) => {
    const tokenDecoded = jwtDecode(token);
    const email = tokenDecoded.email;

    return email;
  },

  getSystem: (token) => {
    const tokenDecoded = jwtDecode(token);
    const system = tokenDecoded.system;

    return system;
  },

  set_diario_turma: (diario_turma) => {
    const diario = JSON.stringify(diario_turma);
    Cookies.set("diario_turma", diario, { expires: 1, path: "/" });
  },

  get_diario_turma: () => {
    const diario = Cookies.get("diario_turma");
    return JSON.parse(diario);
  },

  get_tabela: () => {
    const dados = localStorage.getItem("2024");
    return JSON.parse(dados);
  },

  set_avaliacao_discente: (avaliacao_discente) => {
    const avaliacao = JSON.stringify(avaliacao_discente);
    Cookies.set("avaliacao_discente", avaliacao, { expires: 1, path: "/" });
  },

  get_avaliacao_discente: () => {
    const avaliacao = Cookies.get("avaliacao_discente");
    return JSON.parse(avaliacao);
  },

  set_projetos_pesquisa: (projetos_pesquisa) => {
    const projetos = JSON.stringify(projetos_pesquisa);
    Cookies.set("projetos_pesquisa", projetos, { expires: 1, path: "/" });
  },

  get_projetos_pesquisa: () => {
    const projetos = Cookies.get("projetos_pesquisa");
    return JSON.parse(projetos);
  },

  set_projetos_extensao: (projetos_extensao) => {
    const projetosExtensao = JSON.stringify(projetos_extensao);
    Cookies.set("projetos_extensao", projetosExtensao, {
      expires: 1,
      path: "/",
    });
  },

  get_projetos_extensao: () => {
    const projetosExtensao = Cookies.get("projetos_extensao");
    return JSON.parse(projetosExtensao);
  },

  set_orientacao_academica: (orientacao_academica) => {
    const orientacaoAcademica = JSON.stringify(orientacao_academica);
    Cookies.set("orientacao_academica", orientacaoAcademica, {
      expires: 1,
      path: "/",
    });
  },

  get_orientacao_academica: () => {
    const orientacaoAcademica = Cookies.get("orientacao_academica");
    return JSON.parse(orientacaoAcademica);
  },
};

export default TokenFunctions;
