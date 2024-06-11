/// <reference types="cypress" />


import Home from '../../support/page/login'

describe('Login Jordana', () => {

   

    beforeEach('Realizando Login', () => {


        cy.clearAllLocalStorage()
        cy.clearCookies()
        cy.visit('https://hmljordana.digitalcare2u.com.br/')
        cy.wait(3000)
       
        cy.get('[class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"]').type('04824295343')
        cy.get('[class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-1uvydh2"]').type('Jordana@2023')
        cy.get('[data-testid="loginButton"]').click()



        if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
            cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
        }
        
        cy.wait(1000)
        cy.get('[class="MuiTypography-root MuiTypography-h4 jss9 css-1xvinid"]').should('be.visible')

      })

      it('Validando side menu', () => {

      cy.get('[data-testid="hamburguerMenu"]').should('be.visible').click()

      cy.get('[data-testid="homeSideButton"]').should('be.visible')

      cy.get('[data-testid="paineisButton"]').should('be.visible').click()
      cy.get('[data-testid="painelRastreamentoButton"]').should('be.visible')
      cy.get('[data-testid="painelTesteButton"]').should('be.visible')

      cy.get('[data-testid="relatóriosButton"]').should('be.visible').click()
      cy.get('[data-testid="relatorioGeralButton"]').should('be.visible')
      cy.get('[data-testid="relatorioRastreamentoButton"]').scrollIntoView()
      .should('be.visible')



      })

      it.only('acessando paineis rastreamento', () => {

        cy.wait(2000)
        cy.get('[data-testid="hamburguerMenu"]').should('be.visible').click()
  
        cy.get('[data-testid="homeSideButton"]').should('be.visible')
  
        cy.get('[data-testid="paineisButton"]').should('be.visible').click()
        
        cy.get('[data-testid="painelRastreamentoButton"]').should('be.visible').click()
        
        cy.get('[data-testid="panelTrackingHpvTitle"]').should('be.visible')
       
        cy.get('[data-testid="modalEstadoDropdownButton"]').click()
        
        cy.get('[data-testid="optionEstado-1"]').click()
        
        cy.get('[data-testid="modalMunicipioDropdownButton"]').click({ force: true })
        
        cy.get('[data-testid="modalMunicipioInput"] > .MuiOutlinedInput-root')
        
        //cy.get('[data-testid="modalMunicipioInput"]').click()
        
        cy.contains('Amaraji').click()
        
        cy.get('[data-testid="submitFilterPanelTrackingHpv"]').click({ force: true })
        
        cy.wait(15000)
        cy.get('[data-testid="submitFilterPanelTrackingHpv"]').click({ force: true })
        cy.get('[data-testid="submitFilterPanelTrackingHpv"]').click({ force: true })
        
        cy.get('.css-1eeun7e').scrollIntoView()
        cy.wait(15000)
        })


})
