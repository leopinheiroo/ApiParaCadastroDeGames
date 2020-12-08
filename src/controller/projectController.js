const express = require ('express');
const project = require('../models/project');
const task = require('../models/task');

    router.get('/', async (req,res) =>{
        res.send({user: req.userId});
    });

    router.get('/:projectId',async (req,res) => {
        res.send({user: req.userId});



    });

router.post('/', async (req,res) => {
    res.send({user: req.userId});
});

router.put('/:projectId',async (req,res) => {
    res.send({user: req.userId});



});
router.delete('/:projectId',async (req,res) => {
    res.send({user: req.userId});



});




  