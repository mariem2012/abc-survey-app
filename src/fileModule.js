const {db, client} = require("./config/database")

const file = db.collection("files")

async function getFile () {
    try {
        const result = await file.find({}).toArray(); 
        console.log('resultat',result);
      
    } catch (error) {
        console.log("Erreur lors de la récupération des fichiers:", error.message);
    }
}




async function addFile(fileDetails) {
    try {
        if (!fileDetails || !fileDetails.id) {
            throw new Error("Les détails du fichier ou l'ID sont manquants.");
        }

        const existingFile = await file.findOne({ id: fileDetails.id });

        if (existingFile) {
            throw new Error(`Un fichier avec l'ID ${fileDetails.id} existe déjà.`);
        }

        const result = await file.insertOne(fileDetails);
        console.log("Fichier ajouté avec succès");

        return result.id;
    } catch (error) {
         console.log(error.message);
         
    }
}



async function updateFile(id, updateDetails) {
    try {
        if (updateDetails.id) {
            const existingFile = await file.findOne({ id: updateDetails.id, _id: { $ne: id } });
            if (existingFile) {
                throw new Error(`Un fichier avec l'ID ${updateDetails.id} existe déjà.`);
            }
        }

        const result = await file.updateOne({ id: id }, { $set: updateDetails });  
        
        if (result.matchedCount === 0) {
            throw new Error("Fichier non trouvé");
        }
        
        console.log("Fichier mis à jour avec succès");
        
        return result;
    } catch (error) {
        console.log(error.message);
        
    }
}


async function deleteFile(id) {
    try {
        const result = await file.deleteOne({ id: id }); 
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


module.exports = { getFile, addFile, updateFile, deleteFile};