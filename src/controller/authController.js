const express = require('express');

const Game = require('../models/game');

const router= express.Router();

router.post('/register', async (req, res) => {

    try{
        const games= await Game.create(req.body);
        return res.send ({ games });
    }   
    catch (err){
    
        return res.status(400).send({error: 'registration falied'});

    }
});

router.get('/register/:id', async (req, res) => {
        
    try{
        console.log(req.params.id);
        const games = await Game.findById(req.params.id);         
        return res.send (games);    
    }
    catch(err){
        return res.status(400).send({error: ' not registration' });
    }
});

router.put('/register/:id', async (req, res) => {
    
    try{
        const games = await Game.findByIdAndUpdate(req.params.id)
        let dataAlteracao = Date.now()
    
        games.nome = req.body.nome;
        games.descricao = req.body.descricao;
        games.genero = req.body.genero;
        games.companhia = req.body.companhia;
        games.dataAlteracao = dataAlteracao;
        await games.save();
        return res.send(games)
    }
    catch(err){
         console.log(err)
         return res.status(400).send({error: ' not registration' });
    }
});
router.delete('/register/:id', async (req, res) => {
    
    try{
        console.log(req.params.id);
        const user = await Game.findByIdAndRemove(req.params.id);     
        return res.send (user);
    }
    catch(err){
        return res.status(400).send({error: ' not registration' });
    }
});

module.exports = app => app.use('/auth',router);
