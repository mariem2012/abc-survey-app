const { client } = require("./config/database");
const {
  getSurvey,
  addSurvey,
  updateSurvey,
  deleteSurvey,
} = require("./surveyModule");
const {
  getAnswer,
  addAnswer,
  updateAnswer,
  deleteAnswer,
} = require("./answerModule");
const {
  addQuestion,
  getQuestion,
  deleteQuestion,
  updateQuestion,
} = require("./questionModule");

const donnee = {
  id: 1,
  name: "Enquête de Satisfaction 003",
  description:
    "Enquête visant à évaluer la satisfaction des clients concernant nos services",
  createdAt: "2024-07-25T08:00:00.000+00:00",
  createdBy: {
    employeeName: "Jane Smit",
    employeeRole: "Responsable du service client",
  },
};

const donnees = {
  name: "Enquête de Satisfaction 003",
  description:
    "Enquête visant à évaluer la satisfaction des clients concernant nos services",
};

const question = {
  id: 11,
  SurveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
  options: {
    minValue: 1,
    maxValue: 5,
    step: 1,
  },
};

const answer = {
  id: 1,
  questionId: 2,
  answer: "Très satisfait",
};

async function main() {
  try {
    await getSurvey();
    await addSurvey(donnee);
    await updateSurvey(1, donnees);
    await deleteSurvey(8);

    await getAnswer();
    await addAnswer(answer);
    await updateAnswer(1, answer);
    await deleteAnswer(2);

    await getQuestion();
    await addQuestion(question);
    await updateQuestion(1, question);
    await deleteQuestion(2);
  } catch (e) {
    console.log(e.message);
  } finally {
    await client.close();
  }
}
main();
