var express = require('express');
var router = express.Router();
 router.get ('/', function (res, req, next) {
     res.send('niente');
 });

module.exports = router;
