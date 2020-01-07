var createError = require('http-errors'); 
var express = require('express');
var router = express.Router();
const people = require('../people.json');
const path = require('path');


// L'applicazione controlla in che file sta lavorando, e nell'app.js controlla quale sia il suo path d'inizio
router.get('/', (req,res) => {
    res.send('Ciao');
});
// come si fosse davanti /api
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
    let img = [];  //creare un vettore img
    let vett_people = Object.keys(people.persone); // 
    // usiamo vett_people.length perchè il json non ha una misura
    for(let i = 0; i < vett_people.length; i++){ 
        //inseriamo dentro il vettore tutte le image del json in ordine 
        img.push(people.persone[i].image);            
    }
    // dentro data mettiamo img e la farà vedere
    let data = JSON.stringify(img);
    res.send(data);
});

module.exports = router;