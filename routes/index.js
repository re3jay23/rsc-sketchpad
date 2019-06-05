var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RSC Sketchpad' });
});

router.get('/projects/hssppo_fellowship', function(req, res, next) {
  console.log('testing')
  //res.send('testing get projects') 
  res.render('./projects/hssppo/hssppo_fellowship', { title: 'HS SPPO Fellowship' });
});

module.exports = router;
