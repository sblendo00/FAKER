var createError = require ('http-errors');
var express = require('express');
var router = express.Router();
var faker = require('faker');
var people = require ('../people.json');


router.get('/:number/', function(req,res,next){
    let poeta = people.persone.find(p => p.number == req.params.number)
    if (typeof poeta === "undefined"){
        return next (createError(404, 'poeta non trovato'));

    }
    else{
        res.render ('dettagli',{
            title : `dettagli di: ${poeta.name}`,
            poeta,
        }) ; ;
    }
})
module.exports = router;