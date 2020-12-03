
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
<h3> this repository is dedicated to the (stone) a brazilian fintech. </h3>
<h3> Enjoy 🤗 . </h3>

[![Github](https://img.shields.io/badge/-Github-333?style=flat&logo=Github&logoColor=white)](https://github.com/https://github.com/thomasreolon2)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/thomas-reolon-000112a3/)
[![Instagram](https://img.shields.io/badge/-Instagram-c13584?style=flat&labelColor=c13584&logo=instagram&logoColor=white)](https://www.instagram.com/thomas_reolon/)
[![Facebook](https://img.shields.io/badge/-Facebook-6365e6?style=flat&logo=Facebook&logoColor=white)](https://www.facebook.com/thomas.reolon.16)
[![Medium](https://img.shields.io/badge/-Medium-black?style=flat&logo=Medium&logoColor=white)](https://medium.com/@thomasreolon)
[![StackOverFlow](https://img.shields.io/badge/-Stack_Overflow-eba51a?style=flat&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/6632607/thomas-reolon)

## 📚 About the Project

## Part-1:

```
Stone:

the challenge that we propose is develop API Rest using Python, node or Java 
that it'll realize operations on a employee database ✅✅


An employee must have the following attributes: Id, Age, Name and Position✅✅

Save as mandatory information in a relational database of your choice✅✅

Generate Logs✅✅

Document how start the project ✅✅

Requests : 1.GET 2.POST 3.PUT 4.DELETE ✅✅

The deadline of the project is 2 days. ✅✅
 
```


## Part-2:

```


The challenge we propose is to create a graphical interface using a Javascript framework of your choice (Angular, React ...). This interface should serve for the user to be able to search or insert employee information posted on the system always connecting to an API created in the challenge previous to do as changes in the bank.✅✅

Desired Operations ✅✅

Add Employee:✅✅

When filling out a form make a POST in the API created to insert a record
within the database used. ✅✅

Search Employee: ✅✅

Develop a screen where the user can make a choice of filters and view a
list of employees with the desired characteristics. ✅✅

The deadline of the project is 2 days. ✅✅

```


## 🚀 Techs

Techs I used for development:

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

## :file_folder: Structure (main)

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
## :bowtie: Starting

**Follow the steps below**

```bash

   Open the .env file

stone-challenge-api (folder)
           │ 
         .env  
           │ 
  MONGO_URI=<mongo_uri>

ex: MONGO_URI='mongodb+srv://<username>:<mypassword>@cluster0.8chrq.mongodb.net/<dbname>?retryWrites=true&w=majority'

Put the URI of cluster created on MongoDD

```

```

# API Folder
/cd stone-challenge-api

# Starting the dependencies

/yarn install
or npm

/node server 
Or on development ambient:
/nodemon server


```

```
# Web-App Folder
/cd stone-challenge-webapp

# Starting dependencies
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
💜&nbsp; Thomaz Reolon 👋 &nbsp;
😀 Thanks Stone Team: Yago Dotti and Yann Souza.

[Follow me LinkedIn](https://www.linkedin.com/in/thomas-reolon/)
<h1>
