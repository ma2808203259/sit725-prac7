const Express = require('express')
const controller = require('../controllers/documentsControllers')
let router = Express.Router()

router.get('/',(req,res)=>{
    console.log('Documents root hit');
    let payload = req.query
    controller.addDocument(payload,res)
})

router.get('/bills',(req,res)=>{
    console.log('Documents/bills root hit');
    res.send('Doc/bills hit')
})

//export the file
module.exports={
    documentsRoute:router
}