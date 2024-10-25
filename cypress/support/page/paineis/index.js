const elementsPaineis = require("../../page/paineis/elements").ELEMENTS;

class Paineis {

    verifica_tela_paineis() {
        cy.get(elementsPaineis.TITLE_PAGE_PAINEL_TESTE_HPV).should('be.visible')
    }

    clica_dropdown_estado_button() {
        cy.get(elementsPaineis.ESTADO_DROPDOWN_BUTTON).scrollIntoView().click()
    }

    clica_opcao_pernambuco() {
        cy.get('[data-testid="optionEstado-1"]').click()
    }

    clica_dropdown_municipio_button() {
        cy.get(elementsPaineis.MUNICIPIO_DROPDOWN_BUTTON).click()
    }

    clica_opcao_municipio(municipio) {
        cy.wait(5000)
        cy.contains(municipio).click()
    }

    clica_filtrar_button() {
        cy.get(elementsPaineis.FILTRAR_PAINEL_TESTE_HPV_BUTTON).click()
    }

    captura_valor_quatidade_testes_hpv() {
        let textoCapturado;

        cy.get('[data-testid="totalTestsRealized"]') // Use o seletor para encontrar o elemento
            .invoke('text')              // Captura o texto do elemento
            .then((text) => {            // Armazena o texto em uma variável
                textoCapturado = text;
                cy.log('Texto capturado:', textoCapturado); // Exibe o texto no log para conferência
            });
    }

    clica_valor_quantidade_testes_hpv() {
        cy.get('[style^="cursor"]').click()
    }

    leitura_e_contagem_testes_relatorio() {
        // 1. Leitura e contagem de linhas do CSV
        cy.fixture('relatorio-hpv.csv')       // Carrega o arquivo CSV
            .then(neatCsv)                      // Converte o CSV em um array de objetos
            .then((dadosCsv) => {
                const numeroLinhasCsv = dadosCsv.length; // Conta o número de linhas
                cy.log('Número de linhas no CSV:', numeroLinhasCsv);

                // 2. Captura o texto da página
                cy.get('[data-testid="totalTestsRealized"]')    // Substitua pelo seletor correto do elemento que contém o texto
                    .invoke('text')                // Captura o texto do elemento
                    .then((textoCapturado) => {
                        const numeroCapturado = parseInt(textoCapturado, 10); // Converte o texto capturado em número

                        // 3. Compara o número de linhas do CSV com o valor capturado no texto
                        expect(numeroLinhasCsv).to.equal(numeroCapturado); // Verifica se ambos são iguais
                        cy.log(`O valor capturado (${numeroCapturado}) é igual ao número de linhas (${numeroLinhasCsv}) no CSV.`);
                    });
            });

    }

}

export default new Paineis();