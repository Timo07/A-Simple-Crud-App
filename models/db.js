const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ManUtd_Transfer', {useNewUrlParser:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => console.log("Successful Connection to the Database..."));

require('./playerModel');