const express = require ('express');
require ('dotenv').config();
//*const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

//* app(cors());

dbConnection();

app.use(express.static('public'));
app.use(express.json());
app.use('/proyecto/auth', require('./routes/auth'));
app.use('/proyecto/productos', require('./routes/productos'));
app.use('/proyecto/ventas', require('./routes/ventas'));

app.listen(process.env.Port,() => {
    console.log(`servidor corriendo en el puerto ${ process.env.Port }`);
})