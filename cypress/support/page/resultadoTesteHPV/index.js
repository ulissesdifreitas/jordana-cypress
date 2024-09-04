const elementsResultadoTesteHPV = require ("../../page/resultadoTesteHPV/elements").ELEMENTS;

class ResultadoTesteHPV{

    verifica_page_resultado_hpv(){
        cy.contains(elementsResultadoTesteHPV.RESULTADO_TESTE_HPV_LABEL_TITLE, "Resultado do Teste de HPV").should('be.visible')
    }

    verifica_nome_paciente_resultado_hpv(nomePaciente){
        cy.contains(elementsResultadoTesteHPV.NOME_PACIENTE_RESULTADO, nomePaciente).should('be.visible')
    }

    verifica_cpf_paciente_resultado_hpv(cpf){
        cy.get(elementsResultadoTesteHPV.CPF_PACIENTE_RESULTADO).invoke('text').then(($value3) => {
            expect($value3).to.eq(cpf.replace(".", "").replace(".", ""))
          })
    }

    verifica_resultado_teste_hpv(){
        cy.get('[data-testid="rhpv-resultado"]').should('have.value', "POSITIVO")
    }

    verifica_laboratorio_responsavel(){
        cy.get('[data-testid="rhpv-laboratorio"]').should('have.value', "LAB CENTRAL DE SAUDE PUB DR MILTON BEZERRA SOBRAL LACEN")
    }
}

export default new ResultadoTesteHPV();