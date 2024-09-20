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

  leitura_dados_relatorio() {
    cy.fixture('relatorio-hpv.csv')
      .then(neatCsv)
      .as('tableData')
  }

  verifica_download_relatorio(){
    cy.readFile('cypress/downloads/relatorio-hpv.csv').should('exist')
  }

  usando_relatorio_digitando_cpf() {
    cy.get('@tableData').then(table => {
      console.log('Dados da tabela: ', table);
      table.forEach((linha, index) => {
        const nomePaciente = linha.paciente_nome;
        const cpfPaciente = linha.paciente_cpf;
        const statusExamePaciente = linha.exame_status;
        const resultadoExamePaciente = linha.resultado_status;

        console.log(`Linha ${index + 1}:`);
        console.log('Nome da Paciente do CSV:', nomePaciente);
        console.log('CPF da paciente:', cpfPaciente);
        console.log('Status Exame:', statusExamePaciente);
        console.log('Resultado Exame:', resultadoExamePaciente);

        this.digita_cpf_field(cpfPaciente)
      })
    })
  }

  digita_cpf_field(cpfPaciente) {
    cy.get('[data-testid="cpfField"]').should('be.visible').type(cpfPaciente)
  }

  usando_relatorio_verifica_cpf_paciente() {
    cy.get('@tableData').then(table => {
      console.log('Dados da tabela: ', table);
      table.forEach((linha) => {
        const cpfPaciente = linha.paciente_cpf;

        this.verifica_cpf_paciente_relatorio(cpfPaciente)

      })
    })
  }

  verifica_cpf_paciente_relatorio(cpfPaciente) {
    cy.get('[data-testid="row-0-cpf"]').invoke('text').then(($value) => {
      expect($value).to.eq(cpfPaciente.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4"))
    })

  }

  usando_relatorio_verifica_cpf_sem_ponto_hifen() {
    cy.get('@tableData').then(table => {
      console.log('Dados da tabela: ', table);
      table.forEach((linha) => {
        const cpfPaciente = linha.paciente_cpf;

        this.verifica_cpf_sem_ponto_hifen(cpfPaciente)

      })
    })
  }

  verifica_cpf_sem_ponto_hifen(cpfPaciente) {
    cy.get('[data-testid="info-cpf"]').invoke('text').then(($value) => {
      expect($value).to.eq(cpfPaciente)
    })
  }

  usando_relatorio_verifica_cpf_com_hifen() {
    cy.get('@tableData').then(table => {
      console.log('Dados da tabela: ', table);
      table.forEach((linha) => {
        const cpfPaciente = linha.paciente_cpf;

        this.verifica_cpf_com_hifen(cpfPaciente)

      })
    })
  }

  verifica_cpf_com_hifen(cpfPaciente) {
    cy.get('[data-testid="rhpv-paciente_cpf"]').invoke('text').then(($value) => {
      expect($value).to.eq(cpfPaciente.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1$2$3-$4"))
    })
  }

  usando_relatorio_verifica_nome_paciente() {
    cy.get('@tableData').then(table => {
      console.log('Dados da tabela: ', table);
      table.forEach((linha, index) => {
        const nomePaciente = linha.paciente_nome;

        this.verifica_nome_paciente(nomePaciente)

      })
    })
  }

  verifica_nome_paciente(nomePaciente){
    cy.contains('[data-testid="rhpv-paciente_nome"]', nomePaciente).should('be.visible')
  }

  usando_relatorio_verifica_resultado_teste_hpv(){
    cy.get('@tableData').then(table => {
      console.log('Dados da tabela: ', table);
      table.forEach((linha) => {
        const resultadoExamePaciente = linha.resultado_status;

        

        this.verifica_resultado_teste_hpv(resultadoExamePaciente)
      })
    })
  }

  verifica_resultado_teste_hpv(resultadoExamePaciente){
    if(cy.get('[data-testid="rhpv-resultado"]').should('have.value', "POSITIVO") && resultadoExamePaciente == "DETECTÁVEL"){
      cy.log("Passou")
    }
    else{
      cy.log("Errou na verificação")
    }
    
  }

}

export default new Helper();