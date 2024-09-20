/// <reference types="cypress" />

import Login from '../../support/page/login'


describe('Login Jordana', () => {

    it('Verificando Login', () => {

      Login.realizandoLogin();
      Helper.espera(5000);
      Login.verifica_login_bem_sucedido()
    
    })
  })
