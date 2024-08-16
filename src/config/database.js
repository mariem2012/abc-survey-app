const {MongoClient, ObjectId} = require("mongodb")
const client = new MongoClient("mongodb://localhost:27017")
const db = client.db("survey_db")

const ConnectDb = () => {
    try{
        client.connect()
        console.log("connected")
    }catch(err) {
        console.log("err")
    }
    
}
module.exports = {
    db, client
}