class Helper{

    espera(time){
        cy.wait(time)
    }

    clica_fora_do_modal(){
        cy.get('[class^="MuiBackdrop-root MuiBackdrop-invisible"]').click({force:true})
    }

    pausa(){
        cy.pause()
    }





    
    }

    export default new Helper();