const baseUrl = "http://localhost:5000";
/*const baseUrl =
  "https://5244-2804-14c-5984-871a-c962-d109-2b4d-28b6.ngrok-free.app";*/

const apiUrls = {
  login: `${baseUrl}/login`,
  cadastro: `${baseUrl}/cadastro`,
  ensino: `${baseUrl}/ensino`,
  disc_ministradas: `${baseUrl}/pdf/ministradas`,
  diario_de_turma: `${baseUrl}/pdf/diarios`,
  verificar_usuario: `${baseUrl}/verificar-usuario`,
};

export default apiUrls;
