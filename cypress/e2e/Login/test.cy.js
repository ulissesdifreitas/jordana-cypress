/// <reference types="cypress" />

describe('Login Jordana', () => {



    it('teste',()=>{

    cy.visit('https://jordana.digitalcare2u.com.br/')
    cy.wait(10)
    

    cy.get('[class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"]').type('04824295343')
    cy.get('[class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-1uvydh2"]').type('Jordana@2023')
    cy.get('[data-testid="loginButton"]').click()

    if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
      cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
    }

    cy.wait(5000)

    cy.get('[data-testid="hamburguerMenu"]').should('be.visible').click()

    cy.get('[data-testid="relatóriosButton"]').should('be.visible').click()
    cy.get('[data-testid="relatorioGeralButton"]').should('be.visible').click()

    cy.contains('.css-1c9l5hu', 'Relatório Geral de Teste de HPV').should('be.visible')

    cy.get('[data-testid="modalEstadoInput"] > .MuiOutlinedInput-root > [data-testid="modalEstadoDropdownButton"] > [data-testid="ArrowDropDownIcon"]').scrollIntoView().click()

    cy.get('[data-testid="optionEstado-1"]').click()

    cy.wait(2000)
    cy.contains('.css-1c9l5hu', 'Relatório Geral de Teste de HPV').should('be.visible').click({force:true})
    cy.wait(2000)
    cy.contains('.css-1c9l5hu', 'Relatório Geral de Teste de HPV').scrollIntoView().click({force:true})
    cy.get('[class="MuiModal-root MuiPopover-root MuiMenu-root css-1dfuww7"]').click('center', {force:true})
    cy.get('#root').click({force:true})
    cy.get('[data-testid="submitFilterReportsHpv"]').click({force:true})
    cy.get('[data-testid="submitFilterReportsHpv"]').click({force:true})
    cy.get('[data-testid="submitFilterReportsHpv"]').click({force:true})
    cy.get('[data-testid="submitFilterReportsHpv"]').click({force:true})
    cy.get('[data-testid="submitFilterReportsHpv"]').click({force:true})
    cy.get('[data-testid="submitFilterReportsHpv"]').click({force:true})
    cy.get('[class^="MuiBackdrop-root MuiBackdrop-invisible"]').click({force:true})

    cy.pause()

    cy.get('[data-testid="modalMunicipioInput"] > .MuiOutlinedInput-root').scrollIntoView().should('be.visible').click()



  }) 
    
  
  
  })