/// <reference types="cypress" />

import Login from '../../support/page/login'
import Helper from '../../support/helpers'


describe('Verifica Logout no Jordana', () => {

    before('Login', () => {

      Login.realizandoLogin();
      Helper.espera(5000);
      Login.verifica_login_bem_sucedido();
    
    })

    it('Verificação logout e base url', ()=>{

      Login.clica_logout_button();
      Login.verifica_base_url();

    })
  })
