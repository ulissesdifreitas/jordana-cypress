import Helper from '../../support/helpers'


function usando_relatório(){
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

        return {
          nomePaciente, 
          cpfPaciente, 
          statusExamePaciente, 
          resultadoExamePaciente}
      })

    })
} 