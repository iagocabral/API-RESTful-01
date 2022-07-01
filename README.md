###### API-RESTful-01
# Sobre o Repositorio
Primeiro projeto a respeito de API e RestFul

# Objetivos
- Criar uma API RESTful, que terá um CRUD
- Os endpoints serão criados com os verbos HTTP que correspondem a ação do mesmo
- As respostas serão baseadas em JSON, retornando também os status correto

# Tecnologias utilizada
As tecnologias utilizada no projeto foram:
- Node.js
- Express
- MongoDB - como banco de dados
- Moongose - ODM
- MongoDB Atlas - operações do banco
- PostMan - API foi testada por esse software

# Como Rodar localmente
1. Ter NodeJs e Git
2. Clonar o repositório com o comando:
```
    git clone https://github.com/iagocabral/API-RESTful-01.git
```
3. Por fim, instale as dependecias do projeto com o comando:
```
    sudo nmp install
    ou
    npm install
```
4. Pacotes necessarios para criar a API:
```
    npm install express nodemon mongoose
```
5. Para rodar o Projeto conecte ao MongoDB e rode o comando:
```
    npm start
```

# 4DEV 4ME
Creio que na hora do commit, tive problemas para criar o gitignore, irei futuramente entender o erro para que nao se repita.<br><br>
Com isso as credencias .env do banco foram enviadas<br><br>
Creio tambem que o Node_modules tambem nao era para ir, porem não tenho certeza no momento<br><br>
Seria então apenas os seguintes arquivos:
- models
- routes
- index.js
- package-lock.json
- package.json
# Reference

<https://www.youtube.com/watch?v=K5QaTfE5ylk>





