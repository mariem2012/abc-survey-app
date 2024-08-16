const {db, client} = require("./config/database")

const question = db.collection("questions")

async function getQuestion () {
    try {
        const result = await question.find({}).toArray(); 
        console.log('resultat',result);
      
    } catch (error) {
        console.log("Erreur lors de la récupération des fichiers:", error.message);
    }
}




async function addQuestion(questionDetails) {
    try {
        if (!questionDetails || !questionDetails.id) {
            throw new Error("Les détails du fichier ou l'ID sont manquants.");
        }

        const existingQuestion = await question.findOne({ id: questionDetails.id });

        if (existingQuestion) {
            throw new Error(`Un fichier avec l'ID ${questionDetails.id} existe déjà.`);
        }

        const result = await question.insertOne(questionDetails);
        console.log("Fichier ajouté avec succès");

        return result.insertedId;
    } catch (error) {
        console.log(error.message);
    }
}



async function updateQuestion(id, updateDetails) {
    try {
        if (updateDetails.id) {
            const existingFile = await question.findOne({ id: updateDetails.id, _id: { $ne: id } });
            if (existingFile) {
                throw new Error(`Un fichier avec l'ID ${updateDetails.id} existe déjà.`);
            }
        }

        const result = await question.updateOne({ id: id }, { $set: updateDetails });  
        
        if (result.matchedCount === 0) {
            throw new Error("Fichier non trouvé");
        }
        
        console.log("Fichier mis à jour avec succès");
        
        return result;
    } catch (error) {
        console.log(error.message);
    }
}


async function deleteQuestion(id) {
    try {
        const result = await question.deleteOne({ id: id }); 
        if (result.deletedCount === 0) {
            console.log("Aucun fichier trouvé avec cet ID.");
            return false;  
        }


        console.log("Fichier supprimé avec succès.");
        return true;  
        
        
    } catch (error) {
        console.log(`Erreur lors de la suppression du fichier : ${error.message}`)
    }
}


module.exports = { getQuestion, addQuestion, updateQuestion, deleteQuestion};