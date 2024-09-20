/// <reference types="cypress" />

import login from '../../support/page/login';
import Login from '../../support/page/login'


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
