const express = require('express');
const app=express();
const morgan=require('morgan');

//configuracion
app.set('port', 3000)

//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(require('./routes/rutas'))

//Servidor
app.listen(app.get('port'));
console.log("Servidor cool");
