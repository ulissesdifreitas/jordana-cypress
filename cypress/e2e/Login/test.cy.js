/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from '../../support/page/home'
import Helper from '../../support/helpers'
import relatorioGeral from '../../support/page/relatorioGeral';
import neatCsv from 'neat-csv';

describe('Login Jordana', () => {



    it('Capturando info',()=>{

   
    Login.realizandoLogin()
   
    Helper.espera(5000)  // sempre em milisegundos ex. 5000 = 5 segundos

    Home.clica_hamburguer_menu_button()
    Home.clica_relatorio_sidemenu_button()
    Home.clica_relatorio_geral_submenu_button()

    relatorioGeral.verifica_page_relatorio_geral()
    relatorioGeral.clica_dropdown_estado_button()
    relatorioGeral.clica_opcao_pernambuco()

    Helper.espera(2000)
    Helper.clica_fora_do_modal()
    Helper.espera(5000)

    relatorioGeral.clica_dropdown_municipio_button()

    Helper.espera(5000)

    relatorioGeral.clica_opcao_municipio('Amaraji')  // setar como parâmetro
    Helper.clica_fora_do_modal()


    cy.get('[data-testid="modalEstabelecimentoDropdownButton"]').click()
    cy.contains('PSF ALICE BATISTA DOS ANJOS').click()              // setar como parametro
    Helper.clica_fora_do_modal()


    cy.get('[data-testid="submitFilterReportsHpv"]').click()
    cy.wait(8000)
    cy.get('[data-testid="inputSearchByNameCpf"]').type('MARIA JOSE DE ANDRADE') // setar como parametro
    cy.wait(5000)
    cy.get('[data-testid="submitFilterReportsHpv"]').click()
    cy.wait(5000)
    cy.get('[data-testid="exportButtonDropdown"]').click()
    cy.contains('CSV').click()

    cy.get('[data-testid="FileDownloadIcon"]').click()
    cy.wait(5000)

    let table
    cy.fixture('relatorio-hpv.csv')
    .then(neatCsv)
    .then(data => {
      table = data;
      console.table(table);
    })
    cy.pause()
  }) 

  it('Acessando Pacientes', () => {

    Login.realizandoLogin()

    cy.get('[data-testid="hamburguerMenu"]').should('be.visible').click()

    cy.get('[data-testid="atendimentoButton"]').should('be.visible').click()
    cy.get('[ data-testid="atendimentoPacienteButton"]').should('be.visible').click()

    cy.wait(2000)

    cy.contains('[data-testid="pacientesList"]', 'Busca por Pacientes').should('be.visible')
    
    let cpf = '033.459.524-08'  // colher do csv
    
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

    cy.get('[data-testid="exam-1-name"]').should('have.text', "Teste de HPV")

    let dataResultadoExame;
    cy.get('[data-testid="exam-1-data"]').invoke('text').then(($dataResultadoExame) => {
        dataResultadoExame = $dataResultadoExame
        cy.log(dataResultadoExame)
    });
    cy.get('[data-testid="exam-1-collapse"]').should('be.visible').click()
    cy.get('[data-testid="button-1-ver_resultado"]').should('be.visible').click()

    cy.contains('[data-testid="rhpv-title"]', "Resultado do Teste de HPV").should('be.visible')

    let nomePaciente = "MARIA JOSE DE ANDRADE"  // colher do csv
  
    cy.contains('[data-testid="rhpv-paciente_nome"]', nomePaciente).should('be.visible')
    
    cy.get('[data-testid="rhpv-paciente_cpf"]').invoke('text').then(($value3) => {
          expect($value3).to.eq(cpf.replace(".", "").replace(".", ""))
        })

    cy.get('[data-testid="rhpv-resultado"]').should('have.value', "POSITIVO")  // verificar value e Resultado Detectável
    cy.get('[data-testid="rhpv-laboratorio"]').should('have.value', "LAB CENTRAL DE SAUDE PUB DR MILTON BEZERRA SOBRAL LACEN")
   



    })
  })
    
  
  
