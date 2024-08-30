const elementsLogin = require ("../../page/login/elements").ELEMENTS;

class Login{

    acessandoLogin(){
        cy.clearAllLocalStorage()
        cy.clearCookies()
        cy.visit('https://jordana.digitalcare2u.com.br/')
        cy.wait(3000)
    }


    realizandoLogin(){

    cy.clearAllLocalStorage()
    cy.clearCookies()
    cy.visit('https://jordana.digitalcare2u.com.br/')
    cy.wait(10)
    

    cy.get('[class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"]').type('04824295343')
    cy.get('[class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-1uvydh2"]').type('Jordana@2023')
    cy.get('[data-testid="loginButton"]').click()

    if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
      cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
    }

    cy.wait(2000)
    }}

    export default new Login();