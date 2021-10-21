const { Schema, model } = require('mongoose'); /**si o si se debe poner para la base de datos */

const VentasSchema = Schema({

    Cedula: {
        type: Number,
        require:true,
    },
    Cliente: {
        type: String,
        require: true
    },
    Fecha: {
        type: String,
        require: true
    },
    Cantidad: {
        type: String,
        require: true
    },
    ValorUnitario: {
        type: Number,
        require: true
    },
    Producto: {
        type:String,
        require: true
    },
    EstadoVenta: {
        type: Schema.Types.ObjectId,
        ref: 'Estado',
        require: true
    },
},);

module.exports = model('VentasModelo', VentasSchema); /**esto lo exporta */
