var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Welcome' });
});

//
router.get('/about', (req, res, next)=>{
  res.render('about');
});

//operations
router.get('/operations', (req, res, next)=>{
  let result = 0;

  switch(req.query.op){
    case 'Add':
      result = parseInt(req.query.num) + parseInt(req.query.num1);
    break
    case 'Subtract':
      result = parseInt(req.query.num) - parseInt(req.query.num1);
    break
    case 'Multiple':
      result = parseInt(req.query.num) * parseInt(req.query.num1);
    break
    case 'Divide':
      result = parseInt(req.query.num) / parseInt(req.query.num1);
    break            
  }

  res.render('home', { title: req.query.op+' Operation',num: req.query.num, num1: req.query.num1  , result: result });
});

module.exports = router;
