var express = require('express');
var router = express.Router();
const people_file = require ('../people.json') // contiene tutto il json 
/* GET home page. */
router.get('/', (req, res) => {
    // .render passa alla pagina pug tra gli apici ES: 'index'
  res.render('index', { 
      title: 'Poeti' ,
      people: people_file.persone
    });
});

module.exports = router;