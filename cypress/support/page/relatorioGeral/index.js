const elementsRelatorioGeral = require ("../../page/relatorioGeral/elements").ELEMENTS;
const test_municipio_e2e = Cypress.env("test_municipio_e2e")

class RelatorioGeral{

    verifica_page_relatorio_geral(){
        cy.get('[class$=css-1c9l5hu]').children('h4[class$=css-3d6ecr]').should('have.text', 'Relatório Geral do Teste de HPV').should('be.visible')
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
        cy.wait(5000)
        cy.contains(municipio).click()
    }

    clica_opcao_municipio_e2e(){
        cy.wait(5000)
        cy.contains(test_municipio_e2e).click()
    }

    clica_dropdown_estabelecimento_button(){
        cy.wait(5000)
        cy.get(elementsRelatorioGeral.ESTABELECIMENTO_DROPDOWN_BUTTON).click()
    }
    
    clica_opcao_estabelecimento(estabelecimento){
        cy.wait(5000)
        cy.contains(estabelecimento).click()
    }

    clica_filtrar_button(){
        cy.get(elementsRelatorioGeral.FILTRAR_SUBMIT_BUTTON).click()
    }

    digita_pesquisa_nome_ou_cpf(nome_cpf){
        cy.get(elementsRelatorioGeral.PESQUISAR_NOME_CPF_FIELD_INPUT_FILTER).type(nome_cpf)
    }

    clica_exportar_dropdown_button(){
        cy.get(elementsRelatorioGeral.EXPORTAR_DROPDOWN_BUTTON).click()
    }

    clica_formato_arquivo_exportar(formato){
        cy.contains(formato).click()
    }

    verifica_modal_exportar_relatório_download(){
        cy.contains(elementsRelatorioGeral.MODAL_EXPORTAR_RELATORIO_DOWNLOAD, 'Exportar Relatório Geral de Testes de HPV').should('be.visible')
    }

    verifica_modal_exportar_relatório_download_e2e(){
        cy.contains(elementsRelatorioGeral.MODAL_EXPORTAR_RELATORIO_DOWNLOAD, 'Exportar Relatório Geral de Testes de HPV').should('be.visible')
    }
    

    clica_download_button(){
        cy.get(elementsRelatorioGeral.DOWNLOAD_BUTTON).click()

    }
}

    export default new RelatorioGeral();