
<h1 align="center">
  Stone-Challenge
</h1>

<p align="center">

<a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
        <img /></a>
        <img src="https://img.shields.io/github/commit-activity/m/badges/shields" /></a>
    <a href="https://circleci.com/gh/badges/shields/tree/master">
        <img src="https://img.shields.io/circleci/project/github/badges/shields/master" alt="build status"></a>
    <a href="https://coveralls.io/github/badges/shields">
        <img src="https://img.shields.io/coveralls/github/badges/shields"
            alt="coverage"></a>
    <a href="https://lgtm.com/projects/g/badges/shields/alerts/">
        <img src="https://img.shields.io/lgtm/alerts/g/badges/shields"
            alt="Total alerts"/></a>
  <a href="https://www.linkedin.com/in/eliasgcf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Thomas Reolon-%239871F5"></a>

  <a href="https://github.com/thomasreolon2/pattynexchange/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/thomasreolon2/Stone-Challenge?color=%239871F5"></a>

  <img alt="GitHub" src="https://img.shields.io/github/license/thomasreolon2/proffy?color=%239871F5">
</p>

<h2 align="center"> :wave: Hey there! Tom Here :smiley: <h2>
<h3> this repository is dedicated to the (stone) a brazilian fintech so you can translate the page. </h3>
<h3> Enjoy the result of 3 days: 🤗 . </h3>

[![Github](https://img.shields.io/badge/-Github-333?style=flat&logo=Github&logoColor=white)](https://github.com/https://github.com/thomasreolon2)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/thomas-reolon-000112a3/)
[![Instagram](https://img.shields.io/badge/-Instagram-c13584?style=flat&labelColor=c13584&logo=instagram&logoColor=white)](https://www.instagram.com/thomas_reolon/)
[![Facebook](https://img.shields.io/badge/-Facebook-6365e6?style=flat&logo=Facebook&logoColor=white)](https://www.facebook.com/thomas.reolon.16)
[![Medium](https://img.shields.io/badge/-Medium-black?style=flat&logo=Medium&logoColor=white)](https://medium.com/@thomasreolon)
[![StackOverFlow](https://img.shields.io/badge/-Stack_Overflow-eba51a?style=flat&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/6632607/thomas-reolon)

## 📚 Sobre o Projeto

## [![CHECK VIDEO PREVIEW](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://youtu.be/58vRY_W-Rgk)

## Parte-1:

```
Stone:

O desafio que propomos é criar uma interface gráfica usando um framework Javascript a sua escolha
(Angular, React ...). Essa interface deve servir para o usuário conseguir buscar ou inserir 
informações de funcionários lançadas no sistema sempre se conectando a API criada no desafio
anterior para fazer as alterações no banco.✅✅

Operações Desejadas ✅✅

Inclusão de um funcionário:✅✅

Ao preencher um formulário fazer um POST na API criada para inserir um registro 
dentro do banco de dados utilizado. ✅✅

Busca por funcionários: ✅✅

Desenvolver uma tela onde o usuário consiga realizar a escolha de filtros e visualizar uma
lista de funcionários com as características desejadas. ✅✅

O prazo para realização do desafio é de 7 dias. ✅✅

```

## Parte-2:

```

O desafio que propomos é escrever uma API REST, usando Python, Node ou Java que
realizará operações em um banco de dados de funcionários. ✅✅

Um funcionário deve possuir como atributos : Id , Idade , Nome e Cargo ✅✅

Salvar as informações necessárias em um banco de dados relacional de sua escolha ✅✅

Gerar logs das ações ✅✅

Documentar como rodar o projeto ✅✅

Operações Desejadas ✅✅

Implementar métodos : 1.GET 2.POST 3.PUT 4.DELETE ✅✅

O prazo para realização do desafio é de 7 dias. ✅✅
 
```

## 🚀 Tecnologias

Tecs que utilizei para o desenvolvimento:

- [ReactJS](https://pt-br.reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [MongoDB](https://www.mongodb.com/) 
- [Axios](https://www.npmjs.com/package/axios)     
- [Lottie](https://lottiefiles.com/)
- [Mongoose](https://mongoosejs.com/docs/)                      

### :grey_exclamation::grey_exclamation: Requerimentos

- [NodeJS](https://nodejs.org/en/)
- [React-cli](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [MongoDB (URI cluster)](https://cloud.mongodb.com)

## :file_folder: Estrutura (main)

```
stone-challenge-webapp
       │            
       └── src
           ├── anims
           │     └── anims.json (delete, loading, edit, menu)                
           │ 
           ├── imgs
           │     └── imgs.png (art1, art2, art3, stone, stoneicon)    
           │
           └── components
                   ├── ActivitiesScreen
                   │          ├── activities-list.component.js     
                   │          └── activities-list.css    
                   │  
                   ├── CreateActivityScreen
                   │           ├── create-activity.component.js    
                   │           └── create-activity.css
                   │
                   ├── CreateEmployeeScreen
                   │           ├── create-employee.component.js    
                   │           └── create-employee.css   
                   │   
                   ├── NavBar
                   │     ├── navbar.component.js
                   │     ├── navbar.css 
                   │     └── sidebarPaths.js 
                   │
                App.js
```                 

```
stone-challenge-api
      ├── models
      │     ├── employee_activity.model.js
      │     └── employee.model.js                       
      │            
      ├── routes
      │     ├── employee_act_route.js
      │     └── employee_route.js                
    .env
      └── server.js
```
## :bowtie: Inicialização

**Siga os passos abaixo**

```bash

   abrir arquivo .env

stone-challenge-api (folder)
           │ 
         .env  
           │ 
  MONGO_URI=<mongo_uri>

ex: MONGO_URI='mongodb+srv://<username>:<mypassword>@cluster0.8chrq.mongodb.net/<dbname>?retryWrites=true&w=majority'

Colocar a URI do cluster criado no MongoDB 

```

```

# Pasta API
/cd stone-challenge-api

# Inicializando dependencias
/yarn install
or npm

/node server 
ou em desenvolvimento:
/nodemon server


```

```
# Pasta Web-App
/cd stone-challenge-webapp

# Inicializando dependencias
/yarn install         linux: sudo yarn install --ignore-engines 
or npm

/yarn start 

```

## :eyes: DB Preview

<img src="https://i.ibb.co/bsfr2qp/Screenshot-from-2020-11-06-03-29-06.png" alt="test" border="0"> <img src="https://i.ibb.co/6mbdDMg/Screenshot-from-2020-11-06-14-01-44.png" alt="test" border="0">
<img src="https://i.ibb.co/smxxFXx/Screenshot-from-2020-11-06-10-07-50.png" alt="test" border="0" width="320" height="300"> <img src="https://i.ibb.co/0JYF0fv/Screenshot-from-2020-11-05-21-45-31.png" alt="test" border="0" width="330" height="470">


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h1 align="center">
Feito com 💜&nbsp; Thomaz Reolon 👋 &nbsp;
😀 Obrigado a Equipe da Stone: Yago Dotti e o Yann Souza.

[Follow me LinkedIn](https://www.linkedin.com/in/thomas-reolon/)
<h1>
