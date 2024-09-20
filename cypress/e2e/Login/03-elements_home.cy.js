/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from'../../support/page/home'


describe('Verifica elementos na Tela Home-Jordana', () => {

    before('Login', () => {

      Login.realizandoLogin();
      Helper.espera(5000);
      Login.verifica_login_bem_sucedido();
      Home.verifica_login_bem_sucedido();
      
    })

    it('Verificação de elementos', ()=>{
      Home.clica_hamburguer_menu_button();
      Home.verifica_home_side_menu();
      Home.verifica_atendimento_side_menu();
      Home.verifica_relatorio_side_menu();
      Home.clica_atendimento_sidemenu_button();
      Home.verifica_submenu_pacientes();
      Home.clica_atendimento_sidemenu_button();
      Home.clica_relatorio_sidemenu_button();
      Home.verifica_relatoriogeral_submenu_menu();

    })
  })