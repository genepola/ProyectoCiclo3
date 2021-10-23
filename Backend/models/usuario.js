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
    email:{
        type:String,
        require: true
    },
    roles:{
        type: Schema.Types.ObjectId,
        ref: 'role',
        require: true
    },
    estado:{
        type: Schema.Types.ObjectId,
        ref: 'status',
        require: true
    },
    idToken:{
        type: String
    }
},);

module.exports = model('Usuario', usuarioSchema);
