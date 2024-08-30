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
  
}

    export default new Home();