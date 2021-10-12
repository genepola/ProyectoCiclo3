const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({
    name:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    cedula:{
        type:Number,
        require: true,
        unique: true
    },
    roleeee:{
        type: Schema.Types.ObjectId,
        ref: 'role',
        require: true
    },
    estado: {
        type: Boolean,
        require: true 
    }
},);

module.exports = model('Usuario', usuarioSchema);
