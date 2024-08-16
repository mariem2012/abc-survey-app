const {db, client} = require("./config/database")

const answer = db.collection("answers")

async function getAnswer () {
    try {
        const result = await answer.find({}).toArray(); 
        console.log('resultat',result);
      
    } catch (error) {
        console.log("Erreur lors de la récupération des fichiers:", error.message);
    }
}




async function addAnswer(answerDetails) {
    try {
        console.log("Détails du fichier reçus:", answerDetails);

        if (!answerDetails || !answerDetails.id) {
            throw new Error("Les détails du fichier ou l'ID sont manquants.");
        }

        const existinganswer = await answer.findOne({ id: answerDetails.id });

        if (existinganswer) {
            throw new Error(`Un fichier avec l'ID ${answerDetails.id} existe déjà.`);
        }

        const result = await answer.insertOne(answerDetails);
        console.log("Fichier ajouté avec succès");

        return result.insertedId;
    } catch (error) {
        console.log(error.message);
    }
}



async function updateAnswer(id, updateDetails) {
    try {
        if (updateDetails.id) {
            const existinganswer = await answer.findOne({ id: updateDetails.id, _id: { $ne: id } });
            if (existinganswer) {
                throw new Error(`Un fichier avec l'ID ${updateDetails.id} existe déjà.`);
            }
        }

        const result = await answer.updateOne({ id: id }, { $set: updateDetails });  
        
        if (result.matchedCount === 0) {
            throw new Error("Fichier non trouvé");
        }
        
        console.log("Fichier mis à jour avec succès");
        
        return result;
    } catch (error) {
        console.log(error.message);
    }
}


async function deleteAnswer(id) {
    try {
        const result = await answer.deleteOne({ id: id }); 
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


module.exports = { getAnswer, addAnswer, updateAnswer, deleteAnswer};