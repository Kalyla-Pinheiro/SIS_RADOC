const baseUrl = "http://localhost:5000"
/*const baseUrl =
  "https://b54d-200-129-150-3.ngrok-free.app";*/

const apiUrls = {
  baseUrl: baseUrl,
  login: `${baseUrl}/login`,
  cadastro: `${baseUrl}/cadastro`,
  ensino: `${baseUrl}/ensino`,
  aulas_letivas: `${baseUrl}/pdf/aulas_letivas`,
  diario_de_turma: `${baseUrl}/pdf/diarios`,
  verificar_usuario: `${baseUrl}/verificar-usuario`,
  avaliacao_discente: `${baseUrl}/pdf/avaliacao_discente`,
  salvar_diarios_turmas: `${baseUrl}/aulas_letivas`,
  projetos_pesquisa: `${baseUrl}/pdf/projetos`,
  projetos_extensao: `${baseUrl}/pdf/projetos_extensao`,
  orientacao_academica: `${baseUrl}/pdf/orientacao_academica`,
  trabalhos_boletins: `${baseUrl}/pdf/trabalhos_boletins`,
  gerar_radoc: `${baseUrl}/gerar_radoc`,
  salvar_pdf: `${baseUrl}/uploads/`,
  listar_pdf: `${baseUrl}/documents`
};

export default apiUrls;
