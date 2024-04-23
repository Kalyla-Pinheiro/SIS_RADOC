import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router
import classes from "../../css-modules/Formulario.module.css";
import ModalChSemanalGeral from "../../components/Modal/formulario/ModalChSemanalGeral";
import { ChakraProvider, extendTheme, typography, useDisclosure } from "@chakra-ui/react";
import { AnoContext } from "../../utils/AnoContext";
import apiUrls from "../../apis/apiUrls";
import { ToastContainer } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";

const Formulario = () => {
  // IDEIA DE GERACÃO DE ITENS NA TELA DE RELATÓRIOS (PARTE 1)
  // -> quando clicarmos no botão "gerar radoc" será criado relatorios: {} no localStorage
  // -> esse json de relatorios irá conter todos os itens presentes na tela de relatórios
  // -> dessa forma, ele irá armazenar 2025: {}

  const { ano } = useContext(AnoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGerarRadocClick = async () => {
    const localStorageKey = "itens_relatorio";
    const jsonData = {};
    let localStorageData = localStorage.getItem(localStorageKey);

    if (!localStorageData) {
      localStorage.setItem(localStorageKey, JSON.stringify(jsonData));
      localStorageData = {};
      localStorageData[ano] = {};
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
    } else {
      localStorageData = JSON.parse(localStorageData);
      localStorageData[ano] = {};
      localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
    }

    try {

      const dadosDoRADOC = {
        atvEnsino_ch_1s: [],
        atvEnsino_ch_2s: [],

        calculoChSemanal_1s_graduacao: '',
        calculoChSemanal_1s_pos_graduacao: '',
        calculoChSemanal_1s_total: '',
        calculoChSemanal_2s_graduacao: '',
        calculoChSemanal_2s_pos_graduacao: '',
        calculoChSemanal_2s_total: '',

        atvPedagogica_1s_graduacao: '',
        atvPedagogica_1s_pos_graduacao: '',
        atvPedagogica_1s_total: '',
        atvPedagogica_2s_graduacao: '',
        atvPedagogica_2s_pos_graduacao: '',
        atvPedagogica_2s_total: '',

        atvOrientacao_1s_orientacao: '',
        atvOrientacao_1s_coOrientacao: '',
        atvOrientacao_1s_supervisao: '',
        atvOrientacao_1s_preceptoria: '',
        atvOrientacao_1s_total: '',
        atvOrientacao_2s_orientacao: '',
        atvOrientacao_2s_coOrientacao: '',
        atvOrientacao_2s_supervisao: '',
        atvOrientacao_2s_preceptoria: '',
        atvOrientacao_2s_total: '',

        orientacao_coOrientacao_academica_doc_a_doc: [],

        supervisao_academica_doc_a_doc: [],

        preceptoria_e_ou_tutoria_de_residencia: [],

        monografia_qualificacao_dissertacao_tese: [],

        totalChSemanalAtvEnsino_1s: '',
        totalChSemanalAtvEnsino_2s: '',

        avaliacao_discente_doc_a_doc: [],

        pesquisa_projetos_doc_a_doc: [],

        pesquisa_trabalhosBoletinsTecnicos_doc_a_doc: [],

        pesquisa_livrosVerbetesPublicados_doc_a_doc: [],

        pesquisa_resumosPublicados_doc_a_doc: [],

        pesquisa_outrasAtividadesPesquisa_doc_a_doc: [],

        totalChSemanalAtvPesquisa_1s: '',
        totalChSemanalAtvPesquisa_2s: '',

        extensao_projetos_doc_a_doc: [],

        extensao_estagios_doc_a_doc: [],

        extensao_atividadeDeEnsinoNaoFormal_doc_a_doc: [],

        extensao_outrasAtividadesExtensao_doc_a_doc: [],

        totalChSemanalAtvExtensao_1s: '',
        totalChSemanalAtvExtensao_2s: '',

        gestao_atividadesDeGestaoERepresentacao_doc_a_doc: [],

        outros_qualificacaoDocente_doc_a_doc: [],

        distribuicaoChSemanal_1s_atvDidatica: '',
        distribuicaoChSemanal_1s_administracao: '',
        distribuicaoChSemanal_1s_pesquisa: '',
        distribuicaoChSemanal_1s_extensao: '',
        distribuicaoChSemanal_1s_total: '',
        distribuicaoChSemanal_2s_atvDidatica: '',
        distribuicaoChSemanal_2s_administracao: '',
        distribuicaoChSemanal_2s_pesquisa: '',
        distribuicaoChSemanal_2s_extensao: '',
        distribuicaoChSemanal_2s_total: '',

        progressao: '',

        outros_outrasInformacoes_doc_a_doc: [],
        
        outros_afastamentos: []
      };


      const localStorageKey2 = "dadosDoRadoc";
      const jsonData2 = {};

      let localStorageData2 = localStorage.getItem(localStorageKey2);

      if (!localStorageData2) {
        localStorage.setItem(localStorageKey2, JSON.stringify(jsonData2));
        localStorageData2 = localStorage.getItem(localStorageKey2);
        localStorageData2 = JSON.parse(localStorageData2);
      } else {
        localStorageData2 = JSON.parse(localStorageData2);
      }

      // PEGANDO OS DADOS DO RADOC ATUAL
      let localStorageDataRadocAtual = localStorage.getItem(ano);
      let localStorageDataRadocAtualObj = JSON.parse(localStorageDataRadocAtual);

      // OBTENDO OS ITENS DE DISCIPLINAS
      const disciplinasMinistradas = localStorageDataRadocAtualObj.disciplinas_ministradas;

      if (Array.isArray(disciplinasMinistradas)) {
        for (let i = 0; i < disciplinasMinistradas.length; i++) {
          const semestre = disciplinasMinistradas[i].semestre;
          if (semestre && semestre.includes("1º SEMESTRE")) {
            dadosDoRADOC.atvEnsino_ch_1s.push(disciplinasMinistradas[i]);
          } else {
            dadosDoRADOC.atvEnsino_ch_2s.push(disciplinasMinistradas[i]);
          }
        }
      } else {
        console.log("A variável disciplinasMinistradas não é um array.");
      }

      // OBTENDO OS CHS DE AULAS LETIVAS
      const chAulasLetivas = localStorageDataRadocAtualObj.ChTotalAulasLetivas;      
      dadosDoRADOC.calculoChSemanal_1s_graduacao = chAulasLetivas["1SemestreGraduacao"];
      dadosDoRADOC.calculoChSemanal_1s_pos_graduacao = chAulasLetivas["1SemestrePosGraduacao"];
      dadosDoRADOC.calculoChSemanal_1s_total = chAulasLetivas["1Semestre"];
      dadosDoRADOC.calculoChSemanal_2s_graduacao = chAulasLetivas["2SemestreGraduacao"];
      dadosDoRADOC.calculoChSemanal_2s_pos_graduacao = chAulasLetivas["2SemestrePosGraduacao"];
      dadosDoRADOC.calculoChSemanal_2s_total = chAulasLetivas["2Semestre"];

      // OBTENDO OS CHS DE PEDAGÓGICAS COMPLEMENTARES
      const chPedagogicasComplementares = localStorageDataRadocAtualObj.ChTotalPedagogicasComplementares;
      dadosDoRADOC.atvPedagogica_1s_graduacao = chPedagogicasComplementares["1SemestreGraduacao"];
      dadosDoRADOC.atvPedagogica_1s_pos_graduacao = chPedagogicasComplementares["1SemestrePosGraduacao"];
      dadosDoRADOC.atvPedagogica_1s_total = chPedagogicasComplementares["1Semestre"];
      dadosDoRADOC.atvPedagogica_2s_graduacao = chPedagogicasComplementares["2SemestreGraduacao"];
      dadosDoRADOC.atvPedagogica_2s_pos_graduacao = chPedagogicasComplementares["2SemestrePosGraduacao"];
      dadosDoRADOC.atvPedagogica_2s_total = chPedagogicasComplementares["2Semestre"];

      // OBTENDO OS CHS DE ORIENTACÃO, SUPERVISÃO E OUTROS 1SemestreSupervisao
      const chOrientacao1S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["1SemestreOrientacao"];
      const chOrientacao2S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["2SemestreOrientacao"];
      const chCoorientacao1S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["1SemestreCoOrientacao"];
      const chCoorientacao2S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["2SemestreCoOrientacao"];
      const chSupervisao1S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["1SemestreSupervisao"];
      const chSupervisao2S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["2SemestreSupervisao"];
      const chPreceptoria1S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["1SemestrePreceptoria"];
      const chPreceptoria2S = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao["2SemestrePreceptoria"];
      const chTotalOrientacaoSupervisaoOutros = localStorageDataRadocAtualObj.ChTotalOrientacaoSupervisao;

      dadosDoRADOC.atvOrientacao_1s_orientacao = chOrientacao1S;
      dadosDoRADOC.atvOrientacao_1s_coOrientacao = chCoorientacao1S;
      dadosDoRADOC.atvOrientacao_1s_supervisao = chSupervisao1S;
      dadosDoRADOC.atvOrientacao_1s_preceptoria = chPreceptoria1S;
      dadosDoRADOC.atvOrientacao_1s_total = chTotalOrientacaoSupervisaoOutros["1Semestre"];
      dadosDoRADOC.atvOrientacao_2s_orientacao = chOrientacao2S;
      dadosDoRADOC.atvOrientacao_2s_coOrientacao = chCoorientacao2S;
      dadosDoRADOC.atvOrientacao_2s_supervisao = chSupervisao2S;
      dadosDoRADOC.atvOrientacao_2s_preceptoria = chPreceptoria2S;
      dadosDoRADOC.atvOrientacao_2s_total = chTotalOrientacaoSupervisaoOutros["2Semestre"];

      // OBTENDO OS DADOS DE ORIENTACÃO E COORIENTACÃO ACADEMICA DOC A DOC
      const orientacaoCoorientacaoAcademica = localStorageDataRadocAtualObj.orientacao_coorientacao_academica;
      if (Array.isArray(orientacaoCoorientacaoAcademica)) {
        for (let i = 0; i < orientacaoCoorientacaoAcademica.length; i++) {
          dadosDoRADOC.orientacao_coOrientacao_academica_doc_a_doc.push(orientacaoCoorientacaoAcademica[i]);
        }
      } else {
        console.log("A variável orientacaoCoorientacaoAcademica não é um array.");
      }

      // OBTENDO DADOS DE SUPERVISAO ACADEMICA DOC A DOC
      const supervisaoAcademica = localStorageDataRadocAtualObj.supervisao_academica;
      if (Array.isArray(supervisaoAcademica)) {
        for (let i = 0; i < supervisaoAcademica.length; i++) {
          dadosDoRADOC.supervisao_academica_doc_a_doc.push(supervisaoAcademica[i]);
        }
      } else {
        console.log("A variável supervisaoAcademica não é um array.");
      }

      // OBTENDO OS DADOS DE PRECEPTORIA OU TUTORIA DE RESIDÊNCIA
      const preceptoriaTutoriaDeResidencia = localStorageDataRadocAtualObj.preceptoria_e_ou_tutoria_de_residencia;
      if (Array.isArray(preceptoriaTutoriaDeResidencia)) {
        for (let i = 0; i < preceptoriaTutoriaDeResidencia.length; i++) {
          dadosDoRADOC.preceptoria_e_ou_tutoria_de_residencia.push(preceptoriaTutoriaDeResidencia[i]);
        }
      } else {
        console.log("A variável preceptoriaTutoriaDeResidencia não é um array.");
      }

      // OBTENDO DADOS DE MONOGRAFIA, QUALIFICACÃO, DISSERTACÃO E TESE
      const monografiaQualificacaoDissertacaoTese = localStorageDataRadocAtualObj.monografia_qualificacao_dissertacao_tese;
      if (Array.isArray(monografiaQualificacaoDissertacaoTese)) {
        for (let i = 0; i < monografiaQualificacaoDissertacaoTese.length; i++) {
          dadosDoRADOC.monografia_qualificacao_dissertacao_tese.push(monografiaQualificacaoDissertacaoTese[i]);
        }
      } else {
        console.log("A variável monografiaQualificacaoDissertacaoTese não é um array.");
      }

      // OBTENDO DADOS REFERENTES AO CH TOTAL DAS ATIVIDADES DE ENSINO totalChSemanalAtvEnsino_1s
      const chTotalEnsino1S = localStorageDataRadocAtualObj.ENSINO_CH_SEMANAL["1Semestre"];
      const chTotalEnsino2S = localStorageDataRadocAtualObj.ENSINO_CH_SEMANAL["2Semestre"];

      dadosDoRADOC.totalChSemanalAtvEnsino_1s = chTotalEnsino1S;
      dadosDoRADOC.totalChSemanalAtvEnsino_2s = chTotalEnsino2S;

      // OBTENDO OS DADOS DE AVALIAÇÃO DISCENTE
      const avaliacaoDiscente = localStorageDataRadocAtualObj.avaliacao_discente;
      if (Array.isArray(avaliacaoDiscente)) {
        for (let i = 0; i < avaliacaoDiscente.length; i++) {
          dadosDoRADOC.avaliacao_discente_doc_a_doc.push(avaliacaoDiscente[i]);
        }
      } else {
        console.log("A variável avaliacaoDiscente não é um array.");
      }

      // OBTENDO OS DADOS DE PROJETOS DE PESQUISA
      const pesquisaProjetos = localStorageDataRadocAtualObj.projetos;
      if (Array.isArray(pesquisaProjetos)) {
        for (let i = 0; i < pesquisaProjetos.length; i++) {
          dadosDoRADOC.pesquisa_projetos_doc_a_doc.push(pesquisaProjetos[i]);
        }
      } else {
        console.log("A variável pesquisaProjetos não é um array.");
      }

      // OBTENDO DADOS DE TRABALHOS 
      const trabalhosBoletinsTecnicosOutros = localStorageDataRadocAtualObj.trabalhos_boletins_e_outros;
      if (Array.isArray(trabalhosBoletinsTecnicosOutros)) {
        for (let i = 0; i < trabalhosBoletinsTecnicosOutros.length; i++) {
          dadosDoRADOC.pesquisa_trabalhosBoletinsTecnicos_doc_a_doc.push(trabalhosBoletinsTecnicosOutros[i]);
        }
      } else {
        console.log("A variável trabalhosBoletinsTecnicosOutros não é um array.");
      }

      // OBETENDO DADOS DE LIVROS VERBETES PUBLICADOS
      const livrosVerbetesPublicados = localStorageDataRadocAtualObj.livros_verbetes_publicados;
      if (Array.isArray(livrosVerbetesPublicados)) {
        for (let i = 0; i < livrosVerbetesPublicados.length; i++) {
          dadosDoRADOC.pesquisa_livrosVerbetesPublicados_doc_a_doc.push(livrosVerbetesPublicados[i]);
        }
      } else {
        console.log("A variável livrosVerbetesPublicados não é um array.");
      }

      // OBTENDO DADOS DOS RESUMOS PUBLICADOS
      const resumosPublicados = localStorageDataRadocAtualObj.trabalhos_resumos_publicados_apresentados;
      if (Array.isArray(resumosPublicados)) {
        for (let i = 0; i < resumosPublicados.length; i++) {
          dadosDoRADOC.pesquisa_resumosPublicados_doc_a_doc.push(resumosPublicados[i]);
        }
      } else {
        console.log("A variável resumosPublicados não é um array.");
      }

      // OBTENDO DADOS DE OUTRAS ATIVIDADES DE PESQUISA
      const outrasAtividadesDePesquisa = localStorageDataRadocAtualObj.outras_atividades_de_pesquisa_e_producao_intelectual;
      if (Array.isArray(outrasAtividadesDePesquisa)) {
        for (let i = 0; i < outrasAtividadesDePesquisa.length; i++) {
          dadosDoRADOC.pesquisa_outrasAtividadesPesquisa_doc_a_doc.push(outrasAtividadesDePesquisa[i]);
        }
      } else {
        console.log("A variável outrasAtividadesDePesquisa não é um array.");
      }

      // OBTENDO DADOS DO CH TOTAL DE PESQUISA totalChSemanalAtvPesquisa_1s
      const chTotalPesquisa = localStorageDataRadocAtualObj.ChTotalPesquisa;
      dadosDoRADOC.totalChSemanalAtvPesquisa_1s = chTotalPesquisa["1Semestre"];
      dadosDoRADOC.totalChSemanalAtvPesquisa_2s = chTotalPesquisa["2Semestre"];

      // OBTENDO DADOS DE PROJETOS DE EXTENSÃO
      const projetosDeExtensao = localStorageDataRadocAtualObj.projetos_de_extensao;
      if (Array.isArray(projetosDeExtensao)) {
        for (let i = 0; i < projetosDeExtensao.length; i++) {
          dadosDoRADOC.extensao_projetos_doc_a_doc.push(projetosDeExtensao[i]);
        }
      } else {
        console.log("A variável projetosDeExtensao não é um array.");
      }

      // OBTENDO DADOS DE ESTÁGIOS DE EXTENSÃO estagio_de_extensao
      const estagiosDeExtensao = localStorageDataRadocAtualObj.estagio_de_extensao;
      if (Array.isArray(estagiosDeExtensao)) {
        for (let i = 0; i < estagiosDeExtensao.length; i++) {
          dadosDoRADOC.extensao_estagios_doc_a_doc.push(estagiosDeExtensao[i]);
        }
      } else {
        console.log("A variável estagiosDeExtensao não é um array.");
      }

      // OBTENDO OS DADOS DE ATIVIDADES DE ENSINO NÃO FORMAL
      const atividadesDeEnsinoNaoFormal = localStorageDataRadocAtualObj.atividades_de_ensino_nao_formais;
      if (Array.isArray(atividadesDeEnsinoNaoFormal)) {
        for (let i = 0; i < atividadesDeEnsinoNaoFormal.length; i++) {
          dadosDoRADOC.extensao_atividadeDeEnsinoNaoFormal_doc_a_doc.push(atividadesDeEnsinoNaoFormal[i]);
        }
      } else {
        console.log("A variável atividadesDeEnsinoNaoFormal não é um array.");
      }

      // OBTENDO DADOS DE OUTRAS ATIVIDADES DE EXTENSÃO
      const outrasAtividadesDeExtensao = localStorageDataRadocAtualObj.outras_atividades_de_extensao;
      if (Array.isArray(outrasAtividadesDeExtensao)) {
        for (let i = 0; i < outrasAtividadesDeExtensao.length; i++) {
          dadosDoRADOC.extensao_outrasAtividadesExtensao_doc_a_doc.push(outrasAtividadesDeExtensao[i]);
        }
      } else {
        console.log("A variável outrasAtividadesDeExtensao não é um array.");
      }

      // OBTENDO DADOS CH TOTAL DE EXTENSAO 
      const chTotalExtensao = localStorageDataRadocAtualObj.EXTENSAO_CH_SEMANAL;
      dadosDoRADOC.totalChSemanalAtvExtensao_1s = chTotalExtensao["1Semestre"];
      dadosDoRADOC.totalChSemanalAtvExtensao_2s = chTotalExtensao["2Semestre"];

      // OBTENDO DADOS ATIVIDADES DE GESTÃO E REPRESENTACÃO 
      const atividadesDeGestaoRepresentacao = localStorageDataRadocAtualObj.atividades_de_gestao_e_representacao;
      if (Array.isArray(atividadesDeGestaoRepresentacao)) {
        for (let i = 0; i < atividadesDeGestaoRepresentacao.length; i++) {
          dadosDoRADOC.gestao_atividadesDeGestaoERepresentacao_doc_a_doc.push(atividadesDeGestaoRepresentacao[i]);
        }
      } else {
        console.log("A variável atividadesDeGestaoRepresentacao não é um array.");
      }

      // OBTENDO DADOS DE QUALIFICACÃO DOCENTE
      const qualificacaoDocente = localStorageDataRadocAtualObj.qualificacao_docente;
      if (Array.isArray(qualificacaoDocente)) {
        for (let i = 0; i < qualificacaoDocente.length; i++) {
          dadosDoRADOC.outros_qualificacaoDocente_doc_a_doc.push(qualificacaoDocente[i]);
        }
      } else {
        console.log("A variável qualificacaoDocente não é um array.");
      }

      // OBTENDO DADOS REFERENTES A DISTRIBUICÃO DE CARGA HORÁRIA SEMANAL
      const chTotalAtvDidatica1S = localStorageDataRadocAtualObj.ENSINO_CH_SEMANAL["1Semestre"];
      const chTotalAtvDidatica2S = localStorageDataRadocAtualObj.ENSINO_CH_SEMANAL["2Semestre"];
      const chTotalAtvPesquisa1S = localStorageDataRadocAtualObj.ChTotalPesquisa["1Semestre"];
      const chTotalAtvPesquisa2S = localStorageDataRadocAtualObj.ChTotalPesquisa["2Semestre"];
      const chTotalAtvExtensao1S = localStorageDataRadocAtualObj.EXTENSAO_CH_SEMANAL["1Semestre"];
      const chTotalAtvExtensao2S = localStorageDataRadocAtualObj.EXTENSAO_CH_SEMANAL["2Semestre"];

      dadosDoRADOC.distribuicaoChSemanal_1s_atvDidatica = chTotalAtvDidatica1S;
      dadosDoRADOC.distribuicaoChSemanal_1s_administracao = '';
      dadosDoRADOC.distribuicaoChSemanal_1s_pesquisa = chTotalAtvPesquisa1S;
      dadosDoRADOC.distribuicaoChSemanal_1s_extensao = chTotalAtvExtensao1S;
      dadosDoRADOC.distribuicaoChSemanal_1s_total = chTotalAtvDidatica1S + chTotalAtvPesquisa1S + chTotalAtvExtensao1S;
      dadosDoRADOC.distribuicaoChSemanal_2s_atvDidatica = chTotalAtvDidatica2S;
      dadosDoRADOC.distribuicaoChSemanal_2s_administracao = '';
      dadosDoRADOC.distribuicaoChSemanal_2s_pesquisa = chTotalAtvPesquisa2S;
      dadosDoRADOC.distribuicaoChSemanal_2s_extensao = chTotalAtvExtensao2S;
      dadosDoRADOC.distribuicaoChSemanal_2s_total = chTotalAtvDidatica2S + chTotalAtvPesquisa2S + chTotalAtvExtensao2S;

      // OBTENDO DADOS REFERENTES A PROGRESSÃO
      const progressao = localStorageDataRadocAtualObj.progressao;
      dadosDoRADOC.progressao = progressao;

      // OBTENDO DADOS REFERENTES A OUTRAS INFORMACÕES
      const outrasInformacoes = localStorageDataRadocAtualObj.outras_informacoes;
      if (Array.isArray(outrasInformacoes)) {
        for (let i = 0; i < outrasInformacoes.length; i++) {
          dadosDoRADOC.outros_outrasInformacoes_doc_a_doc.push(outrasInformacoes[i]);
        }
      } else {
        console.log("A variável outrasInformacoes não é um array.");
      }

      // OBTENDO DADOS REFERENTES AOS AFASTAMENTOS
      const afastamentos = localStorageDataRadocAtualObj.afastamento;
      if (Array.isArray(afastamentos)) {
        for (let i = 0; i < afastamentos.length; i++) {
          dadosDoRADOC.outros_afastamentos.push(afastamentos[i]);
        }
      } else {
        console.log("A variável afastamentos não é um array.");
      }


      const response = await fetch(apiUrls.gerar_radoc, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dadosDoRADOC }),
      });

      if (response.ok) {
        ToastifyMessages.success("Geração de PDF concluída");

        setTimeout(() => {
          onOpen();
        }, 2000);
        
      } else {
        const errorMessage = await response.text();
        const erro = JSON.parse(errorMessage);
        ToastifyMessages.error(`${erro.erro}`);
      }
    } catch (error) {
      console.log(error);
      ToastifyMessages.error(`${error.message}`);
    }
  };

  const handleDownloadRadoc = async () => {
    try {
      const response = await fetch(apiUrls.gerar_radoc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'nome_do_arquivo.docx'; // Nome do arquivo que será baixado
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Erro ao fazer o download:', error);
    }
  };

  const clickGerarRadoc = async () => {
    handleGerarRadocClick();
    handleDownloadRadoc();

  };

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          background: "#f3ede8",
          fontFamily: "Poppins, sans-serif",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        },
      },
    },
  });

  return (
    <div>
      <div className={classes.formularioContainer}>
        <div className={classes.titulo}>
          <h1>Formulários das Atividades!</h1>
          <h3 className={classes.paragrafos}>
            Na presente página, disponibilizam-se os formulários das atividades
            passíveis de preenchimento. Para preencher uma seção específica,
            basta clicar no botão correspondente a cada atividade. Além disso, é
            possível visualizar a distribuição da carga horária semanal das
            atividades do ano em preenchimento ao clicar no botão "CH Semanal".
          </h3>
          <h3 className={classes.paragrafos}>
            Ao concluir o preenchimento, clique em "Gerar Radoc" para finalizar
            o preenchimento do ano em questão.
          </h3>
        </div>
        <div>
          <nav className={classes.listaNavegacao}>
            <a className={classes.opcaoEnsino} type="button" href="/ensino">
              Ensino
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/pesquisa">
              Pesquisa
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/extensao">
              Extensão
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/gestao">
              Gestão
            </a>
            <a className={classes.opcaoEnsino} type="button" href="/outros">
              Outros
            </a>
          </nav>
        </div>
        <div className={classes.button}>
          <button onClick={onOpen}>CH Semanal</button>

          <Link to="/relatorios">
            <button onClick={clickGerarRadoc}>Gerar Radoc</button>
          </Link>
        </div>
        <ChakraProvider theme={theme} resetCSS={false}>
          <ModalChSemanalGeral isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
      </div>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Formulario;
