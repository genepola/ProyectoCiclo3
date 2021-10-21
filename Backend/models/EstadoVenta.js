const { Schema, model } = require('mongoose');

const estadoVentaSchema = Schema({
    Estado:{
        type: String,
        require: true
    }
},
{
    collection: 'EstadoVenta'
});

module.exports = model('Estado', estadoVentaSchema);