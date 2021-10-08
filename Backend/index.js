const express = require ('express');
require ('dotenv').config();
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use(express.static('public'));
app.use(express.json());
app.use('/proyecto/auth', require('./routes/auth'));


app.listen(process.env.Port,() => {
    console.log(`servidor corriendo en el puerto ${ process.env.Port }`);
})