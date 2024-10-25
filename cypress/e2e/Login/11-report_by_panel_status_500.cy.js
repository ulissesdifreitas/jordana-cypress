/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from '../../support/page/home'
import Helper from '../../support/helpers'
import Paineis from '../../support/page/paineis'
import RelatorioGeral from '../../support/page/relatorioGeral';

const municipio = 'Amaraji'

describe('Login Jordana', () => {
    
    it('Verifica exibição de paineis filragem por cidade', () => {
        
        Login.realizandoLogin();
        Helper.espera(5000);
        Login.verifica_login_bem_sucedido();
        Home.clica_hamburguer_menu_button();
        Home.clica_paineis_sidemenu_button();
        Home.verifica_submenu_painel_hpv();
        Home.clica_submenu_painel_hpv();
        Paineis.clica_dropdown_estado_button();
        Paineis.clica_opcao_pernambuco();
        Helper.espera(2000)                                 // TODO retirar os Helpers dos arquivos feature.cy.js
        Helper.clica_fora_do_modal()
        Helper.espera(5000)
        Paineis.clica_dropdown_municipio_button();
        Helper.espera(5000)
        Paineis.clica_opcao_municipio(municipio);
        Helper.clica_fora_do_modal()
        Paineis.clica_filtrar_button();
        Helper.espera(5000)
        Paineis.captura_valor_quatidade_testes_hpv()
        Paineis.clica_valor_quantidade_testes_hpv()
        Helper.espera(5000)
        RelatorioGeral.verifica_page_relatorio_geral()

        
    })
    
})