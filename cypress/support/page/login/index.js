const elementsLogin = require ("../../page/login/elements").ELEMENTS;
const prod_url = Cypress.env("prod_url")
const prod_test_user = Cypress.env("prod_test_user")
const prod_password = Cypress.env("prod_password")

class Login{

    acessandoLogin(){
        cy.clearAllLocalStorage()
        cy.clearCookies()
        cy.visit(prod_url)
        cy.wait(3000)
    }


    realizandoLogin(){

    cy.clearAllLocalStorage()
    cy.clearCookies()
    cy.visit(prod_url)
    cy.wait(10)
    

    cy.get(elementsLogin.LOGIN_CPF_FIELD).type(prod_test_user)
    cy.get(elementsLogin.LOGIN_PASSWORD_FIELD).type(prod_password)
    cy.get(elementsLogin.LOGIN_BUTTON).click()

    if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
      cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
    }

    cy.wait(2000)
    }

    verifica_login_bem_sucedido(){
      cy.get(elementsLogin.HOME_LABEL).should('be.visible')
    }

    clica_logout_button(){
      cy.get(elementsLogin.LOGOUT_BUTTON).should('be.visible').click()
    }

    verifica_base_url(){
      cy.url('be.equal', prod_url)
    }

  }
    export default new Login();