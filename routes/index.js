var express = require('express');

var router = express.Router();
//Llamando controller
const controller = require('../controllers/cursoController'); 

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET courses page. */
router.get('/api/courses', function(req, res, next) {
  controller.show(req,res);
});
module.exports = router;
