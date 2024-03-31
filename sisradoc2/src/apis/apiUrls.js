const baseUrl = "http://localhost:5000";
/*const baseUrl =
  "https://8a01-2804-14c-5984-871a-814e-f7f8-2a95-6d96.ngrok-free.app";*/

const apiUrls = {
  login: `${baseUrl}/login`,
  cadastro: `${baseUrl}/cadastro`,
  ensino: `${baseUrl}/ensino`,
  aulas_letivas: `${baseUrl}/pdf/aulas_letivas`,
  diario_de_turma: `${baseUrl}/pdf/diarios`,
  verificar_usuario: `${baseUrl}/verificar-usuario`,
  avaliacao_discente: `${baseUrl}/pdf/avaliacao_discente`
};

export default apiUrls;
