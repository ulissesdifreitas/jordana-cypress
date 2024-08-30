/// <reference types="cypress" />


import Login from '../../support/page/login'

describe('Login Jordana', () => {

   

    beforeEach('Realizando Login', () => {


      Login.realizandoLogin()

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
        cy.wait(30000)
        cy.contains('Amaraji').click()
        
        cy.get('[data-testid="submitFilterPanelTrackingHpv"]').click({ force: true })
        
        cy.wait(15000)
        cy.get('[data-testid="submitFilterPanelTrackingHpv"]').click({ force: true })
        cy.get('[data-testid="submitFilterPanelTrackingHpv"]').click({ force: true })
        
        cy.get('.css-1eeun7e').scrollIntoView()
        cy.wait(15000)
        })


})
