const elementsPacientes = require ("../../page/pacientes/elements").ELEMENTS;

class Pacientes{

    verifica_page_pacientes(){
        cy.contains(elementsPacientes.PACIENTES_LABEL_TITLE, 'Busca por Pacientes').should('be.visible')
    }

    verifica_resultado_filtro(){
        cy.get(elementsPacientes.LINHA_01_LISTAGEM_PACIENTES).should('be.visible')
    }

    verifica_cpf_paciente_relatorio(cpf){
        cy.get(elementsPacientes.DADO_CPF).invoke('text').then(($value) => {
            expect($value).to.eq(cpf)
          })
    }

    verifica_ficha_paciente(){
        cy.contains(elementsPacientes.FICHA_PACIENTE_LABEL_TITLE, 'Ficha da Paciente').should('be.visible')
    }

    verifica_cpf_ficha_paciente(cpf){
        cy.get(elementsPacientes.INFO_PESSOA_CPF).invoke('text').then(($value2) => {
            expect($value2).to.eq(cpf.replace(".", "").replace(".", "").replace("-", ""))
          })
    }

    verifica_teste_hpv_existente(){
        cy.contains('Teste de HPV')
    }

    verifica_teste_hpv_disponivel(){
        cy.get('[data-testid="exam-1-name"]').should('have.text', "Teste de HPV")
    }

    verifica_data_resultado(){
        let dataResultadoExame; // TODO parametrizar 
        cy.get('[data-testid="exam-1-data"]').invoke('text').then(($dataResultadoExame) => {
            dataResultadoExame = $dataResultadoExame
            cy.log(dataResultadoExame)
        });
    }

    digita_cpf_field(cpf){
        cy.get(elementsPacientes.CPF_FIELD_INPUT_FILTER).should('be.visible').type(cpf)
    }

    clica_filtrar_button(){
        cy.get(elementsPacientes.FILTRAR_BUTTON).click()
    }

    clica_visualizar_ficha_paciente(){
        cy.get(elementsPacientes.FICHA_PACIENTE_LINHA_01).should('be.visible').click()
    }

    clica_exames_coletados_button(){
        cy.get(elementsPacientes.TAB_EXAMES_COLETADOS).should('be.visible').click()
    }

    clica_dropdown_detalhe_hpv_exame(){
        cy.get('[data-testid="exam-1-collapse"]').should('be.visible').click()
    }


    clica_ver_resultado_hpv_button(){
        cy.get('[data-testid="button-1-ver_resultado"]').should('be.visible').click()
    }
  
}

    export default new Pacientes();