/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from '../../support/page/home'
import Helper from '../../support/helpers'

describe('Login Jordana', () => {

    before('Login', () => {

        Login.realizandoLogin();
        Helper.espera(5000);
        Login.verifica_login_bem_sucedido();
  
      })

    it('Verifica visualização dos paineis', () => {

        Home.clica_hamburguer_menu_button();
        Home.clica_paineis_sidemenu_button();
        Home.verifica_submenu_painel_hpv();
        Home.clica_submenu_painel_hpv();
        
    })
    
})