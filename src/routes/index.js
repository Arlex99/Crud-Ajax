const express = require('express');
const router = express.Router();

const Empleados = require('../models/empleados');

router.get('/', async (req, res) => {
    const empleados = await  Empleados.find();
    res.render('index', {
        empleados
    });
})

router.post('/add', async (req, res) => {
    const empleado = new Empleados(req.body);
    await empleado.save();
    res.redirect('/');
})

router.get('/calcular', async (req, res) =>{
    
    res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Empleados.remove({_id: id});
    res.redirect('/');
})



module.exports = router;