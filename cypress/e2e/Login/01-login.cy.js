/// <reference types="cypress" />

import Login from '../../support/page/login'
import Helper from '../../support/helpers'


describe('Login Jordana', () => {

    it('Verificando Login', () => {

      Login.realizandoLogin();
      Helper.espera(5000);
      Login.verifica_login_bem_sucedido()
    
    })
  })
