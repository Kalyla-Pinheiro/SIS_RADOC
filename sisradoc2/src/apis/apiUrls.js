/*const baseUrl = "http://localhost:5000";*/
const baseUrl =
  "https://d695-2804-14c-5984-871a-393d-f689-99bf-84af.ngrok-free.app";

const apiUrls = {
  login: `${baseUrl}/login`,

  cadastro: `${baseUrl}/cadastro`,
  ensino: `${baseUrl}/ensino`,
  aulas_letivas: `${baseUrl}/pdf/aulas_letivas`,
  diario_de_turma: `${baseUrl}/pdf/diarios`,
  verificar_usuario: `${baseUrl}/verificar-usuario`,
  avaliacao_discente: `${baseUrl}/pdf/avaliacao_discente`,
  salvar_diarios_turmas: `${baseUrl}/aulas_letivas`,
  projetos_pesquisa: `${baseUrl}/pdf/projetos`,
};

export default apiUrls;
