const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    } ,
    position:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Players', playerSchema);