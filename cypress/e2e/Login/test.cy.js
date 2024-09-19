/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from '../../support/page/home'
import Helper from '../../support/helpers'
import RelatorioGeral from '../../support/page/relatorioGeral';
import Pacientes from '../../support/page/pacientes';
import ResultadoTesteHPV from '../../support/page/resultadoTesteHPV'
import resultadoTesteHPV from '../../support/page/resultadoTesteHPV';
// const municipio = Cypress.env("municipio")
// const estabelecimento = Cypress.env("estabelecimento")
// const paciente = String(Cypress.env("paciente"))

const municipio = 'Amaraji'
const estabelecimento = 'PSF ALICE BATISTA DOS ANJOS'
const paciente = 'MARIA JOSE DE ANDRADE'


describe('Login Jordana', () => {

    it('Capturando info',()=>{

    Login.realizandoLogin()
   
    Helper.espera(5000)  // sempre em milisegundos ex. 5000 = 5 segundos

    Home.clica_hamburguer_menu_button()
    Home.clica_relatorio_sidemenu_button()
    Home.clica_relatorio_geral_submenu_button()

    RelatorioGeral.verifica_page_relatorio_geral()
    RelatorioGeral.clica_dropdown_estado_button()
    RelatorioGeral.clica_opcao_pernambuco()
    Helper.espera(2000)                                 // TODO retirar os Helpers dos arquivos feature.cy.js
    Helper.clica_fora_do_modal()
    Helper.espera(5000)
    RelatorioGeral.clica_dropdown_municipio_button()
    Helper.espera(5000)
    RelatorioGeral.clica_opcao_municipio('Amaraji')
    Helper.clica_fora_do_modal()
    RelatorioGeral.clica_dropdown_estabelecimento_button()
    RelatorioGeral.clica_opcao_estabelecimento('PSF ALICE BATISTA DOS ANJOS')      
    Helper.clica_fora_do_modal() 
    RelatorioGeral.clica_filtrar_button()
    Helper.espera(8000)
    RelatorioGeral.digita_pesquisa_nome_ou_cpf( 'MARIA JOSE DE ANDRADE') 
    Helper.espera(2000)
    RelatorioGeral.clica_filtrar_button()   
    Helper.espera(5000)
    RelatorioGeral.clica_exportar_dropdown_button()
    RelatorioGeral.clica_formato_arquivo_exportar('CSV')
    RelatorioGeral.verifica_modal_exportar_relatório_download()
    RelatorioGeral.clica_download_button()
    Helper.espera(5000)
    Helper.movendo_arquivo_de_downloads_para_fixtures('relatorio-hpv.csv')
    Helper.leitura_dados_relatorio()
  }) 

  it('Acessando Pacientes', () => {

    Login.realizandoLogin()

    Home.clica_hamburguer_menu_button()
    Home.clica_atendimento_sidemenu_button()
    Home.clica_pacientes_sidemenu_button()

    Helper.espera(2000)

    Pacientes.verifica_page_pacientes()
    Helper.leitura_dados_relatorio()
    Helper.usando_relatorio_digitando_cpf()
    Pacientes.clica_filtrar_button()
    Pacientes.verifica_resultado_filtro()
    Helper.usando_relatorio_verifica_cpf_paciente()
    Pacientes.clica_visualizar_ficha_paciente()
    
    Helper.espera(2000)
    
    Pacientes.verifica_ficha_paciente()
    Helper.usando_relatorio_verifica_cpf_sem_ponto_hifen()
    Pacientes.clica_exames_coletados_button()
    Pacientes.verifica_teste_hpv_existente()  // TODO parametrizar e melhorar entradas
    Pacientes.verifica_teste_hpv_disponivel()  // TODO parametrizar e melhorar entradas
    Pacientes.verifica_data_resultado()  // TODO parametrizar e melhorar entradas
    Pacientes.clica_dropdown_detalhe_hpv_exame()  // TODO parametrizar e melhorar entradas
    Pacientes.clica_ver_resultado_hpv_button()  // TODO parametrizar e melhorar entradas
    
    ResultadoTesteHPV.verifica_page_resultado_hpv()
    Helper.usando_relatorio_verifica_nome_paciente()
    Helper.usando_relatorio_verifica_cpf_com_hifen()
    Helper.usando_relatorio_verifica_resultado_teste_hpv()
    resultadoTesteHPV.verifica_laboratorio_responsavel() // TODO parametrizar e melhorar entradas ## verificar value e Resultado Detectável
    
    })
  })
    
  
  
