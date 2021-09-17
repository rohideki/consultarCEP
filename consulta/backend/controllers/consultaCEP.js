const axios = require('axios');
const valida = require('../functions/validarCEP');

module.exports.CEP = async(query)=>{
const {cep} = query;

let validar = await valida.valida(cep);
if(validar == cep){  
    const url = `${process.env.URL_CEP}` + `${cep}/json/`;
    var resultado = axios.get(url, function(error, response){    
       if(error) {
           throw error;
        };
          return response;   
        }
    );
    return resultado;
    }
    else{
        return "CEP invalido!!";
    };
};


  

