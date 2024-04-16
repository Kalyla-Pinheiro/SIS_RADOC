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
        ano: localStorage.getItem(ano) || '',
        campus: 'campus_exemplo',
        nome: 'nome_exemplo',
        siape: 'siape_exemplo',
        x_a: '',
        x_b: '',
        x_c: '',
        x_d: '',
        x_e: '',
        x_estatutario: '',
        x_de: '',
        x_40: '',
        x_20: '',
        x_graduacao: '',
        x_especializacao: '',
        x_mestre: '',
        x_doutor: '',
        atvEnsino_1s_codigo_nome: '',
        atvEnsino_1s_curso: '',
        atvEnsino_1s_nivel: '',
        atvEnsino_1s_ch_total: '',
        atvEnsino_1s_num_turmas_T: '',
        atvEnsino_1s_num_turmas_P: '', 
        atvEnsino_1s_ch_turmas_T: '',
        atvEnsino_1s_ch_turmas_P: '', 
        atvEnsino_1s_nome_docente_envolvido: '',
        atvEnsino_1s_ch_docente_envolvido: '', 
        atvEnsino_2s_codigo_nome: '',
        atvEnsino_2s_curso: '',
        atvEnsino_2s_nível: '',
        atvEnsino_2s_ch_total: '',
        atvEnsino_2s_num_turmas_T: '',
        atvEnsino_2s_num_turmas_P: '',
        atvEnsino_2s_ch_turmas_T: '',
        atvEnsino_2s_ch_turmas_P: '',
        atvEnsino_2s_nome_docente_envolvido: '',
        atvEnsino_2s_ch_docente_envolvido: '',
        calcChSemanal_1s_graduacao: '',
        calcChSemanal_1s_pos_graducao: '', 
        calcChSemanal_1s_total: '',
        calcChSemanal_2s_graduacao: '',
        calcChSemanal_2s__pos_graducao: '',
        calcChSemanal_2s_total: '',
        atvPedagogica_1s_graduacao: '',
        atvPedagogica_1s_pos_graduacao: '',
        atvPedagogica_1s_total: '',
        atvPedagogica_2s_graduacao: '',
        atvPedagogica_2s_pos_graduacao: '',
        atvPedagogica_2s_total: '',
        atvOrientacao_1s_orientacao : '',
        atvOrientacao_1s_coOrientacao: '', 
        atvOrientacao_1s_supervisao: '',
        atvOrientacao_1s_preceptoria: '',
        atvOrientacao_1s_total: '',
        atvOrientacao_2s_orientacao: '',
        atvOrientacao_2s_coOrientacao: '',
        atvOrientacao_2s_supervisao: '',
        atvOrientacao_2s_preceptoria: '',
        atvOrientacao_2s_total: '',
        descricao_docNum: '',
        descricao_nomeDiscente: '',
        descricao_curso: '',
        descricao_tipo: '',
        descricao_nivel: '',
        descricao_1s_chSemanal: '',
        descricao_2s_chSemanal: '',
        supervisao_docNum: '',
        supervisao_nomeDiscente: '',
        supervisao_curso: '',
        supervisao_tipo: '',
        supervisao_nivel: '',
        supervisao_1s_chSemanal: '',
        supervisao_2s_chSemanal: '',
        preceptoria_docNum: '',
        preceptoria_nomeDiscente: '',
        preceptorial_nivel: '',
        preceptoria_1s_chSemanal: '',
        preceptoria_2s_chSemanal: '',
        bancaExaminadora_docNum: '',
        bancaExaminadora_nomeCandidato: '',
        bancaExaminadora_tipo: '',
        bancaExaminadora_1s_chSemanal: '',
        bancaExaminadora_2s_chSemanal: '',
        totalChSemanalAtvEnsino_1s: '',
        totalChSemanalAtvEnsino_2s: '',
        avaliacaoDiscente_1s_docNum: '',
        avaliacaoDiscente_1s: '',
        avaliacaoDiscente_2s_docNum: '',
        avaliacaoDiscente_2s: '', 
        pesquisa_docNum: '',
        pesquisa_titulo: '',
        x_t_pesquisa_coordenador: '',
        x_t_pesquisa_colaborador: '',
        pesquisa_t_cadastroProped: '',
        pesquisa_t_situacaoAtual: '',
        trabalhosCompletos_docNum: '',
        trabalhosCompletos: '',
        livrosVerbetes_docNum: '', 
        livrosVerbetes: '',
        trabalhosCompletos_docNum: '',
        trabalhoCompletos: '',
        outrasAtividades_docNum: '',
        outrasAtividades: '',
        totalChSemanalAtvPesquisa_1s: '',
        totalChSemanalAtvPesquisa_2s: '',
        extensao_docNum: '',
        extensao_titulo: '', 
        x_coordenador_projetos_extensao: '',
        x_colaborador_projetos_extensao: '',
        extensao_proex: '',
        extensao_situacaoAtual: '',
        estagioExtensao_docNum: '',
        estagioExtensao_areaConhecimento: '',
        estagioExtensao_InstituicaoLocal: '',
        estagioExtensao_periodo: '',
        estagioExtensao_chSemanal: '',
        atvEnsinoNaoFormal_docNum: '', 
        atvEnsinoNaoFormal_atividades: '',
        atvEnsinoNaoFormal_1s: '',
        atvEnsinoNaoFormal_2s: '',
        outrasAtvExtensao_docNum: '',
        outrasAtvExtensao_Atividades: '',
        outrasAtvExtensao_1s: '',
        outrasAtvExtensao_2s: '',
        totalChSemanalAtvExtensao_1s: '',
        totalChSemanalExtensao2s: '',
        atvGestaoRepresentacao_docNum: '',
        atvGestaoRepresentacao_cargoFuncao: '',
        atvGestaoRepresentacao_semana: '',
        atvGestaoRepresentacao_chSemanal: '',
        atvGestaoRepresentacao_atoDesignacao: '',
        atvGestaoRepresentacao_periodo: '',
        qualificacaoDocente_docNum: '',
        qualificacaoDocente_atividades: '',
        qualificacaoDocente_portariaRealizacao: '',
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
        x_pp_sim: '',
        x_pp_nao: '',
        outrasInfos_docNum: '',
        outrasInfos: '',
        afastamento_docNum: '',
        afastamento_motivo: '',
        afastamento_portaria: '',
      };

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
            <button onClick={handleGerarRadocClick}>Gerar Radoc</button>
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
