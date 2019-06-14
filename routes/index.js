var express = require('express');

var router = express.Router();
//Llamando controller
const controller = require('../controllers/cursoController'); 

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET courses page. */
router.get('/api/courses/', function(req, res, next) {
  controller.cursos(req,res);
});

router.get('/api/courses/:course_id/enrollments', function(req, res, next) {
  controller.enrollments(req,res);
});

module.exports = router;
