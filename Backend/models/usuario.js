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
    role:{
        type: Schema.Types.ObjectId,
        ref: 'rol',
        require: true
    },
    estado: {
        type: Boolean,
        require: true 
    }
},);

module.exports = model('Usuario', usuarioSchema);
