
# Survey App

## Description

ABC-Survey-App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/mariem2012/abc-survey-app.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    
    cd abc-survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configuration de la base de données :**

    Le fichier `config/database.js` contient la configuration nécessaire pour interagir avec la base de données et ses différentes collections.
    avant de lancer l'application, il est necessaire de mettre en place la base de données et les differentes collections à l'aide de command suivantes :

    creation de la base de données
     ```mongoDB
    use survey_db
    ```
    creation de la collection answers
    ```mongoDB
    db.createCollection("answers")
    ```
   creation de la collection surveys
    ```mongoDB
    db.createCollection("files")
    ```
    creation de la collection questions
    ```mongoDB
    db.createCollection("questions")
    ```

## Modules et Documentation

L'application est subdivisée en cinq modules principaux :

- **database.js :** Contient la configuration nécessaire pour interagir avec la base de données et les différentes collections.

  | **Base de données** | **Collections** |
  |---------------------|-----------------|
  |     survey_db       |     answers     |
  |     survey_db       |     surveys     |
  |     survey_db       |     questions   |

- **fileModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **files**. Il est composé des fonctions suivantes :
  
  1. `fileAdd(objet)` : pour ajouter un document dans la collection de ***files***.
  2. `fileGet()` : pour afficher tous les documents de la collection de ***files***.
  3. `fileUpdate(surveyId, objet)` : pour modifier un document de la collection de ***files***.
  4. `fileDelete(surveyId)` : pour supprimer un document de la collection de ***files***.

- **questionModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **questions**. Il est composé des fonctions suivantes :

  1. `questionAdd(objet)` : pour ajouter un document dans la collection de ***questions***.
  2. `questionGet()` : pour afficher tous les documents dans la collection de ***questions***.
  3. `questionUpdate(questionId, objet)` : pour modifier un document dans la collection de ***questions***.
  4. `questionDelete(questionId)` : pour supprimer un document dans  la collection de ***questions***.



- **answerModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **answers**. Il est composé des fonctions suivantes :

  1. `answerAdd(objet)` : Pour ajouter un document dans la collection de ***answers***.
  2. `answerGet()` : Pour afficher tous les documents dans la collection de ***answers***.
  3. `answerUpdate(questionId, objet)` : Pour modifier un document dans la collection de ***answers***.
  4. `answerDelete(questionId)` : Pour supprimer un document dans la collection de ***answers***.

***suveyId, questionId et answerId : Sont de entier (INT)***

***objet :est  un objet javascript ou un objet json***

`
  Il est important de noté que les fonctions ne peuvent qu'un seul document à la fois.
`

- **index.js :** est l'entrée principale de l'application. Il contient une fonction principale **main** qui englobe l'appel de toutes les fonctions des différents modules.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Auteur 

- [Mariem Boudallaye Dianifaba](url)
