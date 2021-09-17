const router = require('express').Router();
const consultaC= require('../controllers/consultaCEP.js');

module.exports.GET = router.get('/', async(req,res)=>{
    
    let query = req.query;
    let consultaCEP =  await consultaC.CEP(query);

if(consultaCEP == "CEP invalido!!"){
    res.status(400).json({
        result: "CEP invalido!!"
    });
}
    else if(consultaCEP.data.erro){
            res.status(404).json({
            result: "CEP não encontrado!!"
        })
    }else{
        res.status(200).json({
        result: consultaCEP.data
    })        
    }    
});

module.exports.POST = router.post('/', async(req,res)=>{
    
    let query = req.body;
    
    let consultaCEP =  await consultaC.CEP(query);

if(consultaCEP == "CEP invalido!!"){
    res.status(400).json({
        result: "CEP invalido!!"
    });
}
    else if(consultaCEP.data.erro){
            res.status(404).json({
            result: "CEP não encontrado!!"
        })
    }else{
        res.status(200).json({
        result: consultaCEP.data
    })        
    }    
});