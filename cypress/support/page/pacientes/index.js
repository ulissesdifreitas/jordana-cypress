const elementsPacientes = require ("../../page/pacientes/elements").ELEMENTS;

class Pacientes{

    verifica_page_pacientes(){
        cy.contains(elementsPacientes.PACIENTES_LABEL_TITLE, 'Busca por Pacientes').should('be.visible')

    }

    digita_cpf_field(cpf){
        cy.get(elementsPacientes.CPF_FIELD_INPUT_FILTER).should('be.visible').type(cpf)
    }

    clica_filtrar_button(){
        cy.get(elementsPacientes.FILTRAR_BUTTON).click()
    }
  
}

    export default new Pacientes();