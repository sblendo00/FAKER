var createError = require ('http-errors'); // per creare l'errore
var express = require('express');
var router = express.Router();
var faker = require('faker');
var people = require ('../people.json');

// come se ci fosse davanti dettagli
router.get('/:number/', function(req,res,next){
    let poeta = people.persone.find(p => p.number == req.params.number) //poeta contiene la corrispondenza dei 2 parametri: controlla se il numero nell'URL è uguale ad un numero dentro il json
    if (typeof poeta === "undefined"){
        return next (createError(404, 'poeta non trovato'));
    }
    else{
        res.render ('dettagli',{
            title : `dettagli di: ${poeta.name}`,
            poeta, // contiene tutto il contenuto del'json di quel numero specifico inserito nell' URL
        }) ; ;
    }
})
module.exports = router;