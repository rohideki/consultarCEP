'use strict'

function consultar(){

let cep = document.getElementById('cep').value;
if(cep == ""){
    window.alert("CEP não informado!!")
    return
};
var request = new XMLHttpRequest();
let url = 'http://localhost:5555';
let params = {
    "cep": `${cep}`
};

request.open('POST', url, true);
request.setRequestHeader("Content-Type","application/json");
request.responseType = "json";
request.addEventListener('load', function () {
    //window.alert(JSON.stringify(request.response))
    return JSON.stringify(request.response)
});

request.send(JSON.stringify(params));
request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        console.log(JSON.stringify(request.response))
        //return JSON.stringify(request.response)
    };
};

var resultado = confirm(`${cep}, Tem certeza que deseja continuar?`);
if (resultado == true) {
let mensagem = `"Endereço": ${request.response.result.logradouro} ,
"Complemento:" ${request.response.result.complemento},
"Bairro":  ${request.response.result.bairro},
"Cidade":  ${request.response.result.localidade},
"Estado":  ${request.response.result.uf}`;

    window.alert(mensagem);
}
else {

    window.location.href = "http://www.google.com.br";

};


};