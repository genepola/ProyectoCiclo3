const { Schema, model } = require('mongoose'); /**si o si se debe poner para la base de datos */

const ProductosSchema = Schema({
    ID: {
        type: Number,
        require: true,
        unique: true
    },
    Descripcion: {
        type: String,
        require: true
    },
    ValorUnitario: {
        type: Number,
        require: true
    },
    Estado: {
        type: String,
        require: true
    },
},
    {
        collection: 'productosmodelos'
    });

module.exports = model('ProductosModelo', ProductosSchema); /**esto lo exporta */
