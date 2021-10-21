const { Schema, model } = require('mongoose');

const estadoVentaSchema = Schema({
    estado:{
        type: String,
        require: true
    }
},
{
    collection: 'EstadoVenta'
});

module.exports = model('estadoVenta', estadoVentaSchema);