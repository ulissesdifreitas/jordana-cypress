const elementsRelatorioGeral = require ("../../page/relatorioGeral/elements").ELEMENTS;

class RelatorioGeral{

    verifica_page_relatorio_geral(){
        cy.contains(elementsRelatorioGeral.RELATORIO_GERAL_LABEL_TITLE, 'Relatório Geral de Teste de HPV').should('be.visible')
    }

    clica_dropdown_estado_button(){
        cy.get(elementsRelatorioGeral.ESTADO_DROPDOWN_BUTTON).scrollIntoView().click()
    }

    clica_opcao_pernambuco(){
        cy.get('[data-testid="optionEstado-1"]').click()
    }

    clica_dropdown_municipio_button(){
        cy.get(elementsRelatorioGeral.MUNICIPIO_DROPDOWN_BUTTON).click()
    }

    clica_opcao_municipio(municipio){
        cy.contains(municipio).click()
    }
  
}

    export default new RelatorioGeral();