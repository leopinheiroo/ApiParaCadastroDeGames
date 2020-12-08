const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest',{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('connected');
});

mongoose.connection.on('error', () => {
    console.log('error');
});
module.exports = mongoose;
