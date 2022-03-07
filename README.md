# Projeto SES_EMAIL

Esse projeto tem como objetivo o envio de email utilizando a tecnologia do AWS SES.

# Tecnologias envolvidas

* NodeJS v14.17.5
* Aws Lambda
* Aws Api Gateway
* Aws SES
* Framework Serverless

# Utilização em desenvolvimento
1. Instalar Node v14.17.5, comando depende do sistema operacional
2. Instalar bibliotecas dependetes para o projeto
    1. `npm i` pode ser necessário executar como adm/root
     

# Funcionalidades
* Envio de Email 
* Templates
    * Create Template
    * Delete Template

# Teste das funcionalidades local
* Envio de Email
    * Teste Senha `sls invoke local -f recuperaSenha --path testes/testeSenha.json`

* 2 Templates
    * Create Template `sls invoke local -f createTemplate --path testes/templateTestes/createTemplate.json`

    * Delete Template `sls invoke local -f deleteTemplate --path testes/templateTestes/deleteTemplate.json`


# Bibliotecas
Caso seja necessário instalar ou remover alguma biblioteca npm, favor remover do arquivo package-lock.json e a pasta node_modules 

# Deploy
O deploy ocorre diretamente pelo gitlab, automaticamenteo ao fazer merge nas branchs qa, homologacao e master, 
o processo inicia.

Antes de publicar uma branch para deploy, certifique-se de que a "provider stage" esteja configurada para o ambiente desejado.

    # Qualquer alteração ou ajuste no deploy deve ser feito no arquivo .gitlab-cy.yml
	
	# Antes de subir para o git, lembre-se de alterar a variável "stage" do arquivo serverless.yml para o ambiente apropriado. (Ex.: prod)

#Referências
## NodeJS
[NodeJS](https://nodejs.org/en/docs/) <br />

## Serverless
[Framework](https://serverless.com/framework/docs/providers/aws/) <br />

