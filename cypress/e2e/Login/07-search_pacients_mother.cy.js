/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from '../../support/page/home'
import Helper from '../../support/helpers'
import Pacientes from '../../support/page/pacientes';


describe('Login Jordana', () => {

    before('Login', () => {

      Login.realizandoLogin();
      Helper.espera(5000);
      Login.verifica_login_bem_sucedido();

    })

    it('Verifica busca por paciente usando campo "Nome da Mãe"', ()=> {

      Home.clica_hamburguer_menu_button();
      Home.clica_atendimento_sidemenu_button();
      Home.clica_pacientes_sidemenu_button();
      Helper.espera(2000);
      Pacientes.verifica_page_pacientes();
      Pacientes.digita_nome_mae_e2e();
      Pacientes.clica_filtrar_button();
      Pacientes.verifica_nome_mae_e2e();
      
    })
  })
