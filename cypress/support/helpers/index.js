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

  verifica_download_relatorio() {
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

  verifica_nome_paciente(nomePaciente) {
    cy.contains('[data-testid="rhpv-paciente_nome"]', nomePaciente).should('be.visible')
  }

  usando_relatorio_verifica_resultado_teste_hpv() {
    cy.get('@tableData').then(table => {
      console.log('Dados da tabela: ', table);
      table.forEach((linha) => {
        const resultadoExamePaciente = linha.resultado_status;



        this.verifica_resultado_teste_hpv(resultadoExamePaciente)
      })
    })
  }

  verifica_resultado_teste_hpv(resultadoExamePaciente) {
    if (cy.get('[data-testid="rhpv-resultado"]').should('have.value', "POSITIVO") && resultadoExamePaciente == "DETECTÁVEL") {
      cy.log("Passou")
    }
    else {
      cy.log("Errou na verificação")
    }

  }

  leitura_e_contagem_testes_relatorio() {
    // 1. Leitura e contagem de linhas do CSV
    cy.fixture('relatorio-hpv.csv')       // Carrega o arquivo CSV
      .then(neatCsv)                      // Converte o CSV em um array de objetos
      .then((dadosCsv) => {
        const numeroLinhasCsv = dadosCsv.length; // Conta o número de linhas
        cy.log('Número de linhas no CSV:', numeroLinhasCsv);

        // 2. Captura o texto da página
        cy.get('[data-testid="totalTestsRealized"]')    // Substitua pelo seletor correto do elemento que contém o texto
          .invoke('text')                // Captura o texto do elemento
          .then((textoCapturado) => {
            const numeroFormatado = textoCapturado.replace(/[.,\s]/g, ''); // Remove vírgulas, pontos e espaços
            const numeroCapturado = parseInt(numeroFormatado, 10); // Converte o texto capturado em número

            // 3. Compara o número de linhas do CSV com o valor capturado no texto
            expect(numeroLinhasCsv).to.equal(numeroCapturado); // Verifica se ambos são iguais
            cy.log(`O valor capturado (${numeroCapturado}) é igual ao número de linhas (${numeroLinhasCsv}) no CSV.`);
          });
      });

  }

  leitura_e_contagem_resultado_nao_detectável() {
    // 1. Captura o valor da tela e armazena na variável
    cy.get('[data-testid="labelAndValueNotDetectabel"]')    // Substitua pelo seletor correto do elemento que contém o valor
      .invoke('text')                // Captura o texto do elemento
      .then((textoCapturado) => {
        const resultado_não_detectável = textoCapturado.replace(/\D/g, '').trim();  // Armazena o valor capturado na variável
        cy.log('Valor capturado na tela:', resultado_não_detectável);

        // 2. Leitura e contagem de ocorrências "NÃO DETECTÁVEL" no CSV
        cy.fixture('relatorio-hpv.csv')     // Carrega o arquivo CSV
          .then(neatCsv)                    // Converte o CSV em um array de objetos
          .then((dadosCsv) => {
            const ocorrenciasNaoDetectavel = dadosCsv.filter(linha => linha.resultado_status === 'NÃO DETECTÁVEL').length;
            cy.log('Número de ocorrências "NÃO DETECTÁVEL" no CSV:', ocorrenciasNaoDetectavel);

            // 3. Comparação do valor capturado na tela com o número de ocorrências no CSV
            expect(parseInt(resultado_não_detectável, 10)).to.equal(ocorrenciasNaoDetectavel); // Verifica se ambos são iguais
            cy.log(`O valor capturado (${resultado_não_detectável}) é igual ao número de ocorrências (${ocorrenciasNaoDetectavel}) no CSV.`);
          });
      });
  }

  leitura_e_contagem_resultado_detectável() {
    // 1. Captura o valor da tela e armazena na variável 'resultado_detectável'
    cy.get('[data-testid="labelAndValueNotDetectabel"]')    // Substitua pelo seletor correto do elemento que contém o valor
      .invoke('text')                // Captura o texto do elemento
      .then((textoCapturado) => {
        const resultado_detectável = textoCapturado.replace(/\D/g, '').trim();  // Remove tudo que não for número e formata o texto
        cy.log('Valor capturado na tela (apenas números):', resultado_detectável);

        // 2. Leitura e contagem de ocorrências "N/C" no CSV
        cy.fixture('relatorio-hpv.csv')     // Carrega o arquivo CSV
          .then(neatCsv)                    // Converte o CSV em um array de objetos
          .then((dadosCsv) => {
            const ocorrenciasNC = dadosCsv.filter(linha => linha.resultado_status === 'N/C').length;
            cy.log('Número de ocorrências "N/C" no CSV:', ocorrenciasNC);

            // 3. Comparação do valor capturado na tela com o número de ocorrências "N/C" no CSV
            expect(parseInt(resultado_detectável, 10)).to.equal(ocorrenciasNC); // Verifica se ambos são iguais
            cy.log(`O valor capturado (${resultado_detectável}) é igual ao número de ocorrências (${ocorrenciasNC}) no CSV.`);
          });
      });
  }

  leitura_e_contagem_resultado_inconclusivo() {
    // 1. Captura o valor da tela e armazena na variável 'resultado_inconclusivo'
    cy.get('[data-testid="labelAndValueNotConcluded"]')    // Substitua pelo seletor correto do elemento que contém o valor
      .invoke('text')                // Captura o texto do elemento
      .then((textoCapturado) => {
        const resultado_inconclusivo = textoCapturado.replace(/\D/g, '').trim();  // Remove tudo que não for número e formata o texto
        cy.log('Valor capturado na tela (apenas números):', resultado_inconclusivo);

        // 2. Leitura e contagem de ocorrências "INCONCLUSIVO" no CSV
        cy.fixture('relatorio-hpv.csv')     // Carrega o arquivo CSV
          .then(neatCsv)                    // Converte o CSV em um array de objetos
          .then((dadosCsv) => {
            const ocorrenciasInconclusivo = dadosCsv.filter(linha => linha.resultado_status === 'INCONCLUSIVO').length;
            cy.log('Número de ocorrências "INCONCLUSIVO" no CSV:', ocorrenciasInconclusivo);

            // 3. Comparação do valor capturado na tela com o número de ocorrências "INCONCLUSIVO" no CSV
            expect(parseInt(resultado_inconclusivo, 10)).to.equal(ocorrenciasInconclusivo); // Verifica se ambos são iguais
            cy.log(`O valor capturado (${resultado_inconclusivo}) é igual ao número de ocorrências (${ocorrenciasInconclusivo}) no CSV.`);
          });
      });
  }

  leitura_e_contagem_resultado_hpv_16() {
    // 1. Captura o valor da tela e armazena na variável 'resultado_hpv_16_positivo'
    cy.get('[data-testid="labelAndValueHpv16"]')   // Substitua pelo seletor do elemento que contém o valor desejado
      .invoke('text')               // Captura o texto do elemento
      .then((textoCapturado) => {
        const resultado_hpv_16_positivo = textoCapturado.match(/\((\d+)\)/)[1];  // Remove tudo que não for número
        cy.log('Valor capturado na tela (apenas números):', resultado_hpv_16_positivo);

        // 2. Leitura e contagem de ocorrências "DETECTÁVEL" no CSV
        cy.fixture('relatorio-hpv.csv')    // Carrega o arquivo CSV
          .then(neatCsv)                   // Converte o CSV em um array de objetos
          .then((dadosCsv) => {
            const ocorrenciasDetectavel = dadosCsv.filter(linha => linha.resultado_hpv_16 === 'DETECTÁVEL').length;
            cy.log('Número de ocorrências "DETECTÁVEL" no CSV (coluna resultado_hpv_16):', ocorrenciasDetectavel);

            // 3. Comparação do valor capturado na tela com o número de ocorrências "DETECTÁVEL" no CSV
            expect(parseInt(resultado_hpv_16_positivo, 10)).to.equal(ocorrenciasDetectavel); // Verifica se ambos são iguais
            cy.log(`O valor capturado (${resultado_hpv_16_positivo}) é igual ao número de ocorrências (${ocorrenciasDetectavel}) no CSV.`);
          });
      });
  }

  leitura_e_contagem_resultado_hpv_18() {
    // 1. Captura o valor da tela e armazena na variável 'resultado_hpv_18_positivo'
    cy.get('[data-testid="labelAndValueHpv18"]')   // Substitua pelo seletor do elemento que contém o valor desejado
      .invoke('text')               // Captura o texto do elemento
      .then((textoCapturado) => {
        const resultado_hpv_18_positivo = textoCapturado.match(/\((\d+)\)/)[1];  // Remove tudo que não for número
        cy.log('Valor capturado na tela (apenas números):', resultado_hpv_18_positivo);

        // 2. Leitura e contagem de ocorrências "DETECTÁVEL" no CSV
        cy.fixture('relatorio-hpv.csv')    // Carrega o arquivo CSV
          .then(neatCsv)                   // Converte o CSV em um array de objetos
          .then((dadosCsv) => {
            const ocorrenciasDetectavel = dadosCsv.filter(linha => linha.resultado_hpv_18 === 'DETECTÁVEL').length;
            cy.log('Número de ocorrências "DETECTÁVEL" no CSV (coluna resultado_hpv_18):', ocorrenciasDetectavel);

            // 3. Comparação do valor capturado na tela com o número de ocorrências "DETECTÁVEL" no CSV
            expect(parseInt(resultado_hpv_18_positivo, 10)).to.equal(ocorrenciasDetectavel); // Verifica se ambos são iguais
            cy.log(`O valor capturado (${resultado_hpv_18_positivo}) é igual ao número de ocorrências (${ocorrenciasDetectavel}) no CSV.`);
          });
      });
  }

  leitura_e_contagem_resultado_hpv_outros() {
    // 1. Captura o valor da tela e armazena na variável 'resultado_hpv_outros_positivo'
    cy.get('[data-testid="labelAndValueOthers"]')   // Substitua pelo seletor do elemento que contém o valor desejado
      .invoke('text')               // Captura o texto do elemento
      .then((textoCapturado) => {
        const resultado_hpv_outros_positivo = textoCapturado.match(/\((\d+)\)/)[1];  // Remove tudo que não for número
        cy.log('Valor capturado na tela (apenas números):', resultado_hpv_outros_positivo);

        // 2. Leitura e contagem de ocorrências "DETECTÁVEL" no CSV
        cy.fixture('relatorio-hpv.csv')    // Carrega o arquivo CSV
          .then(neatCsv)                   // Converte o CSV em um array de objetos
          .then((dadosCsv) => {
            const ocorrenciasDetectavel = dadosCsv.filter(linha => linha.resultado_hpv_outros === 'DETECTÁVEL').length;
            cy.log('Número de ocorrências "DETECTÁVEL" no CSV (coluna resultado_hpv_outros):', ocorrenciasDetectavel);

            // 3. Comparação do valor capturado na tela com o número de ocorrências "DETECTÁVEL" no CSV
            expect(parseInt(resultado_hpv_outros_positivo, 10)).to.equal(ocorrenciasDetectavel); // Verifica se ambos são iguais
            cy.log(`O valor capturado (${resultado_hpv_outros_positivo}) é igual ao número de ocorrências (${ocorrenciasDetectavel}) no CSV.`);
          });
      });
  }

}

export default new Helper();