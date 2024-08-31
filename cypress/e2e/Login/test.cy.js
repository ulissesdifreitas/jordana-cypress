/// <reference types="cypress" />

import Login from '../../support/page/login'
import Home from '../../support/page/home'
import Helper from '../../support/helpers'
import RelatorioGeral from '../../support/page/relatorioGeral';
import Pacientes from '../../support/page/pacientes';
import neatCsv from 'neat-csv';

describe('Login Jordana', () => {



    it('Capturando info',()=>{

   
    Login.realizandoLogin()
   
    Helper.espera(5000)  // sempre em milisegundos ex. 5000 = 5 segundos

    Home.clica_hamburguer_menu_button()
    Home.clica_relatorio_sidemenu_button()
    Home.clica_relatorio_geral_submenu_button()

    RelatorioGeral.verifica_page_relatorio_geral()
    RelatorioGeral.clica_dropdown_estado_button()
    RelatorioGeral.clica_opcao_pernambuco()

    Helper.espera(2000)
    Helper.clica_fora_do_modal()
    Helper.espera(5000)

    RelatorioGeral.clica_dropdown_municipio_button()

    Helper.espera(5000)

    RelatorioGeral.clica_opcao_municipio('Amaraji')  // setar como parâmetro
    Helper.clica_fora_do_modal()

    Helper.pausa()


    RelatorioGeral.clica_dropdown_estabelecimento_button()
    RelatorioGeral.clica_opcao_estabelecimento('PSF ALICE BATISTA DOS ANJOS')// setar como parametro            
    Helper.clica_fora_do_modal() 


    RelatorioGeral.clica_filtrar_button()
    
    Helper.espera(8000)
    RelatorioGeral.digita_pesquisa_nome_ou_cpf('MARIA JOSE DE ANDRADE')  // setar como parametro
    Helper.espera(2000)
    RelatorioGeral.clica_filtrar_button()   
    Helper.espera(5000)
    RelatorioGeral.clica_exportar_dropdown_button()
    RelatorioGeral.clica_formato_arquivo_exportar('CSV')

    RelatorioGeral.verifica_modal_exportar_relatório_download()
    RelatorioGeral.clica_download_button()
    Helper.espera(5000)

    let table
    cy.fixture('relatorio-hpv.csv')
    .then(neatCsv)
    .then(data => {                           // TODO: mover arquivo da pasta downloads, para a pasta fixures. e preparar as informações para serem consumidas pelo teste.
      table = data;
      console.table(table);
    })
    cy.pause()
  }) 

  it('Acessando Pacientes', () => {

    Login.realizandoLogin()

    Home.clica_hamburguer_menu_button()

    Home.clica_atendimento_sidemenu_button()
    Home.clica_pacientes_sidemenu_button()
    Helper.espera(2000)

    Pacientes.verifica_page_pacientes()
    
    let cpf = '033.459.524-08'  // colher do csv
    
    Pacientes.digita_cpf_field(cpf)

    Pacientes.clica_filtrar_button()

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
    
  
  
