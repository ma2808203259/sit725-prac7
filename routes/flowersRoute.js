const Express = require('express')
let router = Express.Router()

router.get('/',(req,res)=>{
    console.log('Documents root hit');
    res.send('flower root hit')
})



//export the file
module.exports={
    flowersRouter:router
}