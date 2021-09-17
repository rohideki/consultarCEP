module.exports.valida = (cep)=>{
if(cep.length < 8){
    return "CEP invalido!!";
}else{
    return cep;
};
};