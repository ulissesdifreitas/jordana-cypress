# jordana-cypress

# Para rodar o projeto

- npx cypress open

  Cypress 101 - Projeto JORDANA

	1. Clone do projeto
	
	"git clone https://github.com/ulissesdifreitas/jordana-cypress.git"
	
	ou 
	
	"git clone git@github.com:ulissesdifreitas/jordana-cypress.git"
	

	2. Instalação Cypress e dependências:
	
		Na pasta onde o projeto foi clonado:
		
			npm install

		Dependências a serem instaladas (Já no arquivo package.json):
		
			neat-csv: Para leitura e manipulação de arquivos .csv gerados no relatório
			
			mochawesome-reporter: Observalidade dos reports de resultados dos testes.


Cypress no Jenkins

0. Launch Jenkins

java -jar jenkins.war --httpPort=8000

1. Configurar scripts no package.json
 
	"scripts": {
		"test": "node_modules\\.bin\\cypress run",
		"runtests": "npm run test --"
	}
	
	Assim será possível rodar o testes em específico com o comando "npm run test" e "npm run runtest"
	
	INFO JENKINS - JORDANA
	
	usuário: admin
	senha: P@ssw0rd
	
	
2. Como trigger execuções periódicas

	Em "Configure > Build Triggers "
		Habilitar a opção "Build Periodically"
		
		e em Schedule:
		
		" * * * * * " Build vai executar todos os minutos

		No entanto, para configurações de tempo persoalizada, use o seguinte padrão:
		
		echo "Rodando Teste01"
		
		MINUTE (0-59), HOUR (0-23), DAY (1-31), MONTH (1-12), DAY OF THE WEEK (0-6)
		
		exemplo 01:
		"30 21 * * 1-5"  # significa, a build vai ocorrer às 9:30 da noite, todos os dias, de segunda à sexta
		
3. Cypress email report 

	npm i --save-dev cypress-mochawesome-reporter
	
	Jenkins Password for gmail:
	Entrar em contato com ulisses1991@gmail.com ou ulissesdifreitas@gmail.com
