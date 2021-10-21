const { Schema, model } = require('mongoose');

const estadoVentaSchema = Schema({
    name:{
        type: String,
        require: true
    }
},
{
    collection: 'EstadoVenta'
});

module.exports = model('estadoVenta', estadoVentaSchema);