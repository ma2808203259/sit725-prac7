const express = require('express');
const documentRouter = require('./routes/documentRoute')
const app = express()
const PORT = 3000
const mongo = require('./services/MongoService')

//const Routes=require('./routes');


app.use(express.static('public'))


app.get('', function(req, res){
    

})
//setup routes 
app.use('/document',documentRouter.documentsRoute)

//setup db
mongo.startDB()

app.listen(PORT,()=>{
    console.log('server started on port 3000')
})