const mongoose = require('../database');

const gameSchema = new mongoose.Schema({
       
    nome: {
        type:String,
        require:true,
    },

    descricao: {
        type:String,
        require: true,
    },

    dataCriacao: {
        type:Date,
        default:Date.now,
    },

    genero: {
        type:String,
        require:true,
    },

    companhia: {
        type:String,
        require:true,
    },

    dataAlteracao: {
        type: Date,
        require:true,
    },

});

const games= mongoose.model('Game', gameSchema);

module.exports = games;
