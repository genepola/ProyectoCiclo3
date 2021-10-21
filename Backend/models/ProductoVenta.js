const { Schema, model } = require('mongoose'); /**si o si se debe poner para la base de datos */

const ProductoVentaSchema = Schema({
    IdVenta: {
        type: Schema.Types.ObjectId,
        require:true,
    },
    IdProducto: {
        type: Schema.Types.ObjectId,
        require: true
    }
},);

module.exports = model('ProductoVenta', ProductoVentaSchema); /**esto lo exporta */
