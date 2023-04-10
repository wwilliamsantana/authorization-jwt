# Back-end para autenticação de rota.


## :computer: Sobre
- Desenvolver um back-end que permita a criação de usuários e autenticação com a inclusão de um token. Além disso, o sistema deverá incluir um middleware para verificar se o usuário está autenticado ou não antes de permitir o acesso a determinadas funcionalidades.
- Para armazenar as informações utilizei o *prisma* para criar um banco de dados local.

## :rocket: Techs

* Node.js + TypeScript
* Express
* Jsonwebtoken
* Bcryptjs
* Cors
* Tsx
* Prisma

 ## Como iniciar ?
 
  - Faça um clone do projeto.
    - ```https://github.com/wwilliamsantana/authorization-jwt.git```
 - Dentro da pasta do projeto, instale as dependências.
    - ```npm i```
 - Execute o projeto.
    - ```npm run dev```
    
 ## Rotas
 
### /create - POST
-  Criar usuário. Onde é necessário inserir os dados. Estes dados serão validados e a senha criptografada para salvar no banco de dados.
```javascript
  {
    "name": "William",
    "email": "william@example.com"
    "password": 123456
  }
```
 
### /auth - POST

-  Autenticar um usuário, onde será validado se existe no Banco de dados local, compara a senha criptografada no BD é a inserida pelo usuário. Caso tudo ocorra bem, será gerado um token de acesso é ele será redirecionado para uma outra rota ``` /Home ```
-  Os dados de token e user serão armazenados no localStorage do navegador. Token será adicionado 

```javascript
  {
    "email": "william@example.com"
    "password": 123456
  }
```
  
### /users - GET
- Está rota possui um middleware, onde vai verificar se o usuário que está acessando possui um token válido.
- Listagem dos usuários cadastrados.
