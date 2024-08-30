/// <reference types="cypress" />


import Home from '../../support/page/login'

describe('Login Jordana', () => {

   

    beforeEach('Realizando Login', () => {

      Home.realizandoLogin()
        // cy.clearAllLocalStorage()
        // cy.clearCookies()
        // cy.visit('https://hmljordana.digitalcare2u.com.br/')
        // cy.wait(3000)
       
        // cy.get('[class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"]').type('04824295343')
        // cy.get('[class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-1uvydh2"]').type('Jordana@2023')
        // cy.get('[data-testid="loginButton"]').click()



        // if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
        //     cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
        // }
        
        // cy.wait(5000)
        // cy.get('[class="MuiTypography-root MuiTypography-h4 jss9 css-1xvinid"]').should('be.visible')
        // cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-5rjaq2"]').click({force:true})
        // cy.wait(3000)
        // cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-5rjaq2"]').click({force:true})
        // cy.wait(3000)
        // cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-5rjaq2"]').click({force:true})

        // cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"').contains('Paraná').invoke('text').then((text) => {
        // expect(text.trim()).to.equal('Paraná') })

        // cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"').contains('Paraná').click()
      
        // cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"').contains('Curitiba').invoke('text').then((text) => {
        // expect(text.trim()).to.equal('Curitiba')})

        // cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"').contains('Curitiba').click()

        // cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"').contains('DIGITAL CARE 2 YOU').invoke('text').then((text) => {
        // expect(text.trim()).to.equal('DIGITAL CARE 2 YOU') })

        // cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"').contains('DIGITAL CARE 2 YOU').scrollIntoView({force:true}).click()

        // if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
        //   cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
        // }

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

      it('Acessando Menu Pacientes e captando um paciente', () => {

        cy.get('[data-testid="hamburguerMenu"]').should('be.visible').click()
  
        cy.get('[data-testid="homeSideButton"]').should('be.visible')

        cy.get('[class="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-1l7cqxi"]').contains('Atendimento').click()

        cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"]').contains('Pacientes').click()
        cy.get('[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-vo88y5"]').find('[class="MuiOutlinedInput-notchedOutline css-igs3ac"]').eq(2).type('Ulisses')
        cy.pause()
        
        cy.get('[class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-yb0lig"').contains('Paraná').invoke('text').then((text) => {
          expect(text.trim()).to.equal('Paraná')
        }).click()

        
        })


})
