const DB = require('../services/MongoService');
const { Db } = require('mongodb');

const addDocument=(payload, res)=>{
    
    //business logic 
    let document ={
        owner:payload.name,
        date:Date.now()
    }
    //call external service db
    DB.insertDocument(document,res)


    // setTimeout(() => {
    //     res.json(document)
    // }, 2000);

}

const updateDocument=()=>{

}

const deleteDocument=()=>{

}



//export
module.exports={
    addDocument,
    updateDocument,
}