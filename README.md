<h1 align="center">
    Crud De Produtos
</h1>

<p align="center"> 
  O projeto é um crud de produtos utilizando NodeJS para o Server(Back-End), e postgres como banco de dados tendo apoio do sequelize para fazer as migrations, para rodar o banco pode-se utilizar docker ou postgres local sendo necessário configurar isso no arquivo "database.js" dentro da pasta "config".
</p>

## Requisições no insomnia

### Criação de Produtos 

<p align="center">
    <img alt="Criação de Produtos" title="Criação de Produtos" src="assets/CreateNewProduct.PNG">
</p>

### Listar Produtos 

<p align="center">
    <img alt="Listar Produtos" title="Listar Produtos" src="assets/ProductListing.PNG">
</p>

### Listar Produto Pelo ID 

<p align="center">
    <img alt="Listar Produto Pelo ID" title="Listar Produto Pelo ID" src="assets/ProductListingById.PNG" color="##8257e5">
</p>

### Atualizar Dados do Produto 

<p align="center">
    <img alt="Atualizar Dados do Produto" title="Atualizar Dados do Produto" src="assets/UpdateProduct.PNG" color="##8257e5">
</p>

### Deletar Produto 

<p align="center">
    <img alt="Deletar Produto" title="Deletar Produto" src="assets/DeleteProduct.PNG" color="##8257e5">
</p>

## Funcionalidades

* Criar Produto;

* Listar Todos os Produtos;

* Listar Produto pelo ID;

* Atualizar dados de um Produto;

* Deletar Produto.

## Para rodar a aplicação

  * A primeira coisa é executar o comando yarn ou npm install,
  para instalar todas as dependencias necessárias para rodar o
  servidor.

  * Após a execução do comando yarn ou npm install efetue 
  "yarn sequelize db:create" para criar o banco de dados,
  logo em seguida "yarn sequelize db:migrate" para rodar as migrations.

  * Depois da criação do banco de dados e das tabelas, você pode usar
  "yarn start" para rodar o servidor, para realizar as requisições será
  necessário o uso do insomnia ou outra ferramenta parecida. 

## Tecnologias

  * NodeJS (Back-End);

  * Sequelize (ORM);

  * Postgres (Banco de dados);

  * Insomnia (Requisições).




