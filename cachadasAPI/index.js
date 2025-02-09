const bodyParser = require('body-parser');
const express = require ('express');

const apiRouter = require('./routes/api');

const app = express();
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRouter);

app.listen(3000, () => {console.log('servidor arrancado')});