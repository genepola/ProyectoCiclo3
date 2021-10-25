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
        default: '6161e389fba65a4e8b2b0050',
        require: true
    },
    estado:{
        type: Schema.Types.ObjectId,
        ref: 'status',
        default: '6166ec2caf75b084cdec9996',
        require: true
    },
    idToken:{
        type: String
    }
},);

module.exports = model('Usuario', usuarioSchema);
