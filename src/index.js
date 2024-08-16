const { client } = require("./config/database");
const { getFile, addFile, updateFile, deleteFile } = require("./fileModule");
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
   id: 20,
   name: "Enquête de Satisfaction 003",
   description: "Enquête visant à évaluer la satisfaction des clients concernant nos services",
  createdAt: "2024-07-25T08:00:00.000+00:00",
  createdBy: {
    employeeName: "Jane Smit",
    employeeRole: "Responsable du service client"
  }
    
};

const donnees = {
    name: "Enquête de Satisfaction 003",
    description: "Enquête visant à évaluer la satisfaction des clients concernant nos services",
   createdAt: "2024-07-25T08:00:00.000+00:00",
   createdBy: {
     employeeName: "Jane Smit",
     employeeRole: "Responsable du service client"
    }
};


const question = {
  id: 2,
  fileId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
  options: {
    minValue: 1,
    maxValue: 5,
    step: 1,
  },
};

const answer = {
  id: 9,
  questionId: 2,
  answer: "Très satisfait",
};

async function main() {
  try {
    await getFile();
    await addFile(donnee)
    await updateFile(1, donnees);
    await deleteFile(8);

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
main()
