const { Schema, model } = require('mongoose');

const rolSchema = Schema({
    name:{
        type: String,
        require: true
    }
},
{
    collection: 'roles'
});

module.exports = model ('rol', rolSchema);