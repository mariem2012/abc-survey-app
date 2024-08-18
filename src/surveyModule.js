const {db, client} = require("./config/database")

const survey = db.collection("surveys")


async function getSurvey () {
    try {
        const result = await survey.find({}).toArray(); 
        console.log('resultat',result);
      
    } catch (error) {
        console.log("Erreur lors de la récupération des fichiers:", error.message);
    }
}




async function addSurvey(surveyDetails) {
    try {
        if (!surveyDetails || !surveyDetails.id) {
            throw new Error("Les détails du fichier ou l'ID sont manquants.");
        }

        const existingSurvey = await survey.findOne({ id: surveyDetails.id });

        if (existingSurvey) {
            throw new Error(`Un fichier avec l'ID ${surveyDetails.id} existe déjà.`);
        }

        const result = await survey.insertOne(surveyDetails);
        console.log("Fichier ajouté avec succès");

        return result.id;
    } catch (error) {
         console.log(error.message);
         
    }
}



async function updateSurvey(id, updateDetails) {
    try {
        if (updateDetails.id) {
            const existingSurvey = await survey.findOne({ id: updateDetails.id, _id: { $ne: id } });
            if (existingSurvey) {
                throw new Error(`Un fichier avec l'ID ${updateDetails.id} existe déjà.`);
            }
        }

        const result = await survey.updateOne({ id: id }, { $set: updateDetails });  
        
        if (result.matchedCount === 0) {
            throw new Error("Fichier non trouvé");
        }
        
        console.log("Fichier mis à jour avec succès");
        
        return result;
    } catch (error) {
        console.log(error.message);
        
    }
}


async function deleteSurvey(id) {
    try {
        const result = await survey.deleteOne({ id: id }); 
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


module.exports = { getSurvey, addSurvey, updateSurvey, deleteSurvey};