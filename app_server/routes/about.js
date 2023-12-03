var express = require('express');
var router = express.Router();

/* 
Passing the request for the site default starting page (root or '/' ) 
over to the new main controller 
*/
const ctrlMain = require('../controllers/about');

/* GET home page. */
router.get('/', ctrlMain.about);

module.exports = router;
