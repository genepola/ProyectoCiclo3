const mongoose = require('mongoose');
const dbConnection=async() => {
    try{
        await mongoose.connect(process.env.DbConnectionProyecto);
        console.log('conectado correctamente');
    }catch(error){
        console.log('error');
        throw new Error('error al iniciar base de datos');
    }
};

module.exports={
    dbConnection
};