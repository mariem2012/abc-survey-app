# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

   ```bash
   git clone https://github.com/mariem2012/abc-Survey-app.git
   ```

2. **Accédez au dossier du projet :**

   ```bash

   cd abc-Survey-app
   ```

3. **Installez les dépendances :**

   ```bash
   npm install
   ```

4. **Configuration de la base de données :**

   Le fichier `config/database.js` contient la configuration nécessaire pour interagir avec la base de données et ses différentes collections.

## Modules et Documentation

L'application est subdivisée en cinq modules principaux :

- **database.js :** Contient la configuration nécessaire pour interagir avec la base de données et les différentes collections.

- **surveyModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **surveys**. Il est composé des fonctions suivantes :

  1. `addSurvey({id: int, name: string, description: string, createdAt: date, createdBy: {employeeName: string, employeeRole: string}})` : pour ajouter un document dans la collection de **_surveys_**.
  2. `getSurvey()` : pour afficher tous les documents de la collection de **_surveys_**.
  3. `updateSurvey(surveyId, {id: int, name: string, description: string})` : pour modifier un document de la collection de **_surveys_**.
  4. `deleteSurvey(surveyId)` : pour supprimer un document de la collection de **_surveys_**.

- **questionModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **questions**. Il est composé des fonctions suivantes :

  1. `addQuestion({id: int, SurveyId: int, title: string, type: string, options: {minValue: int, maxValue: int, step: int}})` : pour ajouter un document dans la collection de **_questions_**.
  2. `getQuestion()` : pour afficher tous les documents dans la collection de **_questions_**.
  3. `updateQuestion(questionId, {id: int, SurveyId: int, title: string, type: string, options: {minValue: int, maxValue: int, step: int}})` : pour modifier un document dans la collection de **_questions_**.
  4. `deleteQuestion(questionId)` : pour supprimer un document dans la collection de **_questions_**.

- **answerModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **answers**. Il est composé des fonctions suivantes :

  1. `addAnswer({id: int, questionId: int, answer: string})` : Pour ajouter un document dans la collection de **_answers_**.
  2. `getAnswer()` : Pour afficher tous les documents dans la collection de **_answers_**.
  3. `updateAnswer(answerId, {id: int, questionId: int, answer: string})` : Pour modifier un document dans la collection de **_answers_**.
  4. `deleteAnswer(answerId)` : Pour supprimer un document dans la collection de **_answers_**.

- **index.js :** est l'entrée principale de l'application. Il contient une fonction principale **main** qui englobe l'appel de toutes les fonctions des différents modules.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Auteur

- [Mariem Boudallaye Dianifaba](https://github.com/mariem2012/abc-Survey-app.git)
