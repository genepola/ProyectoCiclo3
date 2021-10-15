const { Schema, model } = require('mongoose'); /**si o si se debe poner para la base de datos */

const VentasSchema = Schema({
    ID: {
        type: Number,
        require:true,
        unique:true
    },
    Descripcion: {
        type: String,
        require: true
    },
    
},);

module.exports = model('VentasModelo', VentasSchema); /**esto lo exporta */
