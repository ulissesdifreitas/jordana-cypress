const elementsHome = require ("../../page/home/elements").ELEMENTS;

class Home{

    clica_hamburguer_menu_button(){
        cy.get(elementsHome.HAMBURGUER_MENU_BUTTON).should('be.visible').click()
    }

    clica_relatorio_sidemenu_button(){
        cy.get(elementsHome.RELATORIO_SIDEMENU_BUTTON).should('be.visible').click()
    }

    clica_relatorio_geral_submenu_button(){
        cy.get(elementsHome.RELATORIOGERAL_SUBMENU_BUTTON).should('be.visible').click()
    }

    clica_atendimento_sidemenu_button(){
        cy.get(elementsHome.ATENDIMENTO_SIDEMENU_BUTTON).should('be.visible').click()
    }

    clica_pacientes_sidemenu_button(){
        cy.get(elementsHome.PACIENTES_SUBMENU_BUTTON).should('be.visible').click()
    }

    clica_paineis_sidemenu_button(){
        cy.get(elementsHome.PAINEIS_SIDE_MENU_BUTTON).should('be.visible').click()
    }

    clica_submenu_painel_hpv(){
        cy.get(elementsHome.PAINEL_TESTE_HPV_SIDE_MENU).should('be.visible').click()
    }

    verifica_hamburguer_home_button(){
        cy.get(elementsHome.HAMBURGUER_MENU_BUTTON).should('be.visible')
    }

    verifica_home_side_menu(){
        cy.get(elementsHome.HOME_SIDEMENU_BUTTON).should('be.visible')
    }

    verifica_atendimento_side_menu(){
        cy.get(elementsHome.ATENDIMENTO_SIDEMENU_BUTTON).should('be.visible')
    }

    verifica_relatorio_side_menu(){
        cy.get(elementsHome.RELATORIO_SIDEMENU_BUTTON).should('be.visible')
    }

    verifica_submenu_pacientes(){
        cy.get(elementsHome.PACIENTES_SUBMENU_BUTTON).should('be.visible')
    }

    verifica_relatoriogeral_submenu_menu(){
        cy.get(elementsHome.RELATORIOGERAL_SUBMENU_BUTTON).should('be.visible')
    }

    verifica_paineis(){ 
        cy.get(elementsHome.PAINEIS_SIDE_MENU_BUTTON).should('be.visible')
    }

    verifica_submenu_painel_hpv(){
        cy.get(elementsHome.PAINEL_TESTE_HPV_SIDE_MENU).should('be.visible')
    }
  
}

    export default new Home();