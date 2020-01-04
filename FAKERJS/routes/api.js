var createError = require('http-errors'); 
var express = require('express');
var router = express.Router();
const people = require('../people.json');
const path = require('path');

router.get('/poeti', (req,res) => {
    res.sendFile(path.join(__dirname, '../people.json'));
});

router.get('/poetaSingolo/:number', (req,res, next) => { 
    let poeta = people.persone.find(p => p.number == req.params.number)
    if (typeof poeta == 'undefined') {  
    return next(createError(404, 'Persona non trovata')); 
 }
 else
 {
   let data = JSON.stringify(poeta);
   res.send(data);
 }
});

router.get('/poetaImmagini', (req,res) => {  
    let img = [];  
    let vett_people = Object.keys(people.persone);
    for(let i = 0; i < vett_people.length; i++){ 
        img.push(people.persone[i].image);            
    }
    let data = JSON.stringify(img);
    res.send(data);
});

module.exports = router;