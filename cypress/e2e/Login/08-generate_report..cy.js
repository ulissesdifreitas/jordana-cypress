/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from '../../support/page/home'
import Helper from '../../support/helpers'
import RelatorioGeral from '../../support/page/relatorioGeral'


describe('Login Jordana', () => {

    before('Login', () => {

      Login.realizandoLogin();
      Helper.espera(5000);
      Login.verifica_login_bem_sucedido();

    })

    it('Verifica funcionalidade de gerar Relatório Geral de Teste de HPV', ()=> {

      Home.clica_hamburguer_menu_button();
      Home.clica_relatorio_sidemenu_button();
      Home.clica_relatorio_geral_submenu_button();
      RelatorioGeral.verifica_page_relatorio_geral();
      RelatorioGeral.clica_dropdown_estado_button()
      RelatorioGeral.clica_opcao_pernambuco()
      Helper.espera(2000)                              
      Helper.clica_fora_do_modal()
      Helper.espera(5000)
      RelatorioGeral.clica_dropdown_municipio_button()
      Helper.espera(5000)
      RelatorioGeral.clica_opcao_municipio_e2e()
      Helper.clica_fora_do_modal()
      RelatorioGeral.clica_filtrar_button()
      Helper.espera(8000)
      RelatorioGeral.clica_exportar_dropdown_button()
      RelatorioGeral.clica_formato_arquivo_exportar('CSV')
      RelatorioGeral.verifica_modal_exportar_relatório_download_e2e()
      RelatorioGeral.clica_download_button()
      Helper.espera(5000)
      Helper.movendo_arquivo_de_downloads_para_fixtures('relatorio-hpv.csv')
      Helper.leitura_dados_relatorio()
      
    })
  })
