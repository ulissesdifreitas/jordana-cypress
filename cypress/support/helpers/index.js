import neatCsv from 'neat-csv';

class Helper {

    espera(time) {
        cy.wait(time)
    }

    clica_fora_do_modal() {
        cy.get('[class^="MuiBackdrop-root MuiBackdrop-invisible"]').click({ force: true })
    }

    pausa() {
        cy.pause()
    }


    movendo_arquivo_de_downloads_para_fixtures(nomeDoArquivo) {
       
        cy.task('moveFile', { fileName: nomeDoArquivo }).then((result) => {
            if (result.success) {
              cy.log('Arquivo movido com sucesso!');
            } else {
              cy.log('Erro ao mover o arquivo: ' + result.message);
            }
      
            // Opcional: Verificar se o arquivo agora existe na pasta fixtures
            cy.readFile(`cypress/fixtures/${nomeDoArquivo}`).should('exist');
          });

    }

    leitura_dados_relatorio(){
        let table
        cy.fixture('relatorio-hpv.csv')
        .then(neatCsv)
        .then(data => {                           // TODO: mover arquivo da pasta downloads, para a pasta fixures. e preparar as informações para serem consumidas pelo teste.
          table = data;
          console.table(table);
        })
    }





}

export default new Helper();