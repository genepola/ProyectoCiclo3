const { Schema, model } = require('mongoose');

const rolSchema = Schema({
    name:{
        type: String,
        require: true
    }
},
{
    collection: 'rol'
});

module.exports = model ('rol', rolSchema);