const elementsLogin = require ("../../page/login/elements").ELEMENTS;

class Home{

    acessandoLogin(){
        cy.clearAllLocalStorage()
        cy.clearCookies()
        cy.visit('https://hmljordana.digitalcare2u.com.br/')
        cy.wait(3000)
    }


    realizandoLogin(){
        cy.get(elementsLogin.LOGIN_CPF_FIELD).type('04824295343')
        cy.get(elementsLogin.LOGIN_PASSWORD_FIELD).type('Jordana@2023')
        cy.get(elementsLogin.LOGIN_BUTTON).click()

        if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
            cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
        }

        cy.wait(3000)
        cy.get('[class="MuiTypography-root MuiTypography-h4 jss9 css-1xvinid"]').should('be.visible')
    }
}