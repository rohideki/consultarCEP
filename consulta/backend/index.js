const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
app.use(cors())
app.use(express.json());
var router = require('express').Router();
app.use(process.env.SERVIDOR_URL, router);
require(__dirname + '/routes/index.js')(router);

app.listen(process.env.SERVIDOR_PORT, ()=>{
    console.log('Server is running!!');
});

//"Inicio do programa"