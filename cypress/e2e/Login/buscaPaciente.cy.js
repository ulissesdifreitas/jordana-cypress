/// <reference types="cypress" />

describe('Login Jordana', () => {

    before('Login', () => {
        cy.visit('https://jordana.digitalcare2u.com.br/')
    cy.wait(10)
    

    cy.get('[class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"]').type('04824295343')
    cy.get('[class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-1uvydh2"]').type('Jordana@2023')
    cy.get('[data-testid="loginButton"]').click()

    if (cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]')){
      cy.get('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-esvfka"]').click() 
    }

    cy.wait(2000)
    })

    it('Acessando Pacientes', () => {

    cy.get('[data-testid="hamburguerMenu"]').should('be.visible').click()

    cy.get('[data-testid="atendimentoButton"]').should('be.visible').click()
    cy.get('[ data-testid="atendimentoPacienteButton"]').should('be.visible').click()

    cy.wait(2000)

    cy.contains('[data-testid="pacientesList"]', 'Busca por Pacientes').should('be.visible')
    
    let cpf = '033.459.524-08'
    
    cy.get('[data-testid="cpfField"]').should('be.visible').type(cpf)
   
    cy.get('[data-testid="filterButton"]').click()

    cy.get('[data-testid="row-0-cpf"]').should('be.visible')


    cy.get('[data-testid="row-0-cpf"]').invoke('text').then(($value) => {
        expect($value).to.eq(cpf)
      })

    cy.get('[data-testid="button-0-ficha"]').should('be.visible').click()

    cy.wait(2000)
    cy.contains('[data-testid="ficha-paciente"]', 'Ficha da Paciente').should('be.visible')

    cy.get('[data-testid="info-cpf"]').invoke('text').then(($value2) => {
        expect($value2).to.eq(cpf.replace(".", "").replace(".", "").replace("-", ""))
      })

    cy.get('[data-testid="examesColetadosButton"]').should('be.visible').click()

    cy.contains('Teste de HPV')
    // cy.get('[data-testid^="exam-item-card-"]').should('deep.equal', 'Teste de HPV')

    cy.get('[data-testid="exam-1-name"]').should('have.text', "Teste de HPV")

    let dataResultadoExame;
    cy.get('[data-testid="exam-1-data"]').invoke('text').then(($dataResultadoExame) => {
        dataResultadoExame = $dataResultadoExame
        cy.log(dataResultadoExame)
    });
    cy.get('[data-testid="exam-1-collapse"]').should('be.visible').click()
    cy.get('[data-testid="button-1-ver_resultado"]').should('be.visible').click()

    cy.contains('[data-testid="rhpv-title"]', "Resultado do Teste de HPV").should('be.visible')

    let nomePaciente = "MARIA JOSE DE ANDRADE"
  
    cy.contains('[data-testid="rhpv-paciente_nome"]', nomePaciente).should('be.visible')
    
    cy.get('[data-testid="rhpv-paciente_cpf"]').invoke('text').then(($value3) => {
          expect($value3).to.eq(cpf.replace(".", "").replace(".", ""))
        })

    cy.get('[data-testid="rhpv-resultado"]').should('have.value', "POSITIVO")
    cy.get('[data-testid="rhpv-laboratorio"]').should('have.value', "LAB CENTRAL DE SAUDE PUB DR MILTON BEZERRA SOBRAL LACEN")
    cy.get('[data-testid="rhpv-data"]').invoke('val').then(($dataExame) => {
        let dataExame = $dataExame.toString();
        expect(dataExame).to.eq(dataResultadoExame)
    })



    })
})